import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactForm() {
	return(
		<div className="mt-8">
			<h3 className="text-xl font-semibold mb-4">Send us a message</h3>
			<form>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
					<input type="text" id="name" className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-600 leading-tight focus:outline-none focus:shadow-outline" />
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
					<input type="email" id="email" className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-600 leading-tight focus:outline-none focus:shadow-outline" />
				</div>
				<div className="mb-4">
					<label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
					<textarea id="message" rows="4" className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-600 leading-tight focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Send
				</button>
			</form>
		</div>
	)
}
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
		<ContactForm></ContactForm>
		<Footer></Footer>
		</div>
	);
}

export default Contact;