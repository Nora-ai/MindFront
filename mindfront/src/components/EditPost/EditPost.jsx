import React from 'react'
import { Link } from 'react-router-dom'
import './EditPost.css'

export default function EditPost (props) {


    return (<>

       <p className="my-posts-need-space"></p>
        
        {props.currentUser && props.posts.some(post => post.user_id === props.currentUser.id) ? 

        <>

        {props.posts && props.currentUser && 

        props.posts.filter(userPost => {

            return userPost.user_id === props.currentUser.id

        }).map((post) => (
            <div className="edit-post">
                <div className="edit-image">
                    <img src={post.img_url} alt="post"></img>
                </div>
                <div className='edit-content'> 
                    <p className="edit-post-subject">{post.subject}</p>
                    <p className="edit-post-content">{post.content}</p>
                </div>

                <div className="edit-delete-buttons">
                    <Link to={`/post/${post.id}/edit`}><button className="edit-button">Edit</button></Link>
    
                    <button className="delete-button" onClick={() => props.handleDelete(post.id)}>Delete</button>
                </div>
            </div>
        
        ))}

        </>
        :
        <div className="create-your-first-post-div">
        <Link to='./new-post'><p className="create-your-first-post">Create your first post!</p></Link>
        </div>
        }

    </>)
}