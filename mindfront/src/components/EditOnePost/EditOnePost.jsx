import React, { useState, useEffect } from 'react'
import './EditOnePost.css'
import { putPost } from '../../services/posts'

export default function EditOnePost (props) {


const [formData, setFormData] = useState({
    subject: "",
    content: "",
    img_url: ""
})

useEffect(() => {
    defaultFormData()
}, [props.posts])

const defaultFormData = () => {
    const currentPost = props.posts.find((post) => {
        return post.id === parseInt(props.match.params.id)
    })

    if (currentPost) {
        setFormData({ subject: currentPost.subject, content: currentPost.content })
    }
}

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = props.match.params
    const newPost = await putPost(id, formData)
    props.setPosts(
        props.posts.map((currentPost) => {
            return currentPost.id === parseInt(id) ? newPost : currentPost
        })
    )
    props.history.push('/my-posts')
}

    return (<>

        <form onSubmit={handleSubmit}>
            <p>Edit Post</p>
            <label>
                subject
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </label>
            <label>
                content
                <input
                    type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />
            </label>
            <label>
                image
                <input
                    type="text"
                    name="img_url"
                    value={formData.img_url}
                    onChange={handleChange}
                />
            </label>
            <button>submit</button>
        </form>



    </>)

}