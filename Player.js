
import React from 'react';
import Timer from './Timer';
import Card from './Card';
import Chips from './Chips';

const Player = ({ name, cards, chips, isTurn, profilePhoto }) => {
    return (
        <div className={`player ${isTurn ? 'active' : ''}`}>
            <div className="profile-photo" style={{ backgroundImage: `url(${profilePhoto})` }}></div>
            <span>{name}</span>
            <div className="cards">
                {cards.map((card, index) => (
                    <Card key={index} suit={card.suit} value={card.value} />
                ))}
            </div>
            <Chips amount={chips} />
            {isTurn && <Timer duration={30} onTimeUp={() => console.log('Time is up!')} />}
        </div>
    );
};

export default Player;
