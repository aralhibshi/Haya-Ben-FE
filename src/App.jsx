import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

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

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <img src='/images/BentoBGTransparent.png' alt='BentoBG' className='-z-50 absolute max-h-full' id='BentoBG'/>

      <Router>
        <nav className='flex justify-evenly items-center py-2'>
          <div className='flex flex-row'>
            <a href="/"><img src="/images/icons/logo.png" alt="Logo" width='35px'/></a>
            <Link to='/' className='text-3xl'>Haya Ben</Link>&nbsp;
          </div>
          <Link to='/menu'>Menu</Link>&nbsp;
          <Link to='/signin'>Sign In</Link>&nbsp;
          <Link to='/signup'>Sign Up</Link>&nbsp;
          <Link to='/cart'><img src='/images/icons/shopping-cart.png' width='30px' alt='Shopping Cart'/></Link>
          <Link to='/fooddetail'>Food Detail(Temp)</Link>
        </nav>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup registerHandler={registerHandler}/>}/>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/custombento' element={<CustomBento/>}/>
            <Route path='/fooddetail' element={<FoodDetail/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  )
}