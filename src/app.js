import express from 'express';

const app = express();

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

export default app;