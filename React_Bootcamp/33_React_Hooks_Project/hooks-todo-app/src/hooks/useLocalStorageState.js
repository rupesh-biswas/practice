import { useState, useEffect } from "react";
import { stringify } from "uuid";

function useLocalStorageState(key, defaultVal) {
    // make piece of state based off of value in localstorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || stringify(defaultVal)
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

    return [state, setState];
}

export default useLocalStorageState;

