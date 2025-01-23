
import './App.css';
import { Route,Routes,Link,NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import { useState } from 'react';
import Template from './components/Template';
import SignUpForm from './components/SignUpForm';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
    </div>
  );
}

export default App;
