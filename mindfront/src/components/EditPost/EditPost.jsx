import React, { useState, useEffect } from 'react'
import { putPost } from '../../services/posts'
import './EditPost.css'

export default function EditPost (props) {
    const [formData, setFormData] = useState({
        subject: "",
        content: ""
    })

    useEffect(() => {
        defaultFormData()
    }, [props.posts])

    const defaultFormData = () => {

    }



    return (<>

        {props.posts &&
        
        props.posts.map((post) => (
            <div className="edit-post">
                <div className="edit-image">
                    <img src={post.img_url}></img>
                </div>
                <div className='edit-content'> 
                    <p>{post.subject}</p>
                    <p>{post.content}</p>
                </div>
                <div>
                    <button>Edit</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        ))} 

    </>)
}