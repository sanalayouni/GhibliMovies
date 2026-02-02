import React from 'react'
import './TitleCards.css'
import { cardsData } from '../../assets/cards/Cards_data'

const TitleCards = () => {
    return (
        <div className="title-cards">
            <h1>Popular on Ghibli Mori</h1>
            <div className="card-list">
                {cardsData.map((card) => (
                    <div key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <h2>{card.title}</h2>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default TitleCards