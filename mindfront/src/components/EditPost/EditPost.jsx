import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { putPost } from '../../services/posts'
import './EditPost.css'

export default function EditPost (props) {


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
                  <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                </div>
                
                <div>
                    <button>Delete</button>
                </div>
            </div>
        ))} 

    </>)
}