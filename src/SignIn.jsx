import { useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";

function SignIn() {
    // wololo
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to an API or perform validation
        fetch('http://localhost:8094/api/v1/auth/login', { // Replace '/api/signup' with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Reset the form after successful submission
            setFormData({
                username: '',
                password: '',
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
            username: '',
            password: '',
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex flex-col items-center flex-grow w-[480px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8">Sign In</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
                </label>
                <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
                </label>
                <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Sign In
                </button>
            </div>
            <div className="mt-2">
                Don&apos;t have an account yet? 
                <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
                    Sign Up
                </a>
            </div>
            </form>
        </main>
        <Footer></Footer>
        </div>
    );
}

export default SignIn;