import { useState } from "react"
import BetterNumberItem from "./BetterNumberItem";

function BetterNumberList(props) {
    const [nums, setNums] = useState([1, 2, 3, 4, 5]);

    function remove(num) {
        console.log('Removing');
        console.log(num);

        setNums(nums.filter(n => n !== num))
    };

    let numsItems = nums.map(n =>
        <BetterNumberItem key={n} value={n} remove={remove} />
    );

    return (
        <div>
            <h1>Better Number List</h1>
            <ul>{numsItems}</ul>
        </div>
    );
}

BetterNumberList.defaultProps = {}

export default BetterNumberList;