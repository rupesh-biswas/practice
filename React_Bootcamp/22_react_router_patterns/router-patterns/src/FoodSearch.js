import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function FoodSearch() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleClick() {
        //do something before searching
        alert("Saved your food to db!");
        navigate(`/food/${query}`)
    }

    return (
        <div>
            <h1>Search For A Food!</h1>
            <input type='text' placeholder='search for a food'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Link to={`/food/${query}`} >Go</Link>
            <button onClick={handleClick}>Save New Food!</button>
        </div>
    )
}

export default FoodSearch