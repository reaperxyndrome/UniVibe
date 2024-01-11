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
import Communities from './dashboard/Communities';
import Hangout from './dashboard/Hangout';
import SignInCommunities from './SignInCommunities';

import GamingCommunity from './dashboard/communityChatRoom/GamingCommunity';
import Anime from './dashboard/communityChatRoom/Anime'
import Sports from './dashboard/communityChatRoom/sports';
import Study from './dashboard/communityChatRoom/Study';
import Music from './dashboard/communityChatRoom/Music';
import Business from './dashboard/communityChatRoom/Business';
import ChatRoom from './dashboard/communityChatRoom/ChatRoom';

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
        <Route path='/dashboard/communities' element={<Communities/>}/>
        <Route path='/dashboard/hangout' element={<Hangout/>}/>
        <Route path='/chatroom/signin' element={<SignInCommunities/>}/>

        
        <Route path='/dashboard/generalchat' element={<ChatRoom/>}/>
        <Route path='/dashboard/gamechat' element={<GamingCommunity/>}/>
        <Route path='/dashboard/anime' element={<Anime/>}/>
        <Route path='/dashboard/sports' element={<Sports/>}/>
        <Route path='/dashboard/business' element={<Business/>}/>
        <Route path='/dashboard/music' element={<Music/>}/>
        <Route path='/dashboard/study' element={<Study/>}/>

        
      </Routes>
    </>
    
  )
}

export default App
