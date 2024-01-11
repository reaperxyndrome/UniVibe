import React, { useRef, useState } from 'react';
import firebase from "firebase/compat/app";
import {query,limit,orderBy ,collection, doc, setDoc} from "firebase/firestore"
import "./Chatroom.css"
import {v4 as uuidv4} from "uuid" 

import 'firebase/compat/firestore';
import {firestore ,auth} from "../../firebase.js"

import { useCollectionData } from 'react-firebase-hooks/firestore';

import DashboardNavbar from "../DashboardNavbar";
import DashboardSidebar from "../DashboardSidebar";

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;


    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
        <img className='profileIcon' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p className='messageText'>{text}</p>
        </div>
    </>)
    }

function Sports() {
    const dummy = useRef();
    const messagesRef = collection(firestore,"Sports");
    const queries = query(messagesRef,orderBy("createdAt"),limit(25));

    const [messages] = useCollectionData(queries, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await setDoc(doc(firestore,"Sports",uuidv4()),{
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>

           
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
        <DashboardNavbar></DashboardNavbar>
          <div className="flex">
            <DashboardSidebar></DashboardSidebar>
              <div className="chatContainer ">
                <main className='chatContainerMain'>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                        <span ref={dummy} />
                        </main>
                            <form onSubmit={sendMessage} className='formMessage'>
                                <input className='inputbox' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                                <button className='submitbutton' type="submit" >Send</button>
                            </form>
                
              </div>
            </div>
          </div>
    </>)
}

export default Sports