let userInput = prompt("What would you like to do?");
todos = [];

while (userInput.toLowerCase() !== "quit") {
    if (userInput.toLowerCase() === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${todos[todos.length - 1]} added to the list`)
    } else if (userInput.toLowerCase() === "list") {
        console.log("**********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${[i]}: ${todos[i]}`);
        };
        console.log("**********")
    } else if (userInput.toLowerCase() === "delete") {
        const toDelete = parseInt(prompt("Enter index of the todo to delete"));
        if (!Number.isNaN(toDelete) & toDelete < todos.length) {
            const deleted = todos.splice(toDelete, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknow index");
        }

    }
    userInput = prompt("What would you like to do?");
}
console.log("You Quit the app");