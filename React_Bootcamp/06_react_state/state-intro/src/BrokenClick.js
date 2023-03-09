import { useState } from "react";

function BrokenClick(props) {
    const [clicked, setClicked] = useState(false);

    // const handleClick = function (e) {
    //     clicked ? setClicked(false) : setClicked(true)
    // }

    return (
        <div>
            <h1>{clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
            {/* <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClick}>Reset</button> */}

            <button onClick={() => setClicked(true)}>Click Me!</button>
            <button onClick={() => setClicked(false)}>Reset</button>
        </div>
    )
}

export default BrokenClick;