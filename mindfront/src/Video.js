import React from 'react'

export default function Video () {
    return (<>
        <div className='fullscreen-bg'>
            <video autoPlay="autoplay" loop="loop" muted className="fullscreen-bg-video">
                <source src={`https://res.cloudinary.com/alienora/video/upload/v1593989660/raininglettersBW_p1bgmh.mp4`} type="video/mp4"></source>
            </video>
        </div>
    </>)
}