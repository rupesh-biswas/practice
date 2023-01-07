// async function hello() {
// }

// const sing = async () => {
//     throw "OH NO, PROBLEM!";
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log("Promised Resolved With:", data)
//     })
//     .catch((err) => {
//         console.log("Promise Rejected")
//         console.log("Error: ", err)
//     })

// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'help') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('akdawdawd', 'help')
//     .then((msg) => {
//         console.log("Logged IN!")
//         console.log(msg)
//     })
//     .catch((err) => {
//         console.log("ERROR!")
//         console.log(err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('voilet', 1000);
    return "ALL DONE!"
}
// rainbow().then((msg) => console.log("End of Rainbow: ", msg))

async function printRainbow() {
    let msg = await rainbow();
    console.log("End of Rainbow!. Msg: ", msg)
}
// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.4) {
                resolve(`Your fake data here from ${url} `);
            }
            reject('Request Error!');
        }, 1000)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1)
        let data2 = await fakeRequest('/page2');
        console.log(data2)
    } catch (e) {
        console.log("Caught an error");
        console.log("Error is: ", e);
    }
}
makeTwoRequests();