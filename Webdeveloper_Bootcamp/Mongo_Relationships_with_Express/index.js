const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

mongoose.set('strictQuery', false);

const Product = require('./models/product');
const categories = Product.schema.path('category').enumValues;
const Farm = require('./models/farm');
mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2')
    .then(() => {
        console.log("MONGO Connection Open!!!");
    })
    .catch((err) => {
        console.log("Oh No MONGO Connection Error!!!");
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

// FARM Routes
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new.ejs')
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', wrapAsync(async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
}))


app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
})

app.delete('/farms/:id', async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms')
})

// PRODUCT Routes
app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            if (Object.keys(products).length === 0) {
                throw new AppError('Category Not Found', 404);
            }
            res.render('products/index.ejs', { products, category });
        } else {
            const products = await Product.find({});
            res.render('products/index.ejs', { products, category: 'All' });
        }
    } catch (e) {
        next(e);
    }
})

app.get('/products/new', (req, res) => {
    // throw new AppError('Not Allowed', 401)
    res.render('products/new.ejs', { categories })
})

app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e);
    }
})

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('farm', 'name');
        if (!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/show.ejs', { product })
    } catch (e) {
        next(e)
    }
})

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/edit.ejs', { product, categories })
    } catch (e) {
        next(e);
    }
})

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name == 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went wrong' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
});