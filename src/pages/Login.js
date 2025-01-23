import React from 'react'
import { useState } from 'react'
import frame from '../assests/frame.png'
import google from '../assests/google.png'
import login from '../assests/login.png'
import { Link } from 'react-router-dom'
import Template from '../components/Template'
import loginimg from '../assests/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title='Welcome Back'
      desc1='Build skills for today,tomorrow, and beyond.'
      desc2='Education to future-proof career.'
      image={loginimg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
