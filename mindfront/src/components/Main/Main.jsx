import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './Main.css'
//import { readAllPosts } from '../services/posts'
//import { readAllComments } from '../services/comments'

import Nav from '../Nav/Nav'
import Login from '../Login/Login'
import Subscribe from '../Subscribe/Subscribe'
import CreatePost from '../CreatePost/CreatePost'
import EditPost from '../EditPost/EditPost'
import ShowPosts from '../ShowPosts/ShowPosts'
import ShowComments from '../ShowComments/ShowComments'
import DeletePost from '../DeletePost/DeletePost'

export default function Main() {

    return (
        <main>
            <Nav />
            <Login />
            <Subscribe />

        <div class="homepage-description">
            <h2>What is MindFront?</h2>
            <p class="mindfront-description">MindFront is a safe space for confrontation, for people to share anonymously yet mindfully about people, places and things in a positive light, even if the topic is sensitive. Mindfront will push us to mindfully confront each other and help us learn how to show up in this world with care and compassion.</p>
            <p class='about-us'>About us</p>
        </div>

        <img class="homepage-image" src="https://res.cloudinary.com/alienora/image/upload/v1597189947/pexels-fotografierende-4617223_t7zr9m.jpg"></img>

        </main>
    )
}