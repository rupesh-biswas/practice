import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Message from "./Components/Message";
import "./Sardines.css";

function Sardines() {
    const navigate = useNavigate();

    return (
        <div
            className='Sardines'
            style={{
                backgroundImage:
                    "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
            }}
        >
            <Message>
                <h1>you don't eat the sardines. the sardines, they eat you!</h1>
                <Link onClick={() => navigate(-1)}>Go Back</Link>
            </Message>
        </div>
    );
}

export default Sardines