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

      
           {/* <Link to='/login'><button className="login-button">Login</button></Link> */}
          
            {props.currentUser ? (<>
            <p className="signed-in-user">{props.currentUser.username}</p>
            <button className="logout" onClick={handleLogout}>Logout</button>
            </>) :
            <>
           <Link to='/login'><button className="login-button">Login</button></Link>
           <Link to='/subscribe'><button className="subscribe-button">Subscribe</button></Link>
            </>
            }

            {/* <Link to='/subscribe'><button className="subscribe-button">Subscribe</button></Link> */}
    </>)

}