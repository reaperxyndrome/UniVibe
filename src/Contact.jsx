import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
		<Navbar></Navbar>
		<main className="flex-grow max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
			<p className="text-lg mb-4">
			We&apos;d love to hear from you! Contact us through the information below:
			</p>
			<div className="flex flex-col md:flex-row items-center justify-between">
			<div className="w-full md:w-1/2 mb-6 md:mb-0">
				<h3 className="text-xl font-semibold mb-4">Email</h3>
				<p className="text-gray-600">info@example.com</p>
			</div>
			<div className="w-full md:w-1/2">
				<h3 className="text-xl font-semibold mb-4">Phone</h3>
				<p className="text-gray-600">+1 (123) 456-7890</p>
			</div>
			</div>
			<div className="mt-8">
			<h3 className="text-xl font-semibold mb-4">Address</h3>
			<p className="text-gray-600">
				123 Street Name, City, State, Zip Code
			</p>
			</div>
		</main>
		<Footer></Footer>
		</div>
	);
}

export default Contact;