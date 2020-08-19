import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './Main.css'
import { readAllPosts } from '../../services/posts'
import { readAllComments } from '../../services/comments'
import { putPost } from '../../services/posts'
import { destroyPost } from '../../services/posts'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Subscribe from '../Subscribe/Subscribe'
import CreatePost from '../CreatePost/CreatePost'
import EditPost from '../EditPost/EditPost'
import EditOnePost from '../EditOnePost/EditOnePost'
import ShowPosts from '../ShowPosts/ShowPosts'
import ShowComments from '../ShowComments/ShowComments'
import Footer from '../Footer/Footer'

export default function Main(props) {

    const {currentUser, setCurrentUser} = props

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    const getPosts = async () => {
        const postsList = await readAllPosts()
        setPosts(postsList)
    }

    const editPost = async () => {
        const editPost = await putPost()
        setPosts(editPost)
    }

    const getComments = async () => {
        const commentsList = await readAllComments()
        setComments(commentsList)
    }

    useEffect(() => {
        getPosts()
        // getComments()
        // editPost()
    }, [])


    const handleDelete = async (id) => {
        await destroyPost(id)
        setPosts(posts.filter(post => {
            return post.id !== id 
        }))
     }


    return (
        <main>
            <Nav 
                currentUser={currentUser}
            />

        <Route path='/' exact render={() => (<>
         
            <Home />
            <p className="need-space"></p>
            <ShowPosts 
                posts={posts}
                setPosts={setPosts}
                currentUser={currentUser}
                />
            <Footer />
                </>)} >
        </Route>


        <Route path='/login' render={(props) => (
            <Login 
            {...props}
            setCurrentUser={setCurrentUser}
        />
        )}>
        </Route>


        <Route path='/subscribe' render={(props) => (
            <Subscribe 
            {...props}
            setCurrentUser={setCurrentUser}
            />
        )}>
        </Route>

        
        <Route path='/new-post' render={(props) => (
            <CreatePost 
            {...props}
            posts={posts}
            setPosts={setPosts}
            />
        )}>
        </Route>

        <Route path='/my-posts' render={(props) => (
            <EditPost
            {...props}
            posts={posts}
            setPosts={setPosts}
            handleDelete={handleDelete}
            currentUser={currentUser}
            />
        )}>
        </Route>

        <Route path='/post/:id/edit' render={(props) => (
            <EditOnePost 
            {...props}
            posts={posts}
            setPosts={setPosts}
            />
        )}>
        </Route> 

        <Route path='/post/:id/comments' render={(props) => (
            <ShowComments
                {...props}
            />
        )}>
        </Route>

        </main>
    )
}