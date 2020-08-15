import React, { useState, useEffect } from 'react'
import './ShowComments.css'
//import { readAllComments } from '../../services/comments'
 import { readOnePost } from '../../services/posts'
import AddComment from './../AddComment/AddComment'

export default function ShowComments (props) {
  
    const postId = props.match.params.id
   
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        showComments()
    }, [])

    const showComments = async () => {
        const post = await readOnePost(postId)
        setPost(post)
        setComments(post.comments)
    }


    return (<>

        <div className="show-all-comments">
        <p>{postId}</p>
        <p></p>

        </div>

       <AddComment />
    </>)
 
    
}

