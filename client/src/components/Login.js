import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/auth';

const Login = (props) => {
  const [ err, setErr ] = useState()
  const [ data, setData ] = useState({
    username:'',
    password:''
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  // make a post request to retrieve a token from the api
    const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth().post('/api/login', data)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          props.history.push('/bubbles')
        })
        .catch(err => {
          setErr(err.response.data.message)
        })

    }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className='login-form'>
      <h1>Welcome to the Bubble App!</h1>
      <hr /> 
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Enter Username'
          value={data.username}
          onChange={handleChange}
          />
          <br />
        <input 
          type='password'
          name='password'
          placeholder='Enter Password'
          value={data.password}
          onChange={handleChange}
          />
          <br />
          <button type='submit'>Login</button>

      </form>
    </div>
  );
};

export default Login;
