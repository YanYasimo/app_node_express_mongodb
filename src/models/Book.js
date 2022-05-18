import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, ref: 'authors', required: true},
        publishingCompany: {type: String, ref: 'publishing_companies', required: true},
        numberOfPages: {type: Number}
    }
);

const books = mongoose.model("books", bookSchema);

export default books;