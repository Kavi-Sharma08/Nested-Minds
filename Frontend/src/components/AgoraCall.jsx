import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import AgoraChat from 'agora-chat';

const APP_ID = import.meta.env.VITE_AGORA_URL;
const CHAT_APP_KEY = import.meta.env.VITE_AGORA_CHAT_APP_KEY;
console.log(CHAT_APP_KEY)
const CHANNEL = 'watchlog-room';
const TOKEN = "007eJxTYNC5/3eq+upbC1IjNimZyp9Yy2IlOinwfvq8bTuvdj06wS6owGCZmmhqYpFilpyWYmSSamxmaZhqYWxhaJZsnJRkZpxm1L78T3pDICOD7vXDzIwMEAji8zKUJ5YkZ+Tkp+sW5efnMjAAAMe6JFA=";
const CHAT_TOKEN = '007eJxTYJB/pJtRfnN9oOEOjTset06bfi2a+uzKRQv3DE4jh/L5elwKDJapiaYmFilmyWkpRiapxmaWhqkWxhaGZsnGSUlmxmlGfSv+pDcEMjJ456gwMDKwAjETA4jPwAAAjCIdXQ==';

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

export default function AgoraCall() {
  const localContainer = useRef(null);
  const micTrack = useRef(null);
  const videoTrack = useRef(null);
  const screenTrack = useRef(null);
  const chatClient = useRef(null);

  const [joined, setJoined] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState({});

  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatConnected, setChatConnected] = useState(false);

  const userId = 'host_' + Math.floor(Math.random() * 10000); // Replace with actual user ID

  const joinCall = async () => {
    try {
      await client.join(APP_ID, CHANNEL, TOKEN, userId);
      const [mic, cam] = await AgoraRTC.createMicrophoneAndCameraTracks();
      micTrack.current = mic;
      videoTrack.current = cam;

      setTimeout(() => {
        if (localContainer.current) {
          videoTrack.current.play(localContainer.current);
        }
      }, 100);

      await client.publish([micTrack.current, videoTrack.current]);
      setJoined(true);

      // Agora Chat init
      chatClient.current = new AgoraChat.connection({ appKey: CHAT_APP_KEY });

      chatClient.current.addEventHandler('chat-events', {
        onConnected: () => {
          setChatConnected(true);
          console.log('✅ Agora Chat connected');
        },
        onDisconnected: () => {
          setChatConnected(false);
          console.log('🚫 Agora Chat disconnected');
        },
        onTextMessage: (message) => {
          setChatMessages((prev) => [...prev, { from: message.from, text: message.msg }]);
        },
      });

      chatClient.current.open({
        user: userId,
        accessToken: CHAT_TOKEN,
      });

      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video' || mediaType === 'all') {
          setRemoteUsers((prev) => ({
            ...prev,
            [user.uid]: user,
          }));

          setTimeout(() => {
            const remoteContainer = document.getElementById(`remote-user-${user.uid}`);
            if (remoteContainer && user.videoTrack) {
              user.videoTrack.play(remoteContainer);
            }
          }, 200);
        }
      });

      client.on('user-unpublished', (user) => {
        setRemoteUsers((prev) => {
          const updated = { ...prev };
          delete updated[user.uid];
          return updated;
        });

        const el = document.getElementById(`remote-user-${user.uid}`);
        if (el) el.remove();
      });
    } catch (err) {
      console.error('❌ Error joining call:', err);
    }
  };

  const toggleMic = () => {
    if (micTrack.current) {
      micTrack.current.setEnabled(!micOn);
      setMicOn(!micOn);
    }
  };

  const toggleCam = () => {
    if (videoTrack.current) {
      videoTrack.current.setEnabled(!camOn);
      setCamOn(!camOn);
    }
  };

  const toggleScreenShare = async () => {
    if (!screenSharing) {
      try {
        screenTrack.current = await AgoraRTC.createScreenVideoTrack();
        await client.unpublish(videoTrack.current);
        await client.publish(screenTrack.current);
        screenTrack.current.play(localContainer.current);
        setScreenSharing(true);
      } catch (err) {
        console.error('Error starting screen share:', err);
      }
    } else {
      await client.unpublish(screenTrack.current);
      await client.publish(videoTrack.current);
      videoTrack.current.play(localContainer.current);
      screenTrack.current.close();
      setScreenSharing(false);
    }
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const message = AgoraChat.message.create({
      type: 'txt',
      to: CHANNEL,
      chatType: 'chatRoom',
      msg: chatInput,
    });

    try {
      await chatClient.current.send(message);
      setChatMessages((prev) => [...prev, { from: 'You', text: chatInput }]);
      setChatInput('');
    } catch (error) {
      console.error('❌ Failed to send message', error);
    }
  };

  useEffect(() => {
    return () => {
      chatClient.current?.close();
    };
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow bg-white space-y-6">
      <h2 className="text-xl font-bold">🎥 Live Classroom (Agora)</h2>

      {!joined && (
        <button
          onClick={joinCall}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Join Call
        </button>
      )}

      {joined && (
        <>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Host */}
            <div className="space-y-2 max-w-sm w-full">
              <h4 className="text-lg font-semibold text-gray-700">🧑‍🏫 Host (You)</h4>
              <div
                ref={localContainer}
                className="w-full h-48 sm:h-52 bg-black rounded-lg shadow overflow-hidden"
              />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={toggleMic}
                  className={`px-4 py-2 rounded ${micOn ? 'bg-green-600' : 'bg-gray-400'} text-white`}
                >
                  {micOn ? '🎙️ Mic On' : '🔇 Mic Off'}
                </button>

                <button
                  onClick={toggleCam}
                  className={`px-4 py-2 rounded ${camOn ? 'bg-purple-600' : 'bg-gray-400'} text-white`}
                >
                  {camOn ? '📷 Cam On' : '🚫 Cam Off'}
                </button>

                <button
                  onClick={toggleScreenShare}
                  className={`px-4 py-2 rounded ${screenSharing ? 'bg-red-600' : 'bg-yellow-600'} text-white`}
                >
                  {screenSharing ? '🛑 Stop Share' : '🖥️ Share Screen'}
                </button>
              </div>
            </div>

            {/* Students */}
            <div className="flex-1 space-y-2">
              <h4 className="text-lg font-semibold text-gray-700">🧑‍🎓 Students</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(remoteUsers).map(([uid, user]) => (
                  <div
                    key={uid}
                    id={`remote-user-${uid}`}
                    className="w-full h-48 bg-black rounded-lg shadow overflow-hidden"
                  />
                ))}
                {Object.keys(remoteUsers).length === 0 && (
                  <p className="text-sm text-gray-500 italic">No students joined yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold">💬 Group Chat</h3>
            <div className="h-48 overflow-y-auto border rounded p-2 mb-2 bg-gray-50 text-sm">
              {chatMessages.map((msg, index) => (
                <div key={index}>
                  <strong>{msg.from}:</strong> {msg.text}
                </div>
              ))}
              {chatMessages.length === 0 && (
                <p className="text-gray-400">No messages yet.</p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border rounded px-3 py-2"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
