const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const connectDB = require('./db/connection');
const Product = require('./models/product');
const app = express();
app.use(cors());
app.use(express.json());

// const app = express(); //below are its works mentioned
// 1. post ,put, patch , delete , get  app.post/app.get/app.delete/app.put/app.patch
// 2. jo frontend se data usko correct format meh convert karne ka  (middleware) app.use
// 3. to listen server app.listen

// Point 1 in detail
//1 : app.get(path,call back );
//2 : callback : have two arguments req and res
//3 : req helps to take the data from the user and res helps to send data to the user 
app.post('/', async (req, res) => {
    const { title, image, price, oldPrice, description, category, tags } = req.body;

    try {
        const newProduct = new Product({
            title,
            image,
            price,
            oldPrice,
            description,
            category,
            tags
        });

        await newProduct.save();
        res.status(200).json({ message: 'Product added Successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error })
        console.log(error);
    }
})

app.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: 'Products fetched sucessfully', products });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
        console.log(error);
    }
})

connectDB();
app.listen(8000, () => {
    console.log(`Server is listening to PORT 8000`)
})