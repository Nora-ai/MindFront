import React from 'react'
import { Link } from 'react-router-dom'
import './ShowPosts.css'
//import { readAllPosts } from '../../services/posts'


export default function ShowPosts (props) {

    //const ascOrder = props.posts

    //const descOrder = ascOrder.sort((a, b) => b.created_at - a.created_at)

    //console.log(ascOrder)
    //console.log(descOrder)

    return (<>

        {props.posts &&
        
        props.posts.map((post) => (
            <div className="homepage-posts">
            <p>{post.subject}</p>
            <p>{post.content}</p>
            <img src={post.img_url}></img>
            <Link to={`/post/${post.id}/comments`}><p>Comments</p></Link>
            </div>
        ))} 

    </>)
}