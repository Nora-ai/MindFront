import React from 'react'
import './Home.css'
import ShowPosts from '../ShowPosts/ShowPosts'


export default function Home () {

    return (<>

        <div className="homepage-description">
            <h2>What is MindFront?</h2>
            <p className="mindfront-description">MindFront is a safe space for confrontation, for people to share anonymously yet mindfully about people, places and things in a positive light, even if the topic is sensitive. Mindfront will push us to mindfully confront each other and help us learn how to show up in this world with care and compassion.</p>
            <p className='about-us'>About Us</p>
        </div>

        <img className="homepage-image" src="https://res.cloudinary.com/alienora/image/upload/v1597189947/pexels-fotografierende-4617223_t7zr9m.jpg" alt="homepage"></img>

        <ShowPosts />

    </>)
}