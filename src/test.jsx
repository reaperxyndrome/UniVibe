import { useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Test() {
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to an API or perform validation
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        });
    };


    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const signin =(e)=>{
        //
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
        navigate('/dashboard');
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex flex-col items-center flex-grow w-[480px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8">Sign In</h2>
            <form onSubmit={signin} className="w-full space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
                </label>
                <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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

export default Test;