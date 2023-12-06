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
import SocialDashboard from './Dashboard';
import Test from './test';
import Test2 from './testSU';

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
        <Route path='/dashboard' element={<SocialDashboard/>}></Route>
        {/* test goes to sign in , test 2 goes to sign up */}
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/test2' element={<Test2/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
