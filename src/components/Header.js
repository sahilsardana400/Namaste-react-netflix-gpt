import React from 'react'
import logo from "../assets/images/logo.svg"
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { updateGptToogle } from '../utils/gptSlice';
import { updateLanguage } from '../utils/langSlice';
import { supportedLanguages } from '../utils/langConstants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //this will only load at once only when component renders not again and again
  useEffect(() => {
    
    const unsubscribeMe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //const uid = user.uid;
        const {uid,email,displayName} = user;
        dispatch(addUser( {
          uid:uid,email:email,displayName:displayName
        } ));//use distach to action from userslice
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    //onAuthStateChanged returns a function that we can listen for to stop listening event , so we can use it when component is unmounted
    return () => unsubscribeMe();//this is called when component is unmounted

  },[]);

  const signOutHandle = () => {
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        // An error happened.
      });
  };

  const user = useSelector((store) => store.user);
  const toggleSwitchValue = useSelector((store) => store.gpt.toogleswitch);
  const currentLang = useSelector((store) => store.lang.currentLang);


  return (
    <div className="absolute z-10 w-full px-8 py-5 bg-gradient-to-b from-black flex justify-between items-center">

    <img src={logo} className="w-40" alt="logo" />
    
    { user && <div className="flex items-center gap-4">


      { (toggleSwitchValue && supportedLanguages.length) && 
      
        <select value={currentLang} onChange={(e) => {
          dispatch(updateLanguage(e.target.value))
        }} className="p-3 rounded-lg bg-black text-white pr-1">
          {
            supportedLanguages.map((item,index) => {
              return <option value={item.language_code} key={index}>{item.language_name}</option> 
            })
          }
        </select>
      }


      <button className="bg-white text-black rounded-lg p-3" onClick={() => {
        dispatch(updateGptToogle(!toggleSwitchValue));
       }}>GptSearch: {toggleSwitchValue?'ON':'OFF'}</button>

        <img 
          className="w-12 h-12 rounded-full" 
          alt="user Icon" 
          src="https://randomuser.me/api/portraits/men/1.jpg" 
        />

        <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={signOutHandle}>
          Sign Out
        </button>
      </div>
    }

    </div>
  )
}

export default Header