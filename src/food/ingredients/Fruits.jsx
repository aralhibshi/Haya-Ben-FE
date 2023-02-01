import React from 'react'

export default function Fruits() {
  return (
    <div className='flex flex-row justify-evenly'>
            <p>Fruits</p>

            <div className='flex justify-center items-center'>
              {/* <img src="/images/icons/minus-circle.png" alt="Minus" id='menuItemIcon'/> */}
              <input type="number" min='0' className='w-10 rounded-full text-center'/>
              {/* <img src="/images/icons/plus-circle.png" alt="Plus" id='menuItemIcon'/> */}
            </div>
          </div>
  )
}
