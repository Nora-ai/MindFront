import React, { useState } from 'react'
import './AddComment.css'
import { postComment } from '../../services/comments'

export default function AddComment (props) {

    const postId = props.match.params.id

   const [formData, setFormData] = useState ({
        content: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newComment = await postComment(postId, formData)
        props.setComments([
            ...props.comments,
            newComment
        ])
        setFormData({content: ""})
    }


    return (<>
        <form onSubmit={handleSubmit}
        className="add-comment">
            <label>
                <input
                    name="content"
                    type="text"
                    value={formData.content}
                    onChange={handleChange}
                />
            </label>
            <button>Add</button>
        </form>
        
        

    </>)
}

