import './mainBgImg.sass'

export const MainBgImg = () => {
    return (
        <div className='mainBgImg-container'>
            <div className="title-content">
                <h1>READY TO TRAIN <span>YOUR BODY</span></h1>
            </div>
            <div className="legend-content">
                <p>Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.</p>
            </div>
            <div className="button-content">
                <button>LEST JOIN NOW</button>
            </div>
            <div className="info-content">
                <div className="info-content-card">
                    <span>20+</span>
                    <p>Years of Experience</p>
                </div>
                <div className='info-content-border'/>
                <div className="info-content-card">
                    <span>15K+</span>
                    <p>Members Join</p>
                </div>
                <div className='info-content-border'/>
                <div className="info-content-card">
                    <span>14K+</span>
                    <p>Happy members</p>
                </div>
            </div>
        </div>
    )
}