import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login({ setLoginUser }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    function login() {
        axios.post('http://192.168.1.102:5000/login', user).then((res) => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate('/')
        })
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='Please Enter your Email'></input>
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Please Enter your Password'></input>
            <div className='button' onClick={login}>Login</div>
            <div>Or</div>
            <div className='button' onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}
