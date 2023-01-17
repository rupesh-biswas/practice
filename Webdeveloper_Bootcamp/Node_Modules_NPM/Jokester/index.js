const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");

// Both arrow and normal function works

// jokes.getRandomDadJoke((joke) => {
//     console.log(cowsay.say({
//         text: joke
//     }));
// });

jokes.getRandomDadJoke(function (joke) {
    console.log(cowsay.say({
        text: joke
    }));
});
