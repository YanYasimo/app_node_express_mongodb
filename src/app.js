import express from 'express';
import db from './config/dbConnection.js';

db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());

const books = [
    {id: 1, "title": "Harry Potter and the Philosopher's Stone", "author": "J.K. Rowling"},
    {id: 2, "title": "The Hobbit", "author": "J.R.R. Tolkien"},
    {id: 3, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien"},
    {id: 4, "title": "The Catcher in the Rye", "author": "J.D. Salinger"},
];

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
});

app.put('/books/:id', (req, res) => {
    let book = req.body;
    let index = findBook(req.params.id);
    books[index].title = book.title;
    res.status(200).json(books[index]);
});

app.delete('/books/:id', (req, res) => {
    let {id} = req.params.id;
    const index = findBook(id);
    books.splice(index, 1);
    res.send("Book deleted");
});

function findBook(id) {
    return books.findIndex(b => b.id == id);
};

export default app;