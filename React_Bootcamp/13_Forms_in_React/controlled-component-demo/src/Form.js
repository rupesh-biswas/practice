import { useState } from "react";


function Form(props) {
    const [username, setUsername] = useState("")

    function handleChange(evt) {
        setUsername(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${username}`);
        setUsername("");
    }

    return (
        <div>
            <h1>Form Demo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleChange} />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form;