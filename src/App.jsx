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

// Imported Components (Nested)
import Carbs from './food/ingredients/Carbs';
import Protein from './food/ingredients/Protein'
import Fruits from './food/ingredients/Fruits'
import Vegetables from './food/ingredients/Vegetables'

export default function App() {

  // navigate
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  // For Menu Item List
  const [items, setItems] = useState([]);

  // For Ingredient List
  const [ingredients, setIngredients] = useState([]);

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
    Axios.post("/auth/signup", user)
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
    Axios.post("/auth/signin", cred)
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

  // Menu Item List
  useEffect(() => {
    loadItemList();
  }, [])

  const loadItemList = () => {
    Axios.get("/menu")
    .then(res => {
      setItems(res.data.items)
    })
    .catch(err => {
      console.log("Cannot Get Menu")
      console.log(err)
    })
  }

  // Ingredient List
  useEffect(() => {
    loadIngredientList();
  }, [])

  const loadIngredientList = () => {
    Axios.get('/ingredient/index')
    .then(res => {
      setIngredients(res.data.ingredients)
    })
    .catch(err => {
      console.log("Cannot Get Inrgedient Index")
      console.log(err)
    })
  }

  return (
    <div>
        <nav className='flex justify-evenly items-center bg-orange-200 navBar'>
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

        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu items={items}/>}/>
          <Route path='/signin' element={<Signin loginHandler={loginHandler} handleSubmit={handleSubmit}/>}/>
          <Route path='/signup' element={<Signup registerHandler={registerHandler} handleSubmit={handleSubmit}/>}/>
          <Route path='/cart' element={<Cart/>}></Route>

          <Route path='/custombento' element={<CustomBento ingredients={ingredients}/>}>
            <Route path='carbs' element={<Carbs ingredients={ingredients}/>}></Route>
            <Route path='protein' element={<Protein ingredients={ingredients}/>}></Route>
            <Route path='fruits' element={<Fruits ingredients={ingredients}/>}></Route>
            <Route path='vegetables' element={<Vegetables ingredients={ingredients}/>}></Route>
          </Route>
          <Route path='/food/detail' element={<FoodDetail user={user}/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}