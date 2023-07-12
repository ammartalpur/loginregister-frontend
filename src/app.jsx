import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
    const [user, setLoginUser] = useState({});

    return (
        <div className='App'>
            {console.log(user)}
            <Router>
                <Routes>
                    <Route exact path='/' element={
                        user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
                    } />
                    <Route path='/login' element={
                        <Login setLoginUser={setLoginUser} />
                    } />
                    <Route path='/register' element={
                        <Register />
                    } />
                </Routes>
            </Router>

        </div>
    )
}
