import { useState } from "react"
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function ExpandablePannel({ header, children }) {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!expanded);
    }
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={handleClick}>
                    {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {expanded && <div className="p-2 border-t">{children}</div>}
        </div>
    )
}