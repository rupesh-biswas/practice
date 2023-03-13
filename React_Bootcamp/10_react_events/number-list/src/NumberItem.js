
function NumberItem(props) {

    return (
        <li>
            {props.value}
            <button onClick={props.remove}>X</button>
        </li>
    )
}

export default NumberItem;