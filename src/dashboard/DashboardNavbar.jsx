// Defining the DashboardNavbar components
function DashboardNavbar() {
	return(
		<nav className="flex justify-between bg-gray-800 border-b p-4">
        {/* This contains the logo or title of the application */}
        <div className="flex items-center flex-shrink-0 text-white">
            {/* This is the title of the application */}
            <span className="font-bold text-2xl">UniVibe</span>
        </div>
        {/* Contains the navigation links */}
        <div className="flex gap-x-5 text-white">
            {/* This is to create a link to the notification page with a bell icon */}
            <a href="/dashboard/notification"><img src="/bell-icon.svg" className="h-8"></img></a>
            {/* This is to create a link to the profile page with a user icon */}
            <a href="/dashboard/profile"><img src="/user-profile-icon.svg" className="h-8"></img></a>
        </div>
		</nav>
	)
  }

// Exporting the DashboardNavbar components so that it can be used by other parts of the application  
export default DashboardNavbar;