import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
import { useEffect, useState } from "react";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

function Game(props) {
    const [dice, setDice] = useState(Array.from({ length: NUM_DICE }));
    const [locked, setLocked] = useState(Array(NUM_DICE).fill(false));
    const [rollsLeft, setRollsLeft] = useState(NUM_ROLLS);
    const [scores, setScores] = useState({
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largestStraight: undefined,
        yahtzee: undefined,
        chance: undefined
    });
    const [rolling, setRolling] = useState(false);

    useEffect(() => {
        animateRoll();
    }, [])

    function animateRoll() {
        setRolling(true);
        setTimeout(() => roll(), 1000);
    }

    function roll(evt) {
        // roll dice whose indexes are in reroll
        setDice(dice.map((d, i) =>
            locked[i] ? d : Math.ceil(Math.random() * 6)
        ));
        setLocked(rollsLeft > 1 ? locked : Array(NUM_DICE).fill(true));
        setRollsLeft(rollsLeft > 0 ? rollsLeft - 1 : 0);
        setRolling(false);
    }

    function toogleLocked(idx) {
        // toggle whether idx is in locked or not
        if (rollsLeft > 0 && !rolling) {
            setLocked([
                ...locked.slice(0, idx),
                !locked[idx],
                ...locked.slice(idx + 1)
            ]);
        };
    }

    function doScore(rulename, ruleFn) {
        // evaluate this ruleFn with the dice and score this rulename
        setScores({
            ...scores,
            [rulename]: ruleFn(dice)
        });
        if (rollsLeft > 0) {
            // setLocked(Array(NUM_DICE).fill(false));
            animateRoll();
        }
    }

    function displayRollInfo() {
        const messages = [
            "0 Rolls Left",
            "1 Rolls Left",
            "2 Rolls Left",
            "Starting Round"
        ]
        return messages[rollsLeft];
    }

    return (
        <div className="Game">
            <header className="Game-header">
                <h1 className="App-title">Yahtzee </h1>

                <section className="Game-dice-section">
                    <Dice
                        dice={dice}
                        locked={locked}
                        handleClick={toogleLocked}
                        disabled={rollsLeft === 0}
                        rolling={rolling}
                    />
                    <div className="Game-button-wrapper">
                        <button
                            className="Game-reroll"
                            disabled={
                                locked.every(x => x) ||
                                rollsLeft === 0 ||
                                rolling
                            }
                            onClick={animateRoll}
                        >
                            {displayRollInfo()}
                        </button>
                    </div>
                </section>
            </header>
            <ScoreTable doScore={doScore} scores={scores} rolling={rolling} />
        </div>
    );
}

export default Game;