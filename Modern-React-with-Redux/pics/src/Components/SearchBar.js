import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(term);
    }

    function handleChange(evt) {
        setTerm(evt.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-box">Enter Search Term</label>
                <input id="input-box" type="text" value={term} onChange={handleChange} />
            </form>
        </div>
    )
}