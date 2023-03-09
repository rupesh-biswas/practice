import { useState } from "react";

function Clicker(props) {
    const [num, setNum] = useState(0);

    const handleClick = function (e) {
        let randInt = Math.floor(Math.random() * props.maxNum) + 1
        setNum(randInt)
    }

    return (
        <div>
            <h1>Number is {num}</h1>
            {num === props.winNum
                ? <h2>Winner!!</h2>
                : <button onClick={handleClick}>Random Number</button>
            }
        </div>
    )
}

export default Clicker;