function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum()
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Congrats You Win!</h2>
                    <img src="https://media.tenor.com/rO6Fh2KNm3sAAAAM/baby-yes.gif"></img>
                </div>
        } else {
            msg = <p>Sorry You need seven</p>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        )
    }
}

// ReactDOM.render(<NumPicker />, document.getElementById('root'));
