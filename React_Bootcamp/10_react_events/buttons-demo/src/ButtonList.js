import { useState } from "react";
import "./ButtonList.css";

function ButtonList(props) {
    const [color, setColor] = useState('cyan');

    function changeColor(newColor) {
        // console.log(e)
        // const target = e.target;
        // const currentColor = target.style.backgroundColor;
        // console.log(`newColor is: ${currentColor}`);
        // setColor(currentColor)

        console.log(`newColor is: ${newColor}`);
        setColor(newColor);
    }

    return (
        <div className="ButtonList" style={{ backgroundColor: color }}>
            {props.colors.map(c => {
                const colorObj = { backgroundColor: c };
                return (
                    <button style={colorObj} onClick={() => changeColor(c)}>
                        Click on me!
                    </button>
                );
            })};
        </div>
    )

}

ButtonList.defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
};

export default ButtonList;