import { add, sample as randomSample, pi } from "./utlis.js";
import User from "./Users.js";

console.log(randomSample<number>([1, 2, 3, 4]));
console.log(add(2, 3));
console.log(pi);
const newGuy = new User("idiot", "failure@gmail.com");
newGuy.logout();
