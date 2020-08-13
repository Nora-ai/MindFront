import React, { useState } from 'react'
import { registerUser } from '../../services/auth'
import './Subscribe.css'

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
    props.history.push('/')
}

    return (<>

        <form className="subscribe-form">

            <h3>Subscribe to Mindfront</h3>
            <label>
                Usernname
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>

            <label>
                Email Address
                <input
                    type="text"
                    name="email"
                    value={formData.email}
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

            <label>
                Confirm Password
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