import React from 'react'
import './Header.css'
import { removeToken } from '../../services/auth'
import { Link, useHistory } from 'react-router-dom'


export default function Header (props) {
    const history = useHistory()

    const handleLogout = () => {
        props.setCurrentUser(null)
        localStorage.removeItem('authToken')
        removeToken()
        history.push('/')
    }


    return (<>
        <h1 className="mindfront-logo">MindFront</h1>

      
            <button className="login-button">Login</button>
          
            {
            props.currentUser ? (<>
            <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </>) :
           (<Link to='/login'>Login</Link>)
            }


            <button className="subscribe-button">Subscribe</button>
    </>)

}