import React from 'react'
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <div className="absolute z-10">
        <img src={logo} className='w-40 px-8 py-5 bg-gradient-to-b from-black' alt="logo"/>
    </div>
  )
}

export default Header