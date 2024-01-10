import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";
import CommunityCard from "./CommunityCard";

// Define the component in Communities
function Communities() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      {/* This is the Dashboard's Navbar which can be found at the top of the page */}
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        {/* This is the Dashboard's Sidebar which can be found on the side of the page */}
        <DashboardSidebar></DashboardSidebar>
        <div className="flex flex-col items-center p-7">
          {/* This is the title of the page which is "Communities" */}
          <h1 className="text-3xl font-bold mb-5">Communities</h1>
          {/* This is the button to create new community */}
          {/* Create Community Button */}
          <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Community
          </button>
          
          <div className="flex flex-wrap gap-5 mt-5">
            {/* This is the card to show the community */}
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Communities;
