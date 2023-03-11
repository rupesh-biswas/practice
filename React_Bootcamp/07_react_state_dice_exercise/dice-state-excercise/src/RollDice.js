import { useState } from "react";
import Die from "./Die";
import './RollDice.css'

function RollDice(props) {
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');
    const [isRolling, setIsRolling] = useState(false);

    const randRoll = function () {
        const randFace1 = Math.floor(Math.random() * props.dieFaces.length)
        const randFace2 = Math.floor(Math.random() * props.dieFaces.length)
        setDie1(props.dieFaces[randFace1])
        setDie2(props.dieFaces[randFace2])
        setIsRolling(true)

        // wait once second and set rolling to false
        setTimeout(() => {
            setIsRolling(false)
        }, 1000);
    }

    return (
        <div className="RollDice">
            <div className="RollDice-container">
                <Die face={die1} rolling={isRolling} />
                <Die face={die2} rolling={isRolling} />
            </div>
            <button onClick={randRoll} disabled={isRolling}>
                {isRolling ? 'Rolling' : 'Roll Dice!'}
            </button>
        </div>
    )
}

RollDice.defaultProps = {
    dieFaces: ['one', 'two', 'three', 'four', 'five', 'six']
}

export default RollDice;