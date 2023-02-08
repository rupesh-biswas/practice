const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/realtionshipDemo')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const userSchema = new Schema({
    username: String,
    age: Number
});
const User = mongoose.model('User', userSchema);

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweet = async () => {
//     // const user = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' });
//     const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 222 });
//     tweet2.user = user;
//     tweet2.save();
// }
// makeTweet();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user');
    console.log(t);
}
findTweet();




