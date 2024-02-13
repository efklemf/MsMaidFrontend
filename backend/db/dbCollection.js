// const mongoose = require('mongoose');

// const connectDb = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/react-login-tut');
       
       
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error("Not Connected", error);
//     }
// }

// module.exports = connectDb;

const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/react-login-tut', {
            
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDb;
