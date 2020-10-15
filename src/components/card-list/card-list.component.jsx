import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

// receiving data in "props", that is being passed in component
export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
};

// classic way of writing function
// function myFunction(name, age) {

// }

// // arrow functions syntax
// const myFunction = name => {}




