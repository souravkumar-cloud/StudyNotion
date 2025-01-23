import React from 'react'
import SignUpForm from '../components/SignUpForm'
import signupimg from '../assests/signup.png'
import Template from '../components/Template'
const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title='Join the millions learning to code with StudyNotion for free.'
        desc1='Build skills for today,tomorrow, and beyond.'
        desc2='Education to future-proof career.'
        image={signupimg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default SignUp
