import { useState } from "react";
import Navbar from "./StaticNavbar";
import Footer from "./Footer";
import { auth ,provider} from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';



import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';




function SignInCommunities() {
    // wololo
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

    const [user] = useAuthState(auth);

    const signInWithGoogle =async () => {
        await signInWithPopup(auth,provider);
      }

    function redirectCommunities(){
        return navigate("/dashboard/communities")
    }

    
    function redirectError(){
        return navigate("/chatroom/signin")
    }
    return (
        
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar></Navbar>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        
        {user ? redirectCommunities():redirectError()}
        <Footer></Footer>
        </div>
    );
}

export default SignInCommunities;