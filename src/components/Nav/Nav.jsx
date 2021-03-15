import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
// import { checkPropTypes } from 'prop-types'

export default function Nav (props) {

    return (<>

    <div className="nav-bar">
        <div className="nav-bar-buttons">
           <Link to='/'><button><span>Home</span></button></Link>

            {props.currentUser ?
            <Link to='/my-posts'><button><span>My Posts</span></button></Link>
            :
            <Link to='/login'><button><span>My Posts</span></button></Link>
            }

            {props.currentUser ?
            <Link to='/new-post'><button><span>Create Post</span></button></Link>
            :
            <Link to='/login'><button><span>Create Post</span></button></Link>
            }
    </div>
        <div className="nav-bar-icons">
          <a href="https://www.facebook.com/tulchina/"><img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-2_z5wzon.png" alt="facebook"></img></a>
          <a href="https://www.linkedin.com/in/noratulchina/"><img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-3_qhouh8.png" alt="linkedin"></img></a>
          <a href="https://twitter.com/NoraTulchina"><img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-1_aj2aa6.png" alt="twitter"></img></a>
          <a href="https://www.instagram.com/noratulchina/"><img src="https://res.cloudinary.com/alienora/image/upload/v1597185172/instaPNG_x0guhl.png" alt="instagram"></img></a>
        </div>
    </div>
    </>)
}