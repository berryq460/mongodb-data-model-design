const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/booksDatabase', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to MongoDb.")
}).catch(e => {
  console.error('Connection error', e.message)
})

//its snippet that will show the raw query
//To access the query thats running
//it will help debug if anything is wrong
//I.e. if something doesn’t work, you can see where the problem is
mongoose.set("debug", true);

const db = mongoose.connection;

module.exports = db;
