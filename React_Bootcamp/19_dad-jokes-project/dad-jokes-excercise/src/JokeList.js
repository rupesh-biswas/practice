import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "./hooks/useLocalStorageState";
import useToggleState from "./hooks/useToggleState";
import Joke from "./Joke";
import './JokeList.css';


function JokeList(props) {
    const [jokes, setJokes] = useLocalStorageState("jokes", []);
    const [loading, toggleLoading] = useToggleState(false);
    const [seenJokes, setSeenJokes] = useState(new Set());

    useEffect(() => {
        const seen = new Set(jokes.map(j => j.text));
        setSeenJokes(seen);
        jokes.sort((a, b) => b.votes - a.votes);
    }, [jokes]);

    async function getJokes() {
        try {
            toggleLoading();
            let newJokes = [];
            while (newJokes.length < props.numJokesToGet) {
                let res = await axios.get('https://icanhazdadjoke.com/', {
                    headers: { Accept: "application/json" }
                });
                if (!seenJokes.has(res.data.joke)) {
                    newJokes.push({ id: uuidv4(), text: res.data.joke, votes: 0 });
                } else {
                    console.log("Found a Duplicate");
                    console.log(res.data.joke);
                }
            }
            setJokes([...newJokes, ...jokes]);
            toggleLoading();
        } catch (e) {
            alert(e);
            toggleLoading();
        }
    }
    useEffect(() => {
        if (jokes.length === 0) getJokes();
    }, []);

    function handleVote(id, delta) {
        setJokes(jokes.map(j =>
            j.id === id ? { ...j, votes: j.votes + delta } : j
        ))
    }

    async function handleClick() {
        await getJokes();
    }

    if (loading) {
        return (
            <div className="JokeList-spinner">
                <i className="far fa-8x fa-laugh fa-spin"></i>
                <h1 className="JokeList-title">Loading..</h1>
            </div>
        )
    }
    return (
        <div className="JokeList">
            <div className="JokeList-sidebar">
                <h1 className="JokeList-title">
                    <span>Dad</span> Jokes
                </h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="rofl-emoji" />
                <button
                    className="JokeList-getmore"
                    onClick={handleClick}
                >
                    Fetch Jokes
                </button>
            </div>

            <div className="JokeList-jokes">
                {jokes.map(j => (
                    <Joke
                        key={j.id}
                        votes={j.votes}
                        text={j.text}
                        upvote={() => handleVote(j.id, 1)}
                        downvote={() => handleVote(j.id, -1)}
                    />
                ))}
            </div>
        </div>
    )
}

JokeList.defaultProps = {
    numJokesToGet: 10
}

export default JokeList;