import express from 'express';
import db from './config/dbConnection.js';
import books from './models/Book.js';
import router from './routes/index.js';

db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());

router(app);

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