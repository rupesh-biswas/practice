import './WiseSquare.css';

// "this" issues doesn't happen with function components;
function WiseSquareWithProps(props) {
    function dispenseWisdom() {
        let { messages } = props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    return (
        <div className='WiseSquare' onMouseEnter={dispenseWisdom}>
            😃
        </div>
    );
}

WiseSquareWithProps.defaultProps = {
    messages: [
        /* wise messages go here */
        "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
        "Educating the mind without educating the heart is no education at all.",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
}


export default WiseSquareWithProps;