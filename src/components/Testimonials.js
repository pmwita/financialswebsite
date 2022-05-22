import React from 'react'
import user5 from './images/user5.jpg'
import user6 from './images/user6.jpg'
import user7 from './images/user7.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user5} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor.Brian is a true professional who does his work really well. Thanks Brian!</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>Director of "Financial Times"</p>
                    </div>
                    <div className='card'>
                        <img src={user6} alt='user1'/>
                        <p>In just 2 very short meetings with Brian he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
                    <div className='card'>
                        <img src={user7} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. Brian has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Linet.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
