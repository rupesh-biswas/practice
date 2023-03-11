import { useState } from "react";
import Ball from "./Ball";
import './Lottery.css'

function Lottery(props) {
    const [nums, setNums] = useState(Array.from({ length: props.numBalls }))

    const generate = function () {
        const newNums = nums.map(
            n =>
                Math.floor(Math.random() * props.maxNum) + 1
        );
        setNums(newNums);
    }

    const handleClick = function () {
        generate();
    }

    return (
        <section className="Lottery">
            <h1>{props.title}</h1>
            <div>
                {nums.map(n => <Ball num={n} />)}
            </div>
            <button onClick={handleClick}>Generate</button>
        </section>
    )
};

Lottery.defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
};

export default Lottery;