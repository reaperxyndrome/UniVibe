// import React from 'react';

function DashboardSidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      
      <nav>
        <ul className="flex flex-col gap-y-4 text-xl">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/communities">Communities</a></li>
            <li><a href="/dashboard/hangout">Hangout</a></li>
            <li><a href="/dashboard/friends">Friends</a></li>
            {/* Add more navigation links here */}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardSidebar;