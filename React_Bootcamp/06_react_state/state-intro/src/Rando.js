import { useState } from "react"

function Rando(props) {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState("purple");

    const makeTimer = function () {
        setInterval(() => {
            let rand = Math.floor(Math.random() * props.maxNum)
            setNum(rand)
        }, 1000)
    }

    makeTimer()
    return (
        <h1>{num}</h1>
    )
}

export default Rando;