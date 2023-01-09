// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!", res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((res) => {
//         console.log("Second Request Resolved!!");
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((e) => {
//         console.log("Error", e)
//     })


const loadStarWarsPeople = async (num) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${num}/`)
        const data = await res.json();
        console.log(data)
    } catch (e) {
        console.log("Error!!!", e);
    }
}
loadStarWarsPeople(1);
loadStarWarsPeople(2);