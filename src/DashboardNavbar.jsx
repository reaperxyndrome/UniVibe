

function DashboardNavbar() {
	return(
		<nav className="flex justify-between bg-gray-800 border-b p-4">
            <div className="flex items-center flex-shrink-0 text-white">
                <span className="font-bold text-2xl">UniVibe</span>
            </div>
            <div className="flex gap-x-5 text-white">
                <a href="/dashboard/notification"><img src="/bell-icon.svg" className="h-10"></img></a>
                <a href="/dashboard/profile"><img src="/user-profile-icon.svg" className="h-10"></img></a>
            </div>
		</nav>
	)
  }

export default DashboardNavbar;