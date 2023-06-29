import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "changeValueToAdd";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + action.payload
            return;
        case DECREMENT_COUNT:
            state.count = state.count - action.payload
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return;
        default:
            return;
    }
}

export default function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })
    function increment() {
        dispatch({
            type: INCREMENT_COUNT,
            payload: 1
        })
    }
    function deecrement() {
        dispatch({
            type: DECREMENT_COUNT,
            payload: 1
        })
    }

    function handleChange(evt) {
        const value = parseInt(evt.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        dispatch({ type: ADD_VALUE_TO_COUNT })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-xl">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={deecrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}