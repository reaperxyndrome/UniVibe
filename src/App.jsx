/* eslint-disable no-unused-vars */
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import SignUp from "./SignUp";
import About from './About';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';

function App() {

  return (
    // <Router>
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/profile' element={<UserProfile/>}/>
      </Routes>
    </>
    
  )
}

export default App
