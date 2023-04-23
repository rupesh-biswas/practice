function greet(person) {
    console.log("Hello ".concat(person.first, " ").concat(person.last));
}
greet({ first: "guy", last: "bye" });
// greet({ first: "guy", last: 123134 });
var coordinate1 = { x: 1, y: 2 };
// let coordinate2: { x: number; y: number } = { x: 1, y: "2" };
function randomCoordinate() {
    return { lat: Math.random(), lang: Math.random() };
}
// Inline we get error for excess properties
// greet({ first: "Mat", last: "Demon", age: 24 });
// But if we create a variable and pass it down we dnt get error. TS only checks if the required items are there or not
var stranger1 = { first: "Matt", last: "Demon", age: 23, running: false };
greet(stranger1);
var stranger2 = { first: "Matt", age: 23, running: false };
// let coordinate3: Point = { x: 1, y: "2" };
function newRandomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.003;
}
function printSong(song) {
    console.log("".concat(song.title, " by ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1245789452,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
console.log(calculatePayout(mySong));
printSong(mySong);
