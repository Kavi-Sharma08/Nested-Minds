import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const videos: string[] = [
  'https://www.youtube.com/embed/bMknfKXIFA8',
  'https://www.youtube.com/embed/W6NZfCO5SIk',
  'https://www.youtube.com/embed/TlB_eWDSMt4',
  'https://www.youtube.com/embed/Fdf5aTYRW0E',
];

const StudentDashboard: React.FC = () => {
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * videos.length);
    setRandomIndex(index);

    const handleVisibilityChange = () => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      });

      if (document.visibilityState === 'hidden') {
        console.log(
          JSON.stringify({
            event: 'tab_left',
            timestamp: formattedTime,
            message: 'User left the tab.',
          })
        );
      } else if (document.visibilityState === 'visible') {
        console.log(
          JSON.stringify({
            event: 'tab_returned',
            timestamp: formattedTime,
            message: 'User returned to the tab.',
          })
        );
      }
    };

    // Adding event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup listener when component is unmounted
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-blue-50 text-blue-900 overflow-hidden">
      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-40 top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 space-y-6 transform transition-all duration-500 ease-in-out
          ${isSidebarOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'}
          md:${isSidebarOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FiX />
          </button>
        </div>
        <h2 className="text-2xl font-bold hidden md:block">Student Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="hover:bg-blue-700 p-2 rounded block">Home</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded block">Courses</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded block">Assignments</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded block">Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300`}>
        {/* Top Navbar */}
        <header className="bg-blue-700 text-white p-4 flex items-center justify-between shadow-md relative z-30">
          <div className="flex items-center space-x-4">
            {/* Always show hamburger */}
            <button onClick={toggleSidebar} className="text-2xl text-white focus:outline-none">
              <FiMenu />
            </button>
            <h1 className="text-xl font-semibold">Welcome, Student</h1>
          </div>
          <div className="space-x-4">
            <button className="hover:bg-blue-600 px-4 py-2 rounded transition">Settings</button>
            <button className="hover:bg-blue-600 px-4 py-2 rounded transition">Logout</button>
          </div>
        </header>

        {/* Main Area */}
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Today's Coding Lesson</h2>
          <div className="relative w-full max-w-4xl aspect-video mx-auto shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={videos[randomIndex]}
              title="Coding Tutorial"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
