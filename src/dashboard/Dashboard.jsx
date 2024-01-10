import DashboardComponents from "./DashboardComponents"
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";

// Defining the Dashboard components
function Dashboard() {
    return (
      // This is all the elements of the Dashboard page
      <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          // This is the Dashboard's Navbar which is located at the top of the page
          <DashboardNavbar></DashboardNavbar>
          <div className="flex">
          // This is the Dashboard's Sidebar which is located at the side of the page
          <DashboardSidebar></DashboardSidebar>
          // This is the Dashboard's components which is located at the center of the page
          <DashboardComponents></DashboardComponents>
          </div>
          // This is the Dashboard's Footer which is located at the bottom of the page
          <Footer></Footer>
      </div>
    );
  }
  
  // Exporting the Dasboard components so that it can be used by other parts of the application
  export default Dashboard;