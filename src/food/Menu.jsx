import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import MenuItem from './MenuItem'

// Imported Components
import CustomBento from './CustomBento'

export default function Menu() {

  // Navigate
  let navigate = useNavigate();

   // State Declaration
   const [items, setItems] = useState([]);


  // React Hook
  useEffect(() => {
    loadItemList();
  }, [])

  const loadItemList = () => {
    Axios.get("menu")
    .then(res => {
      setItems(res.data.items)
    })
    .catch(err => {
      console.log("Cannot Get Menu")
      console.log(err)
    })
  }

  // Handle Menu Item Click
  const handleMenuItemClick = (id) => {
    console.log(id)
    Axios.get(`item/details?id=${id}`)
    .then(res => {
      console.log(res.data.item.name)
      let path = `/food/detail?id=${res.data.item._id}`
      navigate(path);
    })
    .catch(err => {
      console.log('Cannot Get Item Details')
      console.log(err)
    })
  }

  // Filtering and Mapping by Item Category
  const specialsItems = items.map((item, index) => (
    item.category === "Specials" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))

  const kyarabenItems = items.map((item, index) => (
    item.category === "Kyaraben" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))

  const drinksItems = items.map((item, index) => (
    item.category === "Drinks" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))
  
  return (
    <div>
      <div className='bg-slate-400 bg-opacity-80 text-center text-4xl py-5'>
        <h1>Menu</h1>
      </div>

      <nav className='bg-slate-300 py-2 text-center flex justify-evenly' id='menuNav'>
        <Link to='/custombento/carbs' className='pl-px-10'>Custom Bento</Link>&nbsp;
        <a href='#Specials'>Specials</a>&nbsp;
        <a href='#Kyaraben'>Kyaraben</a>&nbsp;
        <a href='#Drinks'>Drinks</a>&nbsp;
      </nav>


      {/* Specials Category */}
      <div>
          <h1 className='text-5xl text-center py-3 bg-zinc-400' id='Specials'>Specials</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {specialsItems}
          </div>
      </div>

      {/* Kyaraben Category */}
      <div>
          <h1 className='text-5xl text-center py-3 bg-zinc-400' id='Kyaraben'>Kyaraben</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {kyarabenItems}
          </div>
      </div>

      {/* Drinks Category */}
      <div>
          <h1 className='text-5xl text-center py-3 bg-zinc-400' id='Drinks'>Drinks</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {drinksItems}
          </div>
      </div>


    </div>

  )
}