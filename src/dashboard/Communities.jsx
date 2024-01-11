import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";
import CommunityCard from "./CommunityCard";


import firebase from "firebase/compat/app";
import {query,limit,orderBy ,collection, doc, setDoc, getDoc} from "firebase/firestore"
import 'firebase/compat/firestore';
import {firestore ,auth} from "../firebase.js"

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from "react";


import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';



import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from "react-router-dom";

function Communities() {
  const navigate= useNavigate()
  const [communities, setCommunities]= useState(
    [
      {
        name:"Business",
        description:"mmm stonks",
        icon:"https://64.media.tumblr.com/1d5519fa3f73f9d247a1ced5358d0aa3/f6808718fb522cf9-dc/s540x810/2f4c1bd9ff1a429868b2fdd9595f4eb8214e0550.gif",
        chatname:"business"
      }
      ,{
        name:"Anime",
        description:"bau bawang selalu",
        icon:"https://pbs.twimg.com/media/F2SMj2vXsAACjk5.jpg",
        chatname:"anime"
      },{
        name:"Music",
        description:"spread your music tastes",
        icon:"https://mediaformasi.com/content/images/2023/11/F-PV37-bAAAyY2n.jpeg",
        chatname:"music"
      },{
        name:"Study",
        description:"talk with other people about subjects",
        icon:"https://preview.redd.it/nerdy-band-v0-s97uphje6zga1.jpeg?width=1080&format=pjpg&auto=webp&s=812e03fc0f2ba5cfb68419fdd06d04059d765a5a",
        chatname:"study"
      },{
        name:"Sports",
        description:"talk about sports",
        icon:"https://i.kym-cdn.com/photos/images/newsfeed/002/425/556/a99",
        chatname:"sports"
      },{
        name:"Gaming",
        description:"enter if you want to be toxic",
        icon:"https://cdn-icons-png.flaticon.com/512/5087/5087379.png",
        chatname:"gamechat"
      }
    ]
  )
  
  const [user] = useAuthState(auth);
  function redirectError(){
    return navigate("/chatroom/signin")
}

  function chatcommunities(){
    return (<div className="flex flex-col h-screen overflow-hidden bg-gray-100">
    <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex flex-col items-center p-7">
          <h1 className="text-3xl font-bold mb-10">Communities</h1>
          <div className="h-96 flex flex-wrap gap-5 overflow-y-scroll">
            {communities.map((community)=>{
              return(
              <CommunityCard
                name={community.name}
                description={community.description}
                icon={community.icon}
                chatname={community.chatname}
              />);
            })}
          </div>
        </div>
        
      </div>
      <Footer></Footer>
  </div>)
  }
  return (
    <div>
      {user? chatcommunities():redirectError()}
      
    </div>
    
    );
  }
  
  export default Communities;