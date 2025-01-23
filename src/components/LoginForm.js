import React from 'react'
import { useState } from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [formData,setformData]=useState({
        email:"",
        password:"",
    });
    const [showPassword,setshowPassword]=useState(false);
    function changeHandler(event){
        setformData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        // toast.success("Logged In");
        navigate('/dashboard');
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup className='text-[#ff2222]'>*</sup>
            </p>
            <input
                required
                type='text'
                value={formData.email}
                id='email'
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
            />
        </label>
        <label>
            <p>
                Password<sup className='text-[#ff2222]'>*</sup>
            </p>
            <input
                required
                type={(showPassword)?("text"):("password")}
                value={formData.password}
                id='password'
                onChange={changeHandler}
                placeholder='Enter password'
                name='password'
            />
            <span onClick={()=>setshowPassword((prev)=>(!prev))}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/> )}
            </span>
            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button>Sign Up</button>
    </form>
  )
}

export default LoginForm
