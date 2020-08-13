import React from 'react'
import './EditPost.css'

export default function EditPost (props) {

    return (<>

{props.posts &&
        
        props.posts.map((post) => (
            <div className="edit-post">
                <div class="edit-image">
                    <img src={post.img_url}></img>
                </div>
                <div class='edit-content'> 
                    <p>{post.subject}</p>
                    <p>{post.content}</p>
                </div>
            </div>
        ))} 

    </>)
}