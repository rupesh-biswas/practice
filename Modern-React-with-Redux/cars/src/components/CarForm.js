import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../store"

export default function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    function handleNameChange(evt) {
        dispatch(changeName(evt.target.value));
    }

    function handleCostChange(evt) {
        const carCost = parseInt(evt.target.value) || 0;
        dispatch(changeCost(carCost))
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (name === "" || cost === 0) {
            alert('Name or Cost cannot be empty');
            return;
        }
        dispatch(addCar({ name, cost }));
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="buttom is-link">Submit</button>
                </div>
            </form>

        </div>
    )
}