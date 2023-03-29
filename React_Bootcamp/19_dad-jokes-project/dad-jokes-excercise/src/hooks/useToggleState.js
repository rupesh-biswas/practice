import { useState } from "react";

function useToggleState(initialVal) {
    let [state, setState] = useState(initialVal);
    const toggle = () => {
        state = !state;
        setState(state)
    }
    return [state, toggle]
}

export default useToggleState;

