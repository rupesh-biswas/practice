const mutiply = (x, y) => x * y;

const square = (x) => mutiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

console.log("Before");
isRightTriangle(3, 4, 5);
console.log("After");


console.log("Sending request to server!")
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I Am at the end of the file")





