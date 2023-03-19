import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm(props) {

    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [color, setColor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newBox = {
            height,
            width,
            color,
            id: uuidv4()
        }
        props.addBox(newBox);
        setHeight("");
        setWidth("");
        setColor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input type="number" id='height' name="height" value={height} onChange={(e) => setHeight(e.target.value)} required></input>

            <label htmlFor="width">Width</label>
            <input type="number" id='width' name="width" value={width} onChange={(e) => setWidth(e.target.value)} required></input>

            <label htmlFor="backgroundColor">Background Color</label>
            <input type="text" id='backgroundColor' name="backgroundColor" value={color} onChange={(e) => setColor(e.target.value)} required></input>

            <button>Add a New Box</button>
        </form>
    )
}

export default NewBoxForm;