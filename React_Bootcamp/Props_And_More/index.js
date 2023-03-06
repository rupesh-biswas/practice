class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    img="https://source.unsplash.com/collection/483251"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
