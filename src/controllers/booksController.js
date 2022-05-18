import books from '../models/Book.js';

class BookController {
    static getAllBooks(req, res) {
        books.find((err, books) => {
            if (err) {
                res.status(500).json({
                    message: 'Internal server error'
                });
            } else {
                res.status(200).json(books);
            }
        });
    }
    static createBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on create book.` });
            }
            else {
                res.status(201).json({ message: 'Book created successfully.', book });
            }
        })
    }
}

export default BookController;