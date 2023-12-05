// import React from 'react';
import UserProfile from './UserProfile';
// import FriendsList from './FriendsList';
// import HangoutPlanner from './HangoutPlanner';
// import MessagingSection from './MessagingSection';
// import ActivityFeed from './ActivityFeed';
// import Recommendations from './Recommendations';
// import Notifications from './Notifications';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

function SocialDashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
        <DashboardNavbar></DashboardNavbar>
        <DashboardSidebar></DashboardSidebar>
      <aside className="w-1/4 overflow-y-auto">
        <UserProfile />
        {/* <FriendsList /> */}
        {/* <Notifications /> */}
      </aside>
      <main className="flex-1 overflow-y-auto"> {/* Main Content */}
        {/* <HangoutPlanner /> */}
        {/* <MessagingSection /> */}
        {/* <ActivityFeed /> */}
        {/* <Recommendations /> */}
      </main>
    </div>
  );
}

export default SocialDashboard;
