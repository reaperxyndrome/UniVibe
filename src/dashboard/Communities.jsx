import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";
import CommunityCard from "./CommunityCard";

function Communities() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex flex-col items-center p-7">
          <h1 className="text-3xl font-bold mb-5">Communities</h1>
          {/* Create Community Button */}
          <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Community
          </button>
          
          <div className="flex flex-wrap gap-5 mt-5">
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
