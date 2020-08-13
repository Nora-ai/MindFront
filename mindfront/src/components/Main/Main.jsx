import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
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
import Footer from '../Footer/Footer'

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
           <Link to='/login'><button className="login-button">Login</button></Link>
            <Link to='/subscribe'><button className="subscribe-button">Subscribe</button></Link>
            <Home />
            <p className="need-space"></p>
            <ShowPosts 
                posts={posts}
                setPosts={setPosts}
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

        <Route path='/edit' render={(props) => (
            <EditPost
            {...props}
            posts={posts}
            setPosts={setPosts}
            />
        )}>
        </Route>

        </main>
    )
}