import { WhyChoseUsCard } from '../WhyChoseUs-card/WhyChoseUsCard'
import './WhyChoseUs.sass'

export const WhyChoseUs = () => {
    return (
        <div className="WhyChoseUs-container">
            <div className="WhyChoseUs-title">
                <h1>why <span>choose us</span></h1>
            </div>
            <div className='WhyChoseUs-content'>
                <p>Gym workouts offer a versatile and customisable experience, allowing everyone to set specific fitness goals.</p>
            </div>
            <div className='WhyChoseUs-cards'>
                <WhyChoseUsCard span="01" title="Personal Training" content="Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals" />
                <WhyChoseUsCard span="02" title="Equipment and facilities" content="Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals" />
                <WhyChoseUsCard span="03" title="nutrition counseling" content="Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals" />
                <WhyChoseUsCard span="04" title="speciality programs" content="Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals" />
            </div>
        </div>
    )
}