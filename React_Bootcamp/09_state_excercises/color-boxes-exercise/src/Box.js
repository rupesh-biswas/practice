import { useState } from "react";
import './Box.css';
import { choice } from "./helpers";

function Box(props) {
    const [color, setColor] = useState(choice(props.allColors));

    const pickColor = function () {
        let newColor;
        do {
            newColor = choice(props.allColors);
        } while (newColor === color);

        setColor(newColor);
    }

    const handleClick = function () {
        pickColor();
    }
    return (
        <div className="Box" style={{ backgroundColor: color }} onClick={handleClick}>
        </div>
    )
}


export default Box;