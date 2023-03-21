import "./Die.css";

function Die(props) {
    function handleClick() {
        props.handleClick(props.idx);
    }
    const { numberWords, locked, val, disabled, rolling } = props;

    let classes = `Die fas fa-dice-${numberWords[val - 1]} 
        fa-5x 
        ${locked ? 'Die-locked' : ''} 
        ${rolling ? 'Die-rolling' : ''}`

    return (
        <i
            className={classes}
            onClick={handleClick}
            disabled={disabled}
        >
        </i>
    )
}

Die.defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 1
}

export default Die;