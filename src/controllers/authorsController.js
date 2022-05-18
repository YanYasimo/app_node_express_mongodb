import authors from '../models/Author.js';

class AuthorController {
    static getAllAuthors = (req, res) => {
        authors.find((err, authors) => {
            if (err) {
                res.status(500).json({
                    message: 'Internal server error'
                });
            } else {
                res.status(200).json(authors);
            }
        });
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, author) => {
            if (err) {
                res.status(400).json({
                    message: 'Author not found'
                });
            } else {
                res.status(200).json(author);
            }
        })
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on create author.` });
            }
            else {
                res.status(201).json({ message: 'Author created successfully.', author });
            }
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on update author.` });
            }
            else {
                res.status(200).json({ message: 'Author updated successfully.' });
            }
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndRemove(id, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on delete author.` });
            }
            else {
                res.status(200).json({ message: 'Author deleted successfully.' });
            }
        })
    }
}

export default AuthorController;