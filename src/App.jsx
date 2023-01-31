import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'

import './App.css';

// Imported Components
import Home from './home/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Menu from './food/Menu'
import CustomBento from './food/CustomBento'
import Cart from './profile/Cart'
import Footer from './footer/Footer'
import FoodDetail from './food/FoodDetail';

export default function App() {

  // navigate
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = jwt_decode(token);

      if (user) {
        setIsAuth(true);
        setUser(user);
      }
      else if (user) {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
      let path = '/signin';
      navigate(path);
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      // console.log(res.data.token)
      let token = res.data.token
      if (token != null) {
        localStorage.setItem("token", token)
        let user = jwt_decode(token) 
        setIsAuth(true)
        setUser(user)
        let path = '/'; 
        navigate(path);
      }

    })
    .catch(err => {
      console.log(err)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

  // Prevent Default
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
        <nav className='flex justify-evenly items-center py-2 bg-slate-200'>
          <div className='flex flex-row'>
            <a href="/"><img src="/images/icons/logo.png" alt="Logo" width='35px'/></a>
            <Link to='/' className='text-3xl'>Haya Ben</Link>&nbsp;
          </div>

          <Link to='/menu' className='hover:underline'>Menu</Link>&nbsp;

            {isAuth ? (
                <>
                  {user ? "Hi " + user.user.name + "!" : null} &nbsp;
                  <Link to="/logout" onClick={onLogoutHandler} className='hover:underline'>Logout</Link>
                </>
            ): (
                <>
                  <Link to='/signin' className='hover:underline'>Sign In</Link>&nbsp;
                  <Link to='/signup' className='hover:underline'>Sign Up</Link>&nbsp;
                </>
            )}
            <Link to='/cart'><img src='/images/icons/shopping-cart.png' width='30px' alt='Shopping Cart'/></Link>
            <Link to='/food/detail'>Food Detail</Link>

        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/signin' element={<Signin loginHandler={loginHandler} handleSubmit={handleSubmit}/>}/>
          <Route path='/signup' element={<Signup registerHandler={registerHandler} handleSubmit={handleSubmit}/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/custombento' element={<CustomBento/>}/>
          <Route path='/food/detail' element={<FoodDetail user={user}/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}