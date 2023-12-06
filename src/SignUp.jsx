import { useEffect, useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import 'firebase/database'
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";


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
    const [username, setUsername] = useState('');
    const navigate= useNavigate();

    const signup =(e)=>{
        //
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential);
            // ...
        }).catch((error) => {
            console.log(error);
        });
        navigate('/dashboard');
        // TODO unable to redirect to dashboard 
        //(cannot call redirect function after submitting form)
        // useEffect(()=>{
        //     const unsubscribe= onAuthStateChanged(auth, (user) => {
        //         setCurrentUser(user)
        //         setLoading(false)
        //     })
        //       return unsubscribe;
        // },[])
    
        

        //return redirect()
    }


    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex flex-col items-center flex-grow w-[480px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8">Sign Up</h2>
            <form onSubmit={signup} className="w-full space-y-6">
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white">
                Full Name
                </label>
                <input
                type="text"
                name="fullName"
                id="fullName"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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