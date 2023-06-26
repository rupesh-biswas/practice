import { useState, useEffect } from "react";

export default function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    function incrementCounter() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return {
        count,
        incrementCounter
    }
}