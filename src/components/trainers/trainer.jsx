import { TrainersCard } from '../trainerCard/trainerCard'
import './trainer.sass'

export const Trainers = () => {

    return (
        <div className="trainer-container">
            <div className="trainer-title">
                <h1>Our professional <span>trainers<span/></span></h1>
            </div>
            <div className="trainer-content">
                <p>Whether you're looking to set up a home gym or enhance your current workout routine</p>
            </div>
            <div className="trainer-cards">
                <TrainersCard name='borney exiteid' backgroundImage="/trainer1.png"/>
                <TrainersCard name='elsa windia' backgroundImage="/trainer2.png"/>
                <TrainersCard name='Geourge aryo' backgroundImage="/trainer3.png" />
                <TrainersCard name='Na' backgroundImage="/trainer1.png"/>

            </div>
            <div className="trainer-cards-mudar">
                <div className="trainer-cards-mudar-bg" id='active-trainer'></div>
                <div className="trainer-cards-mudar-bg"></div>
                <div className="trainer-cards-mudar-bg"></div>
            </div>
        </div>
    )
}