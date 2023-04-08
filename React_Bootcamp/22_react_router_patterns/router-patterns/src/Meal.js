import React from 'react';
import './Food.css'
import { useParams } from 'react-router-dom';

function Meal() {
    const { foodName, drinkName } = useParams();

    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`

    return (
        <div className='Food'>
            <h1>This is a meal of {foodName} + {drinkName}</h1>
            <img src={foodUrl} aalt={foodName} />
            <img src={drinkUrl} aalt={drinkName} />
        </div>
    )
}

export default Meal