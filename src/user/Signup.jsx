import React, {useState} from 'react'

export default function Signup(props) {

  const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value;
        console.log(user)
        setNewUser(user);

    }

    const registerHandler = () => {
        props.registerHandler(newUser)
    }

  return (
    <div className='text-center'>
      <div>
        <h1>Sign Up</h1>
      </div>
      
      <form>
      <div>
        <input name='firstName' type='text' placeholder='First Name' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <input name='lastName' type='text' placeholder='Last Name' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <input name='username' type='text' placeholder='Username' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <input name='contact' type='number' placeholder='Phone Number' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <input name='emailAddress' type='email' placeholder='Email' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <input name='password' type='password' placeholder='Password' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
      </div>

      <div>
        <button type='submit' name='Submit' className='border-2 rounded-3xl px-2 my-1 bg-sky-500 text-zinc-100' onClick={registerHandler}>Submit</button>
      </div>

    </form>
  </div>
  )
}