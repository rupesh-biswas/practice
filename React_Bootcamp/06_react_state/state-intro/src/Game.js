import React, { useState } from 'react'

function Game(props) {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    return (
        <div>
            <h1>Your Score is: {score}</h1>
        </div>
    )
}

export default Game;