// function sum() {
//     return arguments.reduce((total, ele) => total + ele)
// }

// function sum(...nums) {
//     return nums.reduce((total, ele) => total + ele)
// }

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD medal goes to: ${gold}`)
    console.log(`SILVER medal goes to: ${silver}`)
    console.log(`And thanks to Everyone Else: ${everyoneElse}`)
}