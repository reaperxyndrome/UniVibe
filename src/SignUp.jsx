import { useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import 'firebase/database'
// import { useNavigate } from "react-router-dom";
// import { set } from "firebase/database";


function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        fetch('http://localhost:8094/api/v1/auth/sign-up', { // Replace '/api/signup' with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.fullName,
                email: formData.email,
                password: formData.password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Reset the form after successful submission
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };




    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex flex-col items-center flex-grow w-[480px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8">Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white">
                Full Name
                </label>
                <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
                </label>
                <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
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
            {/* <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
                </label>
                <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div> */}
            <div>
                <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Sign Up
                </button>
            </div>
            <div className="mt-2">
                Already have an account?
                <a href="/signin" className="text-indigo-600 hover:text-indigo-500">
                     Sign In
                </a>
            </div>
            </form>
            {/* {AuthDetails()} */}
        </main>
        <Footer></Footer>
        </div>
    );
}

export default SignUp;