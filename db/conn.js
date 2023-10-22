const mongoose = require("mongoose");
const DB = process.env.DATABASE;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(DB, connectionParams)
    .then(() => {
        console.log('Connection is successful');
    })
    .catch((error) => { // Fixed the variable name here
        console.log('DB connection failed:', error); // Fixed the variable name here
    });
// Nodejs Connection Successful