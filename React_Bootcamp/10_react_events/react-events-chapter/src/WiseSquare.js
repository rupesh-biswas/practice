import './WiseSquare.css';

function WiseSquare(props) {
    function dispenseWisdom() {
        let messages = [
            /* wise messages go here */
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ];
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    return (
        <div className='WiseSquare' onMouseEnter={dispenseWisdom}>
            😃
        </div>
    );
}

export default WiseSquare;