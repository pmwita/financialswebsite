import React from 'react'
import brian from './images/brian.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={brian} alt='brian' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices in multiple jurisdictions over the world. 
                    Working with Intense gives me the ability to advise clients on their financial discipline and spending habits </p>
                    <p>I am Brian Mandela, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
