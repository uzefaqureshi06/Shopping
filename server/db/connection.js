const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://avezblog:avezblog@cluster0.st4qayt.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to Database')
    } catch (error) {
        console.log('Database error', error);
    }
}


module.exports = connectDB;