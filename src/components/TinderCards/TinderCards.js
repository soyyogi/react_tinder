import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg'    
        },
        {
            name: 'Jeff Bezos',
            url: 'https://image.cnbcfm.com/api/v1/image/105141369-Jeff_Bezos_Pad.jpg'    
        }
    ])

    const swiped = () => {

    }

    const outOfFrame = () => {

    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map(person => {
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    <div style={{background: `url(${person.url})`}} className="card">
                     <h3>{person.name}</h3>   
                    </div>
                    </TinderCard>
                })}
            </div>
        </div>
    );
}

export default TinderCards;
