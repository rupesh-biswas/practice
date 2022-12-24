// let count = 0;
// while (count < 20) {
//     count++;
//     console.log(count)
// } 

// const SECRET = "BabyHippo";
// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code...")
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("OK YOU WIN!");

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let attempts = 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too High! Enter a new guess:");
//     } else {
//         guess = prompt("Too Low! Enter a new guess:");
//     }
// }
// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log(`You got it! It took you ${attempts} guesses`);
// }

// const names = ['rupesh', 'rup', 'rupi', 'ok'];
// for (let x of names) {
//     console.log(x)
// }

// for (let char of "hello world") {
//     console.log(char)
// }

const testScores = {
    rupesh: 80,
    rupi: 67,
    shawn: 91,
    elvira: 97
};
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }
let total = 0;
let scores = Object.values(testScores)
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)