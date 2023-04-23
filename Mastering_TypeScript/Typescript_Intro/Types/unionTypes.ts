let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 123.21, long: 321.123 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge("23");
printAge("wadwad");

function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const stuff: number[] | string[] = [1, 2, 3, "a", "b"]; - all numbers to strings
const stuffs: (number | string)[] = [1, 2, 3, "a", "b"];

const coords: (Point | Loc)[] = [];
coords.push({ x: 1, y: 34 });
coords.push({ lat: 123.21, long: 321.123 });
// coords.push({ x: 123.21, long: 321.123 });

let zero: 0 = 0;
// zero = 2;
let hi: "hi" = "hi";
hi = "hi";
// hi = "hsadas";

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "angry";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
// today = "wed";
