import React from 'react'
import Header from './Header';
import loginBackground from "../assets/images/login_background.jpg";
import { useState,useEffect,useRef } from 'react';
import { checkValidateForm } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const fullname = useRef(null);
  const email    = useRef(null);//making the reference variable
  const password = useRef(null);//making the reference variable
  const [isSignInForm,setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null);

  const handleButtonClick = () => {

    let fullnameValue = (!isSignInForm)?fullname.current.value:null;
    const validationResult = checkValidateForm(email.current.value,password.current.value,isSignInForm,fullnameValue);
    seterrorMessage(validationResult);
    if(validationResult) return;
    
    //signup/signin logic
    if(!isSignInForm)
    {
        //sign up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+' - '+errorMessage);
            navigate('/');
        });   
    }
    else
    {
        //signin
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+' - '+errorMessage);
            navigate('/');
        });
    }
  };

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src={loginBackground} />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/12 bg-black p-12 rounded-lg bg-opacity-80">
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col text-white w-full'>
                    <h1 className='text-yellow-50 mb-5 text-2xl font-bold'>{isSignInForm == true?'Sign In':'Sign Up'}</h1>
                    
                    {
                        !isSignInForm  && <input
                            ref={fullname}
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-2 rounded w-full bg-gray-700"
                        />
                    }
                    <input
                        ref={email}//email is reference to this input variable
                        type="text"
                        placeholder="Email Address"
                        className="p-4 my-2 rounded w-full bg-gray-700"
                    />

                    <input
                        ref={password} //password is reference to this input variable
                        type="password"
                        placeholder="Password"
                        className="p-4 my-2 rounded w-full bg-gray-700"
                    />

                    {
                        errorMessage &&  <p className="text-red-600">{errorMessage}</p>
                    }

                    <button
                        type="submit"
                        className="p-4 mt-4 bg-red-700 rounded-lg font-semibold w-full text-white" onClick={handleButtonClick}
                    >{isSignInForm == true?'Sign In':'Sign Up'}</button>
                    
                    {
                        isSignInForm == true && 
                        <p className="mt-2 text-sm py-4 cursor-pointer" onClick={() => {
                            setisSignInForm(false)
                        }}>New to netflix? Signup now</p>
                    }

                    {
                        isSignInForm == false && 
                        <p className="mt-2 text-sm py-4 cursor-pointer" onClick={() => {
                            setisSignInForm(true)
                        }}>Already have an account ? Login Now</p>
                    }
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;