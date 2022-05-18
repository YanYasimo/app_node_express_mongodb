import books from '../models/Book.js';

class BookController {
    static getAllBooks = (req, res) => {
        books.find()
            .populate('author')
            .populate('publishingCompany')
            .exec((err, books) => {
            if (err) {
                res.status(500).json({
                    message: 'Internal server error'
                });
            } else {
                res.status(200).json(books);
            }
        });
    }

    static getBookById = (req, res) => {
        const id = req.params.id;

        books.findById(id)
            .populate('author', 'name')
            .exec((err, book) => {
            if (err) {
                res.status(400).json({
                    message: 'Book not found'
                });
            } else {
                res.status(200).json(book);
            }
        })
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

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on update book.` });
            }
            else {
                res.status(200).json({ message: 'Book updated successfully.' });
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndRemove(id, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on delete book.` });
            }
            else {
                res.status(200).json({ message: 'Book deleted successfully.' });
            }
        })
    }
}

export default BookController;