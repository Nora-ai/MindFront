import React, { useState } from 'react'
import { postPost } from '../../services/posts'
import './CreatePost.css'

//to do
//drop in image url
//recent posts at the top
//if no image added, add default image

export default function CreatePost (props) {
    const [formData, setFormData] = useState ({
        subject: "",
        content: "",
        img_url: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = await postPost(formData)
        props.setPosts([
            ...props.posts,
            newPost
        ])
        props.history.push('/')
    }

    return (
        <form className="new-post" onSubmit={handleSubmit}>

            <h3>New Post</h3>

            <label>
                <input
                    className="new-post-subject"
                    name="subject"
                    placeholder="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </label>

            <label>
                <textarea
                    className="new-post-content"
                    name="content"
                    type="text"
                    value={formData.content}
                    onChange={handleChange}
                    />
            </label>

            <label>
                <input
                className="new-post-image"
                type="text"
                name="img_url"
                placeholder="image-url"
                src={formData.img_url}
                onChange={handleChange}
                />
            </label>

            <button className='new-post-submit'>Post to Feed</button>

        </form>

    )
}