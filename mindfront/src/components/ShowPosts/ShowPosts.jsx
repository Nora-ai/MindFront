import React from 'react'
import './ShowPosts.css'
//import { readAllPosts } from '../../services/posts'


export default function ShowPosts (props) {

    return (<>

        {props.posts &&
        
        props.posts.map((post) => (
            <div class="homepage-posts">
            <p>{post.subject}</p>
            <p>{post.content}</p>
            <img src={post.img_url}></img>
            </div>
        ))} 

    </>)
}