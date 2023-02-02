import React from 'react'

export default function MenuItem(props) {
  return (
    <div className='flex flex-col drop-shadow-2xl'>
        <img src={props.imageURL} alt="Bento IMG" width='200px' id='menuItem' className='rounded-t-3xl menuItem hover:cursor-pointer' onClick={()=> {props.itemClick(props._id)}}/>
        <div className='text-center text-xl bg-slate-400 py-1'>
          <h1>{props.name}</h1>
        </div>

        <div className='text-center text-sm bg-red-400 py-1'>
          <h1>BD {props.price.toFixed(3)}</h1>
        </div>

        <div className='rounded-b-3xl py-2 text-center bg-slate-500'>
            <div className='flex flex-row justify-center items-center'>
                <input type="number" className='w-10 rounded-3xl text-center'/>
                <button className='bg-slate-400 rounded-3xl px-2 mx-1'>Add</button>
            </div>
        </div>
    </div>
  )
}