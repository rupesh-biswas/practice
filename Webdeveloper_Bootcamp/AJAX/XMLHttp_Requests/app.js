const req = new XMLHttpRequest();

req.onload = function () {
    console.log("IT Loaded!!!");
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

req.onerror = function () {
    console.log("ERROR!!!");
    console.log(this)
}


// "https://swapi.dev/api/people/1/"