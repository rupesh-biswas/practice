import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <Fragment>
            <section>
                <h1>About Page</h1>
                <button onClick={goHome}>Go to Homepage</button>
                <button onClick={() => navigate(-1)}>back</button>
            </section>
        </Fragment>
    )
}
