import { useState } from "react";

function Button(props) {
    return (
        <button
            onClick={function () {
                alert('Clicked!!');
            }}
        >Click Me
        </button>
    )
}

export default Button;