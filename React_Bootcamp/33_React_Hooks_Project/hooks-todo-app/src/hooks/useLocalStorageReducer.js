import { useEffect, useReducer } from "react";

function useLocalStorageStateReducer(key, defaultVal, reducer) {
    // make piece of state based off of value in localstorage (or default)
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || JSON.stringify(defaultVal)
            )
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });

    // use useEffect to update local storage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch];
}

export default useLocalStorageStateReducer;

