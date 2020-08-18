import React, { useState } from 'react'
import { registerUser } from '../../services/auth'
import './Subscribe.css'
import { Redirect } from 'react-router-dom'

export default function Subscribe (props) {

const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    const userData = await registerUser(formData)
    props.setCurrentUser(userData)
    props.history.push('/login')
}

    return (<>

        <form className="subscribe-form" onSubmit={handleSubmit}>

            <h3>Subscribe to Mindfront</h3>
            <label>
                <input
                    className="subscribe-username"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>

            <label>
                <input
                    className="subscribe-email"
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
               />
            </label>

            <label>
                <input
                    className="subscribe-password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>

            {/* <label>
                Confirm Password
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label> */}

            <button className="subscribe-submit">Subscribe</button>

        </form>

    </>)
}