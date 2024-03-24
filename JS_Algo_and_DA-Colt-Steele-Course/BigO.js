function addUpToSlow(n) {
    // O(n)
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}
const t1Slow = performance.now();
console.log(addUpToSlow(1000000000));
const t2Slow = performance.now();
console.log(`Slow function time: ${(t2Slow - t1Slow) / 1000} seconds`);

function addUpToFast(n) {
    //  O(1)
    return n * (n + 1) / 2;
}
const t1Fast = performance.now();
console.log(addUpToFast(1000000000));
const t2Fast = performance.now();
console.log(`Fast function time: ${(t2Fast - t1Fast) / 1000} seconds`);

// Rules for simiplyfying

// 1. Constants dont matter:
// O(2n) simiplyfy to O(n)
//  O(500) -> O(1)
//  O(13n^2) -> O(n^2)

// 2. Smaller terms also doesnt matter:
// O(n+10) -> O(n)
//  O(n^2 + 5n +10) -> O(n^2)

// Big O Shorthands
// 1. Arthimetic operations are constants. (2+2 time is same as 100+100)
// 2. Variable assignment is constant. (let a=2 time is same as let a=500)
// 3. Accessing elements in an array (by index) or object (by key) is constant.
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.


function logAtleast5(n) {
    //  O(n)
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
function logAtmost5(n) {
    // O(1)
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// Differnent Big O best to worst: (see chart online to better understand or Colt slides)
// 1. O(1)
// 2. O(log n)
// 3. O(n)
// 4. O(nlog n)
// 5. O(n^2)

// Space Complexity
// 1. Most primitive (booleans, numbers, undefined, null) are constant space.
// 2. Strings require O(n) space (where n is the string length).
// 3. Refernces types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

function sum(arr) {
    // total is one constant and i is another, no matter the value they remain constant so O(1) space
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function double(arr) {
    //  The new array will have the same space as passed down array so complexity of O(n) space.
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// logarithmic Complexity
// O(log n) or O(n log n)
// divide the number till it reaches 1 is the log value
// for log2(8) it is 8->4->2->1 so answer is 3. i.e log2(8) is 3.

// Big O of object Methods
// 1. Object.keys - O(N)
// 2. Object.values - O(N)
// 3. object.entries - O(N)
// 4. hasOwnProperty - O(1)
// 5. Access - O(1)


// Big O of Arrays
// 1. Insertion - It depends.
// 2. Removal - It depends.
// 3. Searching - O(n).
// 4. Access - O(1)

// Big O of array operations
// 1. push - O(1)
// 2. pop - O(1)
// 3. shift - O(N)
// 4. unshift - O(N)
// 5. concat - O(N)
// 6. slice - O(N)
// 7. sort - O(N)
// 8. forEach/map/filter/reduce/etc. - O(N)

