/* eslint-disable no-unused-vars */
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import SignUp from "./SignUp";
import About from './About';

function Hero() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-8">
          Discover amazing features and explore what we have to offer!
        </p>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md font-semibold hover:bg-blue-100">
          Get Started
        </button>
      </div>
    </div>
  );
}


function App() {

  return (
    // <Router>
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
