import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [FormData,setformData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        Cpassword:""
    });
    const [showPassword,setshowPassword]=useState(false);
    const [showCPassword,setshowCPassword]=useState(false);
    function changeHandler(event){
        setformData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(FormData.password!=FormData.Cpassword){
            // toast.success(
            //     "confirm your password"
            // )
        }else{
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
    }
  return (
    <div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
        <div>
            <label>
                <p>First Name<sup>*</sup></p>
                <input
                    required
                    name='firstname'
                    type='text'
                    value={FormData.firstname}
                    onChange={changeHandler}
                    placeholder='Enter first name'
                />
            </label>
            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                    required
                    name='lastname'
                    type='text'
                    value={FormData.lastname}
                    onChange={changeHandler}
                    placeholder='Enter last name'
                />
            </label>
        </div>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input
                required
                name='email'
                type='text'
                value={FormData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
            />
        </label>
        <div>
            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                    required
                    name='password'
                    type={(showPassword) ?
                        ("text"):
                        ("password")}
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                />
                <span onClick={()=>setshowPassword((prev)=>(!prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
            </label>
            <label>
                <p>Confirm Password<sup>*</sup></p>
                <input
                    required
                    name='Cpassword'
                    type={(showCPassword) ?
                        ("text"):
                        ("password")}
                    value={FormData.Cpassword}
                    onChange={changeHandler}
                    placeholder='Confirm password'
                />
                <span onClick={()=>setshowCPassword((prev)=>(!prev))}>
                    {showCPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
            </label>
        </div>
        <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignUpForm
