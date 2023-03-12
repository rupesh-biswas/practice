import Box from "./Box"
import './BoxContainer.css'

function BoxContainer(props) {
    const boxes = Array.from({ length: props.numBoxes }).map(() =>
        <Box allColors={props.allColors} />
    )
    console.log(boxes)
    return (
        <div className="BoxContainer">
            {boxes}
        </div>
    )
}

BoxContainer.defaultProps = {
    numBoxes: 18,
    allColors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'pink',
        'brown',
        'gray',
        'black',
        'white',
        'maroon',
        'navy',
        'teal',
        'olive',
        'lime',
        'aqua',
        'fuchsia',
        'silver',
        'gold'
    ]
}

export default BoxContainer;