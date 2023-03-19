import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';



function BoxList(props) {
    const [boxes, setBoxes] = useState([]);

    function addBox(newBox) {
        setBoxes([...boxes, newBox]);

    }

    function removeBox(id) {
        setBoxes(boxes.filter(box => box.id !== id))
    }

    function renderBoxes() {
        return boxes.map(box => (
            <Box
                key={box.id}
                height={box.height}
                width={box.width}
                color={box.color}
                removeBox={() => removeBox(box.id)}
            />
        ));
    }

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;