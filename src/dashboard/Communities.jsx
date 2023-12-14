import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";
import CommunityCard from "./CommunityCard";
import "./CommunityStyles.css";

function Communities() {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          <DashboardNavbar></DashboardNavbar>
          <DashboardSidebar></DashboardSidebar>
          <div className="Community-container">
          <CommunityCard/><CommunityCard/><CommunityCard/><CommunityCard/><CommunityCard/>
          </div>

          <Footer></Footer>
      </div>
    );
  }
  
  export default Communities;