import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

function Dashboard() {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          <DashboardNavbar></DashboardNavbar>
          <DashboardSidebar></DashboardSidebar>
      </div>
    );
  }
  
  export default Dashboard;