function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong();

function greet(firstName, lastName) {
    console.log(`Hey there: ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    let i = 0;
    while (i < numTimes) {
        result += str
        i++
    }
    console.log(result)
}

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// let num = 1;
// function addnum(x) {
//     num = num + x;
// }

function capitalize(textValue) {
    if (typeof textValue !== 'string') {
        return undefined;
    }
    return textValue[0].toUpperCase() + textValue.slice(1)
}

function returnDay(day) {
    if (day < 1 || day > 7) {
        return null;
    }
    const daysofweek = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    };
    return daysofweek[day];
}

const creature = "Common Sea Dragon";
function scubaDive() {
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
scubaDive();

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIIII!'
// }
// console.log(radius);
// console.log(msg);

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panter', 'Batman'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}


