import React from 'react'
import {Link} from 'react-router-dom'
import MenuItem from './MenuItem'
// import $ from 'jquery'

// Imported Components

export default function Menu(props) {

  return (
    <div>
      <div className='bg-slate-400 bg-opacity-95 text-center text-4xl py-5'>
        <h1>Menu</h1>
      </div>

      <nav className='bg-slate-300 py-2 text-center flex justify-evenly' id='menuNav'>
        <Link to='/custombento' className='pl-px-10'>Custom Bento</Link>&nbsp;
        <a href='#Bento'>Bento</a>&nbsp;
        <a href='#Kyaraben'>Kyaraben</a>&nbsp;
        <a href='#Drinks'>Drinks</a>&nbsp;
      </nav>

      {/* Bento Category */}
      <div>
        <div className='mb-8'>
          <h1 className='text-5xl text-center py-3 mb-6 bg-zinc-400' id='Bento'>Bento</h1>
          <div className='flex justify-evenly mb-14'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </div>
          <div className='flex justify-evenly'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
      </div>


      {/* Kyaraben Category */}
      <div>
        <div className='mb-8'>
        <h1 className='text-5xl text-center py-3 my-6 bg-zinc-400' id='Kyaraben'>Kyaraben</h1>
          <div className='flex justify-evenly'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </div>
          <div className='flex justify-evenly'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
      </div>


      {/* Drinks Category */}
      <div>
        <div className='mb-8'>
        <h1 className='text-5xl text-center py-3 my-6 bg-zinc-400' id='Drinks'>Drinks</h1>
          <div className='flex justify-evenly'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </div>
          <div className='flex justify-evenly' id='menuLastDiv'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
      </div>

    </div>
  )
}