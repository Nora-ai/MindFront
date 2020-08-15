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

    console.log(post)

    return (<>

    { post && 
        <div className="show-all-comments">
            <p>{post.subject}</p>
            <p>{post.content}</p>
            <p>{post.img_url}</p>

            {comments.map((comment) => (
                <p>{comment.content}</p>
            ))}

        </div>
    }

       <AddComment 
       {...props}
       comments={comments}
       setComments={setComments}
       />
    </>)
 
    
}


  