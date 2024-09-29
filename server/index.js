const express = require('express');
const cors = require('cors');
const supabase = require('./db/connection');
const app = express();
app.use(cors());
app.use(express.json());

// Add a new product
app.post('/', async (req, res) => {

    const { title, image, price, oldprice, description, category, tags } = req.body;

    try {

        const { data, error } = await supabase
            .from('products')
            .insert([
                { title, image, price, oldprice, description, category, tags }
            ]);

        if (error) throw error;
        res.status(200).json({ message: 'Product added Successfully', data });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
        console.log(error);
    }
});

// Fetch all products
app.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*');

        if (error) throw error;
        res.status(200).json({ message: 'Products fetched successfully', products: data });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
        console.log(error);
    }
});

app.listen(8000, () => {
    console.log(`Server is listening to PORT 8000`);
});
