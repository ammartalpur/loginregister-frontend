import React from 'react'
import './Home.css'

export default function Home({ setLoginUser }) {

    return (
        <div className='homepage' >
            <h1>Hello</h1>
            <div className='button' onClick={() => { setLoginUser({}) }}>Logout</div>
        </div>
    )
}
