import React from 'react'

export default function Signup() {
  return (
    <div className='text-center'>
      <div>
        <h1>Sign Up</h1>
      </div>

      <div>
        <input name='firstName' type='text' placeholder='First Name' className='border-2 rounded-3xl px-2 my-1' required/>
      </div>

      <div>
        <input name='lastName' type='text' placeholder='Last Name' className='border-2 rounded-3xl px-2 my-1' required/>
      </div>

      <div>
        <input name='phoneNumber' type='number' placeholder='Phone Number' className='border-2 rounded-3xl px-2 my-1' required/>
      </div>

      <div>
        <input name='emailaddress' type='email' placeholder='Email' className='border-2 rounded-3xl px-2 my-1' required/>
      </div>

      <div>
        <input name='password' type='password' placeholder='Password' className='border-2 rounded-3xl px-2 my-1' required/>
      </div>

      <div>
        <button type='submit' name='Submit' className='border-2 rounded-3xl px-2 my-1 bg-sky-500 text-zinc-100'>Submit</button>
      </div>
    </div>
  )
}