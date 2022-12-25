nums = [1, 2, 5, 6, 1]

Math.max(nums) //NaN
Math.max(...nums) // 6


const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const nums_obj = { ...[2, 3, 4, 5] };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 234, isAdmin: false }