import express from 'express';
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const router = (app) => {
    app.route('/',).get((req, res) => {
        res.status(200).send('Hello World!');
    });

    app.use(
        express.json(),
        books,
        authors
    )
};

export default router;