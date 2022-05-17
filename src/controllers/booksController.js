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
}

export default BookController;