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
			<div className="mt-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">Ready to join us?</h2>
                <p className="mb-4">Sign up now and start connecting with like-minded individuals!</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/signup">Join Us Now</a>
                </button>
            </div>
			
		</div>
	);
}

export default Testimonials;