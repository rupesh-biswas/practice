import Dog from "./Dog";
import { ShelterDog } from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("From Index File");

console.log(add(1, 2));
console.log(multiply(4, 2));
console.log(divide(8, 2));

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

const buffy = new ShelterDog("Buffy", "Pitbull", 0.5, "Desert Springs Shelter");
buffy.bark();
