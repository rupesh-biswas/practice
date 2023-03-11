import { useState } from "react";


function IconList(props) {

    const [icons, setIcons] = useState(["bone", "cloud"])

    const addIcon = function () {
        let idx = Math.floor(Math.random() * props.options.length);
        let newIcon = props.options[idx];

        // This wont work as react doesnt recognize icons as new
        // icons.push(newIcon) 
        // setIcons(icons)

        // Create a new arrayt to make the above work
        // const newIcons = [...icons, newIcon];
        // setIcons(newIcons);

        // Best Approach - Less lines of codes
        setIcons([...icons, newIcon])

    }

    const htmlIcons = icons.map(i => <i className={`fas fa-${i}`} />);

    return (
        <div>
            <h1>Icons: {htmlIcons}</h1>
            <button onClick={addIcon}>Add New Icon</button>
        </div>
    );

}

IconList.defaultProps = {
    options: [
        "angry",
        "anchor",
        "archive",
        "at",
        "archway",
        "baby",
        "bell",
        "bolt",
        "bone",
        "car",
        "city",
        "cloud",
        "couch"
    ]
};

export default IconList;
