import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


export default function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function handleOptionClick(newOption) {
        // Close Dropdown
        setIsOpen(false);
        // Change selected option to the new selection
        onChange(newOption);
    }

    useEffect(() => {
        function handler(evt) {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(evt.target)) {
                setIsOpen(false);
            };
        }
        document.addEventListener('click', handler, true)

        return () => document.removeEventListener('click', handler);
    }, [])


    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel
                className="absolute top-full"
            >
                {renderedOptions}
            </Panel>
            }
        </div>
    )
}