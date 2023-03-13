
function BetterNumberItem(props) {

    function handleRemove(evt) {
        props.remove(props.value);
    }

    return (
        <li>
            {props.value}
            <button onClick={handleRemove}>X</button>
        </li>
    )
}

export default BetterNumberItem;