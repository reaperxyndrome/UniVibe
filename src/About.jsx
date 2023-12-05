import Navbar from "./Navbar";
import Footer from "./Footer"

function Testimonials() {
	const testimonials = [
		{
		name: 'John Doe',
		testimonial: 'This website is amazing! I have made so many new friends.',
		},
		{
			name: 'John Doe',
			testimonial: 'This website is amazing! I have made so many new friends.',
		},
		{
		name: 'Jane Smith',
		testimonial: 'I love this website. It has helped me find like-minded individuals.',
		},
		// Add more testimonials as needed
	];

	return (
		<div className="flex flex-col items-center mt-10 mb-10">
			<h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
			<div className="flex">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="w-[240px] mb-4">
						<p className="text-lg font-bold">{testimonial.name}</p>
						<p className="text-lg">{testimonial.testimonial}</p>
					</div>
				))}
			</div>
			<div className="mt-4">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					<a href="/signup">Join Us Now</a>
				</button>
			</div>
			
		</div>
	);
}
  
function About() {
	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
		<Navbar></Navbar>
		<main className="flex-grow w-[600px] max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 className="text-3xl font-semibold mb-8">About Us</h2>
			<p className="text-lg mb-4">
			Welcome to Our Website! We are a team of passionate individuals dedicated to providing a platform for social interaction and collaboration. Our mission is to create a space where people can connect, hangout, attend meetups, chat, and create groups based on shared interests.
			</p>
			<p className="text-lg mb-4">
			Whether you are looking to make new friends, find like-minded individuals, or simply explore new opportunities, Our Website is the place for you. Join us on this exciting journey as we build a community that values connection and shared experiences.
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