import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import google from '../assests/google.png'
import frame from '../assests/frame.png'
// import signup from '../assests/signup.png'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {formtype==="signup" ? 
        (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }
        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>
            <img src={google} height={30} width={30}/>
            <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
        <img src={frame}
            width={558}
            height={504}
            loading='lazy'
        />
        <img src={image}
           width={558}
           height={490}
           loading='lazy'
        />
      </div>
    </div>
  )
}

export default Template
