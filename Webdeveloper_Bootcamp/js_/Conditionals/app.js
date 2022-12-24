// let random = Math.random()
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!!")
// } else {
//     console.log("Your number is greater (or equal) than 0.5!!!")
// }
// console.log(random)




// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("I hate mondays")
// } else if (dayOfWeek === "saturday") {
//     console.log("Party time")
// } else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent, Friyayays")
// } else {
//     console.log("MEH")
// }


// const age = 70;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("please enter a new password");
// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}




