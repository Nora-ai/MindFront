import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './Main.css'
//import { readAllPosts } from '../services/posts'
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

    const {setCurrentUser} = props;

    return (
        <main>
            <Nav />

        <Route path='/' exact>
            <button class="login-button">Login</button>
            <button class="subscribe-button">Subscribe</button>
            <Home />
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


        </main>
    )
}