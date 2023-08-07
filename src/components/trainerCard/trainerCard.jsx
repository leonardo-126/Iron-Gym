import { useState } from 'react';
import './trainerCard.sass'
import { AiFillStar } from 'react-icons/ai';

export const TrainersCard = ( { name, backgroundImage } ) => {
    const estiloIcone = {
        color: '#FCA600',
        fontSize: '24px'
    }
    
    const [isHover,setIsHover] = useState(false)

    const MouseEnter = () => {
        setIsHover(true)
    }

    const MouseLeave = () => {
        setIsHover(false)
    }
    return (
        <div className="trainersCard-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="trainersCard-content" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                <h1>{name}</h1>
                <p>Rate Trainer</p>
                <div className="icons-star">
                    <AiFillStar style={estiloIcone}/>
                    <AiFillStar style={estiloIcone}/>
                    <AiFillStar style={estiloIcone}/>
                    <AiFillStar style={estiloIcone}/>
                    <AiFillStar style={estiloIcone}/>
                </div>
                {isHover && (
                    <div className="trainersCard-content-hover">
                        <p>"Unlock the potential of personal transformation. Achieving your goals together."</p>
                        <button>Talk to me</button>
                    </div>
                )}
            </div>
        </div>
    )
}