import React, { useEffect } from 'react'
import './ShowComments.css'
//import { readAllComments } from '../../services/comments'
import AddComment from './../AddComment/AddComment'

export default function ShowComments (props) {
  
    const postId = props.match.params.id

    useEffect(() => {
        //prevProps
    }, [])


    return (<>


       <AddComment />
    </>)
 
    
}

