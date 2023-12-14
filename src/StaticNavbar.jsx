function Navbar() {
	// yo
	
	return(
		<nav className="flex justify-between bg-gray-800 p-4">
		<div className="flex items-center flex-shrink-0 text-white">
			<span className="font-semibold text-xl">UniVibe</span>
		</div>
		<div className="flex text-white">
			<a href='/' to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
			<a href='/about' to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
			{/* <a href='/services' to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a> */}
			<a href='/contact' to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
			<a href='/signup' to="/signup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
		</div>
		</nav>
	)
  }

export default Navbar;