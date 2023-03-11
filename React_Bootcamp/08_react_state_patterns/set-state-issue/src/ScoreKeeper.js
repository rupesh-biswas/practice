import { useState } from "react"


function ScoreKeeper() {
    const [score, setScore] = useState(0);

    const singleKill = function () {
        setScore(score + 1);
    }

    // const tripleKill = function () {
    //     setScore(score + 1);
    //     setScore(score + 1);
    //     setScore(score + 4);
    // }

    // const tripleKill = function () {
    //     setScore(st => {
    //         return st + 1
    //     });
    //     setScore(st => {
    //         return st + 1
    //     });
    //     setScore(st => {
    //         return st + 1
    //     });
    // }

    const incrementScore = function (curState) {
        return curState + 1;
    }
    const tripleKill = function () {
        setScore(incrementScore);
        setScore(incrementScore);
        setScore(incrementScore);
    }

    return (
        <div>
            <h1>Score is: {score}</h1>
            <button onClick={singleKill}>Single Kill</button>
            <button onClick={tripleKill}>Triple Kill</button>
        </div>
    )
}

export default ScoreKeeper;