import { useState } from "react"
import NumberItem from "./NumberItem";

function NumberList(props) {
    const [nums, setNums] = useState([1, 2, 3, 4, 5]);

    function remove(num) {
        setNums(nums.filter(n => n !== num))
    };

    let numsItems = nums.map(n =>
        <NumberItem value={n} remove={() => remove(n)} />
    );

    return (
        <div>
            <h1>First Number List</h1>
            <ul>{numsItems}</ul>
        </div>
    );
}

NumberList.defaultProps = {}

export default NumberList;