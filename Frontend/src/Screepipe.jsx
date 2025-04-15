import React, { useEffect } from 'react';
import { DesktopUseClient } from 'desktop-use';
import { createClient } from '@screenpipe/client';

const client = new DesktopUseClient(); // localhost:9375 (or your custom URL)

const Screenpipe = () => {
  useEffect(() => {
    // Open the dashboard URL
    const openDashboard = async () => {
      try {
        console.log('Opening dashboard...');
        await client.openUrl('http://localhost:5173/dashboard');
        console.log('Dashboard opened.');
      } catch (err) {
        console.error('Failed to open dashboard:', err);
      }
    };

    openDashboard();

    // Set up Screenpipe tracking without a project ID
    const screenpipe = createClient();

    // Track click events
    screenpipe.track({
      clicks: true,
      blur: true,
      focus: true,
      visibility: true,
    });

    // Cleanup when component is unmounted
    return () => {
      screenpipe.stop();
      console.log('Screenpipe tracking stopped.');
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Tracking Started</h2>
      <p>We are now tracking user interactions on your dashboard!</p>
    </div>
  );
};

export default Screenpipe;
