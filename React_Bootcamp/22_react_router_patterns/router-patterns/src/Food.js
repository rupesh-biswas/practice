import React from 'react';
import './Food.css'
import { Navigate, redirect, useParams } from 'react-router-dom';

function Food() {
    const { foodName } = useParams();

    const url = `https://source.unsplash.com/1600x900/?${foodName}`

    return (
        <div className='Food'>
            {/\d/.test(foodName) ? (
                <Navigate replace to={'/wdadas'} />
            ) : (
                <div>
                    <h1>I love to eat {foodName}</h1>
                    <img src={url} alt={foodName} />
                </div>
            )}

        </div>
    )
}

export default Food