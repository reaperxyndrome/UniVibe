import Navbar from "./Navbar"
import Footer from "./Footer"
function Hero() {
    return (
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-8">
            Discover amazing features and explore what we have to offer!
          </p>
          <button className="bg-white text-blue-600 py-2 px-4 rounded-md font-semibold hover:bg-blue-100">
            Get Started
          </button>
        </div>
      </div>
    );
  }
  
  function Features() {
    return (
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hangout</h3>
              <p className="text-gray-600 mb-4">
                Hangout with friends and socialize in a fun environment.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Meetup</h3>
              <p className="text-gray-600 mb-4">
                Plan and attend meetups with like-minded individuals.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Chat</h3>
              <p className="text-gray-600 mb-4">
                Connect and communicate through instant messaging.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Create Groups</h3>
              <p className="text-gray-600 mb-4">
                Form groups based on common interests and activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
function Home(){
	return(
		<div className="h-screen bg-black">
			<Navbar></Navbar>
			<Hero></Hero>
			<Features></Features>
			<Footer></Footer>   
		</div>
	)
}

export default Home;