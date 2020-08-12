import React, { useState } from 'react'
import './Login.css'
import { loginUser } from '../../services/auth'

export default function Login (props) {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await loginUser(loginData)
        props.setCurrentUser(userData)
        props.history.push('/')
    }

    return (<>

        <form class="login-form" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>
                Username
                <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
            </label>
        </form>

    </>)
}