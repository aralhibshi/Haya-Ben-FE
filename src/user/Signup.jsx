import React, {useState} from 'react';

export default function Signup(props) {

  const [newUser, setNewUser] = useState({})
    
  const changeHandler = (e) => {
      const user = {...newUser}
      user[e.target.name] = e.target.value
      setNewUser(user)
  }

  const registerHandler = (e) => {
      e.preventDefault();
      props.register(newUser)
  }


  return (
    <div className='text-center'>
      
      <div>
        <h1>Sign Up</h1>
      </div>

      <form>
        <div>
          <input name='firstName' type='text' placeholder='First Name' onChange={changeHandler} className='border-2 rounded-3xl px-2 my-1' required/>
        </div>
        <div>
          <input name='lastName' type='text' placeholder='Last Name' onChange={changeHandler} className='border-2 rounded-3xl px-2 my-1' required/>
        </div>
        <div>
          <input name='phoneNumber' type='number' placeholder='Phone Number' onChange={changeHandler} className='border-2 rounded-3xl px-2 my-1' required/>
        </div>
        <div>
          <input name='emailaddress' type='email' placeholder='Email' onChange={changeHandler} className='border-2 rounded-3xl px-2 my-1' required/>
        </div>
        <div>
          <input name='password' type='password' placeholder='Password' onChange={changeHandler} className='border-2 rounded-3xl px-2 my-1' required/>
        </div>
        <div>
          <button type='submit' name='Submit' onClick={registerHandler} className='border-2 rounded-3xl px-2 my-1 bg-sky-500 text-zinc-100'> Submit</button>
        </div>
      </form>

    </div>
  )
}