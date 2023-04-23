let movieTitle : string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";


// Type Inference
let tvShow = "Mr. Robot";
tvShow = "Somethong";
tvShow = 12345;

let isFunny = false;
isFunny = true;

// Any type
let thing:any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase()


const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
foundMovie()