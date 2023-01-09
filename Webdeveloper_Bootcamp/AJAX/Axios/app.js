// axios
//     .get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log("Error!!", e)
//     });

const getStartWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data)
    } catch (e) {
        console.log("Error!!", e)
    }
};
// getStartWarsPerson(1);
// getStartWarsPerson(2);
// getStartWarsPerson(10);
// getStartWarsPerson("asdwa");

const jokes = document.querySelector('#jokes');
const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI');
    newLi.textContent = jokeText
    jokes.append(newLi)

}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch (e) {
        return "No Jokes Available! Sorry:("
    }
}

btn = document.querySelector('button');
btn.addEventListener('click', addNewJoke) 
