import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/5c5bb0ab-3b4a-40fb-a1d4-11d0311bc6c0/US-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <form className='rounded-lg bg-opacity-80 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>}
        <input type="text" placeholder='Email Address' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>
        <input type="password" placeholder='Password' className='rounded-lg bg-gray-700 p-4 my-2 w-full'/>
        <button className='rounded-lg p-2 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" :"Already registered? Sign In Now"}</p>
    </form>
    </div>
    
  )
}

export default Login