import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/Logo.svg'
// import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly  bg-slate-950 text-white  pt-3 pb-2'>
      <Link to='/'>
        <img src={logo} className='bg-slate-950 pt-1' width={160} height={32} loading='lazy' />
      </Link>
      <nav >
        <ul className='flex gap-6 justify-center items-center pt-2'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li><li>
                <Link to='/'>Contact</Link>
            </li>
        </ul>
      </nav>
        <div className='flex gap-3' >
        {!isLoggedIn &&
            <Link to='/login'>
            <button className='h-10 bg-slate-800 w-20 rounded-md  opacity-75'>
                Log In
            </button>   
        </Link>
        }
        {!isLoggedIn &&
            <Link to='/signup'>
            <button className='h-10 bg-slate-800 w-20 rounded-md opacity-75'>
                Sign Up
            </button> 
            </Link>  
        }
        {isLoggedIn &&
            <Link to='/dashboard'>
            <button className='h-10 bg-slate-800 w-20 rounded-md opacity-75'>
                Dashboard
            </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to='/'>
            <button className='h-10 bg-slate-800 w-20 rounded-md opacity-75' onClick={()=>{
                setIsLoggedIn(false);
                // toast.success('Logged Out Successfully');
                }}>
                Logout  
            </button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar
