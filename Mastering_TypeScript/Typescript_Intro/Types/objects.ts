function greet(person: { first: string; last: string }): void {
  console.log(`Hello ${person.first} ${person.last}`);
}
greet({ first: "guy", last: "bye" });
// greet({ first: "guy", last: 123134 });

let coordinate1: { x: number; y: number } = { x: 1, y: 2 };
// let coordinate2: { x: number; y: number } = { x: 1, y: "2" };

function randomCoordinate(): { lat: number; lang: number } {
  return { lat: Math.random(), lang: Math.random() };
}

// Inline we get error for excess properties
// greet({ first: "Mat", last: "Demon", age: 24 });
// But if we create a variable and pass it down we dnt get error. TS only checks if the required items are there or not
const stranger1 = { first: "Matt", last: "Demon", age: 23, running: false };
greet(stranger1);
const stranger2 = { first: "Matt", age: 23, running: false };
// greet(stranger2);

type Point = {
  x: number;
  y: number;
  z?: number;
};

// let coordinate3: Point = { x: 1, y: "2" };

const myPoint1: Point = { x: 1, y: 2 };
const myPoint2: Point = { x: 1, y: 2, z: 3 };

function newRandomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.003;
}

function printSong(song: Song): void {
  console.log(`${song.title} by ${song.artist}`);
}

const mySong = {
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

type User = {
  readonly id: number;
  username: string;
};

const user1: User = { id: 1232, username: "cool dud" };
console.log(user1.id);
user1.id = 13234;

type Cirlce = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Cirlce & Colorful;

const yellowCircle: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 6,
  breed: "pompoliean",
  age: 20,
};
