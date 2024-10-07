const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const supabase = require('./db/connection');

const app = express();
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Temporary directory for uploads

// Add a new product
app.post('/', upload.single('image'), async (req, res) => {
    const { title, price, oldprice, description, category, tags } = req.body;
    const file = req.file; // Access the uploaded file

    if (!file) {
        return res.status(400).json({ message: 'Please upload an image.' });
    }

    try {
        // Read the uploaded file
        const filePath = file.path;
        const fileName = `${Date.now()}_${file.originalname}`;
        const fileContent = fs.readFileSync(filePath);

        // Upload the image to Supabase bucket
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('product-images') // Replace with your bucket name
            .upload(fileName, fileContent, {
                contentType: file.mimetype, // Use the file's mimetype
            });

        if (uploadError) throw uploadError;

        const imageUrl = `https://your-project-ref.supabase.co/storage/v1/object/public/product-images/${uploadData.path}`;

        // Insert the product data into the database with the image URL
        const { data, error } = await supabase
            .from('products')
            .insert([
                {
                    title,
                    image: imageUrl, // Store the image URL in the database
                    price,
                    oldprice,
                    description,
                    category,
                    tags,
                },
            ]);

        if (error) throw error;

        // Clean up: delete the temporary file after upload
        fs.unlinkSync(filePath);

        res.status(200).json({ message: 'Product added successfully', data });
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
