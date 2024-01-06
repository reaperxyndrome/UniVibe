import DashboardComponents from "./DashboardComponents"
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";

function Dashboard() {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          <DashboardNavbar></DashboardNavbar>
          <DashboardComponents></DashboardComponents>
          <DashboardSidebar></DashboardSidebar>
          <Footer></Footer>
      </div>
    );
  }
  
  export default Dashboard;