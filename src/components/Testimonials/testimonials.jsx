import './testimonials.sass'
import {    BsArrowBarLeft, BsArrowBarRight  } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

export const Testimonials = () => {
    const styleStar = {
        color: '#FCA600',
        fontSize: '24px'
    }

    const styleArrow = {
        color: '#fff',
        fontSize: '40px',
        cursor: 'pointer',
        transition: '0.5s'
    }
    const styleArrowHover = {
        color: 'F00',
        fontSize: '40px',
        cursor: 'pointer',
        transition: '0.5s'
    }

    const [isHoverArrow,setIsHoverArrow] = useState(false)

    const arrowMouseEnter = () => {
        setIsHoverArrow(true)
    }
    const arrowMouseLeave = () => {
        setIsHoverArrow(false)
    }

    return (
        <div className='Testimonials-container'>
            <div className="Testimonials-content-title">
                <h1>What <span>clients say</span> with us</h1>
            </div>
            <div className="Testimonials-content-description">
                <p>"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."</p>
            </div>
            <div className="Testimonials-content-arrow">
                <div className="Testimonials-content-arrow-left">
                    <BsArrowBarLeft onMouseEnter={arrowMouseEnter} onMouseLeave={arrowMouseLeave} style={isHoverArrow ? styleArrowHover : styleArrow}/>
                </div>
                <div className="Testimonials-content-clients">
                    <div className="Testimonials-content-clients-star">
                        <AiFillStar style={styleStar}/>
                        <AiFillStar style={styleStar}/>
                        <AiFillStar style={styleStar}/>
                        <AiFillStar style={styleStar}/>
                        <AiFillStar style={styleStar}/>
                    </div>
                    <div className="Testimonials-content-clients-name">
                        <span>Jhony breaker</span>
                    </div>
                    <div className="Testimonials-content-clients-img">
                        <img src="/trainerTestimonials.png" alt="Trainer" />
                    </div>
                </div>
                <div className="Testimonials-content-arrow-rigth">
                    <BsArrowBarRight onMouseEnter={arrowMouseEnter} onMouseLeave={arrowMouseLeave} style={isHoverArrow ? styleArrowHover : styleArrow}/>
                </div>
            </div>
            <div className="Testimonials-content-mudar">  
                <div className="Testimonials-content-mudar-bg" id='active-testimonials'></div>
                <div className="Testimonials-content-mudar-bg"></div>
                <div className="Testimonials-content-mudar-bg"></div>
            </div>
        </div>
    )
}