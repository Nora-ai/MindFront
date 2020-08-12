import React, { useState } from 'react'
import './Login.css'
import { loginUser } from '../../services/auth'

export default function Login (props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await loginUser(formData)
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
                    name="username"s
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button>Submit</button>
        </form>


    </>)
}