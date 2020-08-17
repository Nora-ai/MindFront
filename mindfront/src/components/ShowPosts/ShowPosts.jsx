import React from 'react'
import { Link } from 'react-router-dom'
import './ShowPosts.css'
//import { readAllPosts } from '../../services/posts'


export default function ShowPosts (props) {

    //const ascOrder = props.posts
    
    //console.log(props.posts)

    //const descOrder = ascOrder.sort((a, b) => b.created_at - a.created_at)

    //console.log(ascOrder)
    //console.log(descOrder)

    //{if @current_user ? }

    return (<>

        {props.posts &&
        
        props.posts.reverse().map((post) => (
            <div className="homepage-posts">
            <p className="show-posts-subject">{post.subject}</p>
            <img className="show-posts-image" src={post.img_url}></img>
            <p className="show-posts-content">{post.content}</p>
            

            {props.currentUser ? 
            <Link to={`/post/${post.id}/comments`}><p>Comments</p></Link>
            :
            <Link to='/login'><p>Comments</p></Link>
            }

            </div>
        ))} 

    </>)
    
}