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

    { post && 
        <div className="show-all-comments">
            <p className="show-one-post-subject">{post.subject}</p>
            <img className="show-one-post-image"src={post.img_url}></img>
            <p className="show-one-post-content">{post.content}</p>
            

            {comments.map((comment) => (
                <p className="show-one-post-comments">{comment.content}</p>
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


  