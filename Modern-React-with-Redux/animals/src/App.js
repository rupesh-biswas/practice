import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    const randIdx = Math.floor(Math.random() * animals.length);
    return animals[randIdx];
}

export default function App() {
    const [animals, setAnimals] = useState([]);

    function handleClick() {
        setAnimals([...animals, getRandomAnimal()])
    }

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animals</button>
            <div className="animal-list">
                {animals.map((animal, index) => (
                    <AnimalShow type={animal} key={index} />
                ))}
            </div>
        </div>
    )
}