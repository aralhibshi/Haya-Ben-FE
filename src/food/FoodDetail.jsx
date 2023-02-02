import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import Axios from 'axios'

export default function FoodDetail(props) {


  const [searchParams, newSearchParams] = useSearchParams('')
  const [ item, newItem ] = useState({})

  const id = searchParams.get('id')
  
  useEffect(()=>{
    loadItemDetails(id)
  }, [])


  const loadItemDetails = (id) => {
    Axios.get(`/item/details?id=${id}`)
    .then(res => {
      console.log(res.data.item)
      newItem(res.data.item)
      console.log(item)
    })
    .catch(err => {
      console.log(err)
    })

  }



  return (
    <div>
      <div>
        <div className='bg-slate-400 bg-opacity-80 text-center text-4xl py-5 mb-10 headerTitles'>
          <h1>Food Details</h1>
        </div>

        <div className='bg-slate-400 rounded-3xl flex justify-between items-center m-auto' id='foodDetailDiv'>
          <div className='foodDetailImg'>
            <img src={item.imageURL} alt="Bento Item" className='rounded-3xl m-0'/>
          </div>

          <div className='flex flex-col justify-evenly foodDetailText'>
            <h1 className='text-4xl text-center'>{item.name}</h1>
            <p className='text-2xl text-center'>{item.description}</p>
            <div className='flex justify-end w-full h-full'>
              <Link to='/menu'><img src="/images/icons/arrow-circle-left.png" alt="Arrow Left"/></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}