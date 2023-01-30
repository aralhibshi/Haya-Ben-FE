import React from 'react'

export default function MenuItem(props) {

    console.log();

  return (
    <div className='flex flex-col'>
        <img src={props.imageURL} alt="Bento IMG" width='200px' id='menuItem' className='rounded-t-3xl menuItem hover:cursor-pointer' onClick={()=> {props.itemClick(props._id)}}/>
        <div className='w-full rounded-b-3xl py-2 text-center bg-slate-500'>
            <div className='flex flex-row justify-center items-center'>
                <img src="/images/icons/minus-circle.png" alt="Minus" id='menuItemIcon'/>
                <input type="text" className='w-8 rounded-3xl text-center'/>
                <img src="/images/icons/plus-circle.png" alt="Plus" id='menuItemIcon'/>
                <button className='bg-slate-400 rounded-3xl px-2 mx-1'>Add</button>
            </div>
        </div>
    </div>
  )
}