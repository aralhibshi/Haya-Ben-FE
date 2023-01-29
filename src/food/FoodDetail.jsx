import React from 'react'
import {Link} from 'react-router-dom'

export default function FoodDetail() {
  return (
    <div>
      <div className='bg-slate-400 bg-opacity-95 text-center text-4xl py-5 mb-10'>
        <h1>Food Details</h1>
      </div>

      <div className='bg-slate-400 rounded-3xl flex justify-center items-center p-5 m-auto' id='FoodDetailDiv'>
        <div className='m-0'>
          <img src="/images/BentoBoxTemp.jpeg" alt="BentoItem" className='rounded-3xl m-0'/>
        </div>

        <div>
          <h1 className='text-4xl text-center py-2'>Bento Item</h1>
          <p className='text-2xl text-center p-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, doloribus.</p>
          <div className='flex justify-end h-full'>
            <Link to='/menu'><img src="/images/icons/arrow-circle-left.png" alt="Arrow Left" className='w-8'/></Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}