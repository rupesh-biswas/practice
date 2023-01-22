const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbconnector = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
        console.log("Connection Established");
    } catch (err) {
        console.log("Oh No Error");
        console.log(err)
    }
}
dbconnector();

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//The get property is not present in the database
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log("About to Save!!!");
})

personSchema.post('save', async function () {
    console.log("Just Saved!!!");
})

const Person = mongoose.model('Person', personSchema);

// const tammy = new Person({first:'Tammy', last:'Chow'})