import { useEffect, useState } from "react";

console.log("Outside Function ")
function Timer(props) {
    console.log("Inside Function");
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("Inside Use Effect");
        const timerID = setInterval(() => {
            setTime(new Date())
        }, 1000)
    })

    console.log("After UseEffect");
    return (
        <h1>{time.getSeconds()}</h1>
    )
}

export default Timer;