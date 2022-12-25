// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }


function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = "Hey There", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}