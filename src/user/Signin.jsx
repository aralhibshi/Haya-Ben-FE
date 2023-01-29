import React from 'react'

export default function Signin() {
  return (
    <div className='text-center'>
      <div>
        <h1>Sign In</h1>
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