import Navbar from "./StaticNavbar";
import Footer from "./Footer"
import Testimonials from "./Testimonials";
  
function About() {
	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
		<Navbar></Navbar>
		<main className="flex-grow w-[600px] max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 className="text-3xl font-semibold mb-8">About Us</h2>
			<p className="text-lg mb-4">
			Welcome to UniVibe, where connections spark, and passions ignite. We're not just another platform; we're a vibrant hub designed for like-minded individuals to gather, connect, and forge lasting friendships. Our mission is to cultivate a dynamic space where people come together based on shared interests and hobbies, fostering meaningful interactions and the exploration of diverse passions.
			</p>
			<p className="text-lg mb-4">
			At UniVibe, we deeply value the transformative power of connecting through shared enthusiasms. Here, users discover not only new connections but also the profound sense of camaraderie that arises when passions align. We believe that these authentic bonds formed around common interests are the catalysts for extraordinary friendships, creating a community where genuine connections flourish and new possibilities emerge.
			</p>
			<p className="text-lg">
			Thank you for being a part of our community!
			</p>
		</main>
		<Testimonials></Testimonials>
		<Footer></Footer>
		</div>
	);
}

export default About;