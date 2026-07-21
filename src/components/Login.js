import React from 'react'
import Header from './Header';
import loginBackground from "../assets/images/login_background.jpg";
import { useState,useEffect } from 'react';


const Login = () => {

  const [isSignInForm,setisSignInForm] = useState(true);

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src={loginBackground} />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/12 bg-black p-12 rounded-lg bg-opacity-80">
                <form className='flex flex-col text-white w-full'>
                    <h1 className='text-yellow-50 mb-5 text-2xl font-bold'>{isSignInForm == true?'Sign In':'Sign Up'}</h1>
                    
                    {
                        !isSignInForm  && <input
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            className="p-4 my-2 rounded w-full bg-gray-700"
                        />
                    }
                    <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        className="p-4 my-2 rounded w-full bg-gray-700"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="p-4 my-2 rounded w-full bg-gray-700"
                    />

                    <button
                        type="submit"
                        className="p-4 mt-4 bg-red-700 rounded-lg font-semibold w-full text-white"
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