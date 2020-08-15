import React, { useEffect } from 'react'
import './ShowComments.css'
//import { readAllComments } from '../../services/comments'
import AddComment from './../AddComment/AddComment'

export default function ShowComments (props) {
  
    const postId = props.match.params.id
    const postClicked = props.match
    console.log(postClicked)

    useEffect(() => {
        //prevProps
    }, [])

    // if prevprops = this.props

    return (<>

        <div className="show-all-comments">
        <p>{postId}</p>
        <p></p>

        </div>

       <AddComment />
    </>)
 
    
}

