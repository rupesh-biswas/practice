import { useEffect } from "react";

function Dog(props) {
    useEffect(() => {
        console.log("Dog did Mount");

        return () => console.log("Dog will Unmount")
    }, []);


    return (
        <div className="Dog">
            <h1>Dog!!!</h1>
            <h3>This dog is named: {props.name}</h3>
            <img src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80' />
        </div>
    )
}

export default Dog;