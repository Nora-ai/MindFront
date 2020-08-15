import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { putPost } from '../../services/posts'
import './EditPost.css'
import { destroyPost } from '../../services/posts'

export default function EditPost (props) {


    return (<>

        {props.posts && props.currentUser && 

        props.posts.filter(userPost => {

            return userPost.user_id === props.currentUser.id

        }).map((post) => (
            <div className="edit-post">
                <div className="edit-image">
                    <img src={post.img_url}></img>
                </div>
                <div className='edit-content'> 
                    <p>{post.subject}</p>
                    <p>{post.content}</p>
                </div>
                <div>
                  <Link to={`/post/${post.id}/edit`}><button>Edit</button></Link>
                </div>
                
                <div>
                    <button onClick={() => props.handleDelete(post.id)}>Delete</button>
                </div>
            </div>
        ))} 

    </>)
}