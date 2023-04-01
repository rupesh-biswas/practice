import React, { useState } from 'react'
import Message from "./Components/Message";

import { Link, useNavigate } from "react-router-dom";
import chipsImg from "./Chips.png";
import './Chips.css'

function Chips() {
    const [bags, setBags] = useState([]);
    const navigate = useNavigate();

    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags([...bags, { x, y }]);
    }

    const htmlBags = bags.map((bag, i) => (
        <img
            key={i}
            src={chipsImg}
            className='bag'
            style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
            alt="bag of lay's chips"
        />
    ));

    return (
        <div className='Chips'>
            <Message>
                <h1>bags eaten: {bags.length}</h1>
                <button onClick={handleClick}>nom nom nom</button>
                <h1>
                    <Link onClick={() => navigate(-1)}>Go Back</Link>
                </h1>
            </Message>
            {htmlBags}
        </div>
    );
}

export default Chips