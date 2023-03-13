

function AnnoyingForm(props) {
    function handleKeyUp(evt) {
        if (evt.keyCode === 56 || evt.keyCode === 106) {
            alert('********* I Love the * Character********');
        } else {
            alert("BOO");
        }
    }

    return (
        <div>
            <h3>Try Typing In Here:</h3>
            <textarea onKeyUp={handleKeyUp} />
        </div>
    )
}

export default AnnoyingForm;