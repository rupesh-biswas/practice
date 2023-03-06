// function getMood() {
//     const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
//     return moods[Math.floor(Math.random() * moods.length)]
// }

// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My number is: {getMood()}</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));


class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <NumPicker />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
