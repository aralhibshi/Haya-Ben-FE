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
        <div className='bg-slate-400 bg-opacity-95 text-center text-4xl py-5 mb-10'>
          <h1>Food Details</h1>
        </div>

        <div className='bg-slate-400 rounded-3xl flex justify-center items-center p-5 m-auto' id='FoodDetailDiv'>
          <div className='m-0'>
            <img src={item.imageURL} alt="BentoItem" className='rounded-3xl m-0'/>
          </div>

          <div>
            <h1 className='text-4xl text-center py-2'>{item.name}</h1>
            <p className='text-2xl text-center p-5'>{item.description}</p>
            <div className='flex justify-end h-full'>
              <Link to='/menu'><img src="/images/icons/arrow-circle-left.png" alt="Arrow Left" className='w-8'/></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}