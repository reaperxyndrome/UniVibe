import { useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import 'firebase/database'
// import { useNavigate } from "react-router-dom";
// import { set } from "firebase/database";
import {useNavigate} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
import {firestore} from "./firebase.js"
import {doc, setDoc} from "firebase/firestore"

async function fetchUserId(username) {
    try {
        const response = await fetch(`http://localhost:8094/api/v1/user/by-usernames?usernames=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const data = await response.json();
        const userId = data[0].id;
        console.log('Success:', userId);
        return userId;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
  }
function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: 0,
        binus_branch: '',
        binusian_id: 0,
        first_name: '',
        last_name: '',
        interests: '',
        major: ''
        // confirmPassword: '',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
        console.log(formData)
    };

    const sendUserDataFirebase = async (userId) => {
        try {
            // e.preventDefault();
            console.log(userId)
            const userIdString = userId.toString()
            console.log(userIdString)
    
            await setDoc(doc(firestore,"Users", userIdString),{
                username: formData.username,
                email:formData.email,
                age : formData.age,
                binus_branch: formData.binus_branch,
                first_name: formData.first_name,
                last_name: formData.last_name,
                interests: formData.interests,
                major: formData.major,
                binusian_id: formData.binusian_id
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const MySQLSignUp = async () => {
        try {
            console.log("hello")
            const response = await fetch('http://localhost:8094/api/v1/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });
            console.log("hello2")
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response;
            // console.log(data)
            console.log('Success:', data);
            // return userId
            // Reset the form after successful submission
            // setFormData({
            //     fullName: '',
            //     email: '',
            //     password: '',
            //     // confirmPassword: '',
            // });
    
            
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await MySQLSignUp();
            const userId = await fetchUserId(formData.username)
            // const userId2 = toString(userId)
            await console.log(userId)
            await sendUserDataFirebase(userId);
            
            navigate("/signin");
        } catch (error) {
            console.error('Error:', error);
        }
        
    };




    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <main className="flex flex-col items-center flex-grow w-[480px] mx-auto mt-10 mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8">Sign Up</h2>
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
                pattern=".+@binus\.ac\.id$"
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
            <div>
                <label htmlFor="age" className="block text-sm font-medium text-white">
                Age
                </label>
                <input
                type="text"
                name="age"
                id="age"
                pattern="[0-9]+"
                value={formData.age}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="binus_branch" className="block text-sm font-medium text-white">
                Binus Branch
                </label>
                <select
                    id="binus_branch"
                    name="binus_branch"
                    value={formData.binus_branch}
                    onChange={handleChange}
                >
                    <option value="JWC Senayan">JWC Senayan</option>
                    <option value="Binus FX Senayan">Binus FX Senayan</option>
                    <option value="Binus SMB">Binus SMB</option>
                    <option value="Binus Kemanggisan">Binus Kemanggisan</option>
                    <option value="Binus Anggrek">Binus Anggrek</option>
                    <option value="Binus Malang">Binus Malang</option>
                    <option value="Binus Kijang">Binus Kijang</option>
                    <option value="Binus Bandung">Binus Bandung</option>
                    <option value="Binus Alam Sutera">Binus Alam Sutera</option>
                    <option value="Binus Semarang">Graphic Design & New Media</option>
                    <option value="Binus Syahdan">Binus Syahdan</option>
                </select>
                {/* <input
                type="text"
                name="binus_branch"
                id="binus_branch"
                value={formData.binus_branch}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                /> */}
            </div>
            <div>
                <label htmlFor="binus_branch" className="block text-sm font-medium text-white">
                Binusian Id
                </label>
                <input
                type="text"
                name="binusian_id"
                id="binusian_id"
                pattern="[0-9]+"
                value={formData.binusian_id}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-white">
                First Name
                </label>
                <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-white">
                Last Name
                </label>
                <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="interests" className="block text-sm font-medium text-white">
                Interests
                </label>
                <input
                type="text"
                name="interests"
                id="interests"
                value={formData.interests}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                />
            </div>
            <div>
                <label htmlFor="major" className="block text-sm font-medium text-white">
                Major
                </label>
                <select
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                >
                    <option value="Business Information System">Business Information System</option>
                    <option value="Business Management & Marketing">Business Management & Marketing</option>
                    <option value="Communication">Communication</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Digital Business">Digital Business</option>
                    <option value="Finance">Finance</option>
                    <option value="International Business">International Business</option>
                    <option value="Fashion Design">Fashion Design</option>
                    <option value="Fashion Management">Fashion Management</option>
                    <option value="Graphic Design & New Media">Graphic Design & New Media</option>
                    <option value="Interactive Digital Media">Interactive Digital Media</option>
                </select>
                {/* <input
                type="text"
                name="major"
                id="major"
                value={formData.major}
                onChange={handleChange}
                className=" text-black h-7 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                /> */}
            </div>
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