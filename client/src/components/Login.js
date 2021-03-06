import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const LoginForm = (props) => {

    const [credentials, setCredentials] = useState({username: '', password: ''});
    const {push} = useHistory();
    const login = event => {
        // console.log('login event');
        event.preventDefault();
        console.log('posting the following credentials: ', {credentials});
        // 
        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(response => {
            console.log('response value: ', response);
            localStorage.setItem('token', response.data.payload);
            

            // to redirect to list of friends
             push('/bubbles');
        })
        .catch(error => {
            console.log(error);
        }
        )
      
      
    }

    const handleChange = event => {
        // console.log('handlechange event');
        setCredentials({...credentials, [event.target.name]: event.target.value}
            );
       
    }

    return (
      <div>
      <h1>Welcome to the Bubble App!</h1>
      
        <form onSubmit={login}>
            <h3>
                Login
            </h3>

            <input
                type = 'text' name = 'username' placeholder = 'username' value = {credentials.username} onChange = {handleChange} 
            />
            <input
                type = 'password' name = 'password' placeholder = 'password' value = {credentials.password} onChange = {handleChange} 
            />

        
            <button> log in </button>
        </form>
        </div>
    )
}

export default LoginForm;