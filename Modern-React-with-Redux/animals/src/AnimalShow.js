import "./AnimalShow.css";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import horse from "./svg/horse.svg"
import heart from "./svg/heart.svg"
import { useState } from "react"

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

export default function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    return (
        <div className="animal-show" onClick={() => setClicks(clicks + 1)}>
            <img className="animal" alt={type} src={svgMap[type]} />
            <img
                className="heart"
                alt="heart"
                src={heart}
                style={{ width: 10 + 10 * clicks + "px" }}
            />
        </div>
    )
}