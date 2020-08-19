import React from 'react'
import './Footer.css'

export default function Footer () {

    return(<>
        <div className="footer">
            <div className='end-quote'>
                <p className="footer-mindfront">MindFront</p>
                <p className="footer-quote">"I don't Mind if you don't Mind"</p>
            </div>

            <div className='footer-links'>
                <p className="footer-info">Information</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>In The News</p>
                <p>Subscribe</p>
            </div>
        </div>

    </>)
}