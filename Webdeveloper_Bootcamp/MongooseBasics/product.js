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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0,
            min: 0
        },
        inStore: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log("Hello!! Hi!! Howdy!!!");
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save;
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);
// const p = new Product({ name: 'bike bag', price: '10' })

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

// findProduct();
Product.fireSale().then(res => console.log(res))


// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'M' })
// bike.save()
//     .then(data => {
//         console.log('It Worked');
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Oh No Error');
//         console.log(err.errors)
//     });

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('It Worked');
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Oh No Error');
//         console.log(err.errors)
//     });