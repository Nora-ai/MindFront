import React from 'react'
import './Nav.css'

export default function Nav () {

    return (<>

    <div className="nav-bar">
        <div className="nav-bar-buttons">
            <button><span>Home</span></button>
            <button><span>My Posts</span></button>
            <button><span>Create Post</span></button>
        </div>
        <div className="nav-bar-icons">
            <img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-2_z5wzon.png"></img>
            <img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-3_qhouh8.png"></img>
            <img src="https://res.cloudinary.com/alienora/image/upload/v1597185032/download-1_aj2aa6.png"></img>
            <img src="https://res.cloudinary.com/alienora/image/upload/v1597185172/instaPNG_x0guhl.png"></img>
        </div>
    </div>
    </>)
}