import { useState, useEffect } from 'react';
import './Card.css';

function Card(props) {

    const { image, name } = props;
    const [transform, setTransform] = useState(null);

    useEffect(() => {
        // translate: translate(10px, 20px) rotate(20deg);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        let newTransform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
        setTransform(newTransform);
    }, [])

    return (
        <img
            style={{ transform: transform }}
            className="Card"
            src={image}
            alt={name}
        >
        </img>
    )
};

export default Card;