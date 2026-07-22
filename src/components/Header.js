import React from 'react'
import logo from "../assets/images/logo.svg"
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const signOutHandle = () => {
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        // An error happened.
      });
  };

  const user = useSelector((store) => store.user);

  return (
    <div className="absolute z-10 w-full px-8 py-5 bg-gradient-to-b from-black flex justify-between items-center">
      
      <img src={logo} className="w-40" alt="logo" />


    { user && <div className="flex items-center gap-4">
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