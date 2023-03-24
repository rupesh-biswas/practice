import React, { Component } from 'react'
import { useEffect, useState } from "react";


function Timer(props) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            console.log("Clearing")
            clearInterval(timerID)
        }
    }, [])

    return (
        <h1>{time.getSeconds()}</h1>
    )
}

// class Timer extends Component {
//     constructor(props) {
//         super(props);
//         console.log("In Constructor");
//         this.state = { time: new Date() }
//     }

//     componentDidMount() {
//         console.log('Inside Component did mount');
//         this.timerID = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1000);
//     }

//     render() {
//         console.log('Inside render');
//         return (
//             <h1>{this.state.time.getSeconds()}</h1>
//         )
//     }


// }

export default Timer;