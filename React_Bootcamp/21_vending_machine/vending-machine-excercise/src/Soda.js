import React, { Component } from "react";
import Message from "./Components/Message";
import { Link, useNavigate } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

function Soda() {
    const navigate = useNavigate();

    return (
        <div className='Soda'>
            <img src={sodaImg} alt='coca cola can' />
            <Message>
                <h1>SODAAAAA IS MY FAVORITE</h1>
                <h3>But now I drink sparkling water instead</h3>
                <p>(I still miss Soda)</p>
                <Link onClick={() => navigate(-1)}>Go Back</Link>
            </Message>

            <img src={sodaImg} alt='coca cola can' />
        </div>
    );
}

export default Soda