import { useState } from "react";
import Dropdown from "../components/Dropdown";


export default function DropdownPage() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleChange(newOption) {
        setSelectedValue(newOption);
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]

    return (
        <div className="flex">
            <Dropdown options={options} value={selectedValue} onChange={handleChange} />
        </div>
    );
}
