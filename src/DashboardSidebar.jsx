// import React from 'react';

function DashboardSidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <nav>
        <ul>
          <li><a href="/dashboard/profile">Profile</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardSidebar;