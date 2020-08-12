import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './Main.css'
import { readAllPosts } from '../../services/posts'
//import { readAllComments } from '../services/comments'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Subscribe from '../Subscribe/Subscribe'
import CreatePost from '../CreatePost/CreatePost'
import EditPost from '../EditPost/EditPost'
import ShowPosts from '../ShowPosts/ShowPosts'
import ShowComments from '../ShowComments/ShowComments'
import DeletePost from '../DeletePost/DeletePost'

export default function Main(props) {

    const {setCurrentUser} = props

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const postsList = await readAllPosts()
        setPosts(postsList)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <main>
            <Nav />

        <Route path='/' exact render={() => (<>
            <button className="login-button">Login</button>
            <button className="subscribe-button">Subscribe</button>
            <Home />
            <p className="need-space"></p>
            <ShowPosts 
                posts={posts}
                setPosts={setPosts}
                />
                </>)} >
        </Route>


        <Route path='/auth/login' render={(props) => (
            <Login 
            {...props}
            setCurrentUser={setCurrentUser}
        />
        )}>
        </Route>


        <Route path='/auth/verify' render={(props) => (
            <Subscribe 
            {...props}
            setCurrentUser={setCurrentUser}
            />
        )}>
        </Route>

        
        <Route path ='/new-post' render={(props) => (

            <CreatePost 
            {...props}
            posts={posts}
            setPosts={setPosts}
            />
        )}>
        </Route>

        </main>
    )
}