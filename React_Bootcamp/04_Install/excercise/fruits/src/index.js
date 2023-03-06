import fruits from "./foods";
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
const randomfruit = choice(fruits);

// Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${randomfruit}, please`);

// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${randomfruit}`);

// Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?');

// Remove the fruit from the array of fruits
let remaining = remove(fruits, randomfruit);
// fruits = remove(fruits, randomfruit);

// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out. We have ${remaining.length} other fruits left`)
