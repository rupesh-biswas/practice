import { useState } from "react";


function MultipleForm(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChange(evt) {
        const value = evt.target.value;
        const name = evt.target.name;

        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${username}, ${email}, ${password}`);
        setUsername("");
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Form 2/ Multiple Inputs</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={username} placeholder="username" onChange={handleChange} />
                <input type="email" name="email" value={email} placeholder="email" onChange={handleChange} />
                <input type="password" name="password" value={password} placeholder="password" onChange={handleChange} />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default MultipleForm;