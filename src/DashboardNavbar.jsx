

function DashboardNavbar() {
	return(
		<nav className="flex justify-between bg-gray-800 p-4">
            <div className="flex items-center flex-shrink-0 text-white">
                <span className="font-semibold text-xl">UniVibe</span>
            </div>
            <div className="flex text-white">
                <a href='/dashboard' to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href='/communities' to="/communities" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Communities</a>
                {/* <a href='/services' to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a> */}
                <a href='/hangout' to="/hangout" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hangout</a>
                <a href='/friends' to="/friends" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Friends</a>
                <a href="/profile"><img src="/user-profile-icon.svg" className="h-10"></img></a>
            </div>
		</nav>
	)
  }

export default DashboardNavbar;