const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random100 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 01;
        const camp = new Campground({
            // Your User ID
            author: '63eca80d0f0cba91f4146ed9',
            location: `${cities[random100].city}, ${cities[random100].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate vitae similique quae illo aperiam iusto cum, repellendus necessitatibus. Veniam culpa amet, facilis ipsum porro similique odit vitae sapiente facere?',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random100].longitude,
                    cities[random100].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dotoju9xe/image/upload/v1677315256/YelpCamp/giqnjqlhlrnpylkyd7ur.jpg',
                    filename: 'YelpCamp/giqnjqlhlrnpylkyd7ur',
                },
                {
                    url: 'https://res.cloudinary.com/dotoju9xe/image/upload/v1677315257/YelpCamp/hwkk55vghgbret154ay0.jpg',
                    filename: 'YelpCamp/hwkk55vghgbret154ay0',
                }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});