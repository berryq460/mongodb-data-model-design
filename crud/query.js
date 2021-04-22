const db = require('./db');
const Publisher = require('./models/publisher');
const Book = require('./models/book');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//C.R.U.D actions
//Create a book
const createNewBook = async () => {

  const penguinBooks = await Publisher.find({ name: 'Penguin Books' })
  const newBook = await Book.insertMany({ title: '28 Summers', author: 'Hilderbrand', published_date: '2021', publisher_id: penguinBooks[0]._id })

  console.log("Added book 28 Summers", newBook);
};


//Read a book
const readBook = async () => {
  const readOneBook = await Book.deleteMany();
  console.log("Read book", deleteBooks);
}


//Update a book
const updateBook = async () => {
  const readOneBook = await Book.updateOne({title: "28 Summers"}, { $set: {published_date: "2010"}, $currentDate: {lastModified: true } })

  console.log("Read book", readOneBook);
}


//Delete a book
//I created deleteAll because the first set of books didnt have publisher id. However, the debug was successful and new publisher id was inserted.
const deleteAll = async () => {
  const deleteBooks = await Book.deleteMany();
  console.log("Delete all books", deleteBooks);
}


//Find a book
const findAll = async () => {
  const allBooks = await Book.find();
  const allPublishers = await Publisher.find();
  console.log("Show all books", allBooks, allPublishers);
}



const run = async () => {
  
  await findAll();
  // await updateBook();

  // await deleteAll()

  process.exit()  
}
run()


//node query.js

//you need two terminal one for mongo and the other for MongoDB-data-model

