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
import Dashboard from './dashboard/Dashboard';
import UserProfile from './dashboard/UserProfile';
import NotificationPage from './dashboard/Notification';
import Hangout from './dashboard/Hangout';

function App() {
  // something
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/profile' element={<UserProfile/>}/>
        <Route path='/dashboard/notification' element={<NotificationPage/>}/>
        <Route path='/dashboard/hangout' element={<Hangout/>}/>
      </Routes>
    </>
    
  )
}

export default App
