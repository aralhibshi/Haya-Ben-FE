import React, {useState} from 'react'

export default function Signin(props) {

  const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value;
        console.log(user)
        setNewUser(user);
    }

    const loginHandler = () => {
        props.loginHandler(newUser)
    }

  return (
    <div className='flex justify-center'>
      <div className='text-center flex flex-col justify-evenly items-center h-full rounded-3xl p-2 signInDiv'>
        <div className='text-2xl'>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <input name='emailAddress' type='email' placeholder='Email' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
          </div>
          <div>
            <input name='password' type='password' placeholder='Password' className='border-2 rounded-3xl px-2 my-1' onChange={changeHandler} required/>
          </div>
      
          <div>
            <button type='submit' name='Submit' className='border-2 rounded-3xl px-2 my-1 bg-sky-500 text-zinc-100' onClick={loginHandler}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}