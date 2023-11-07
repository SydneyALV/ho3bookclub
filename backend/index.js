import express from "express";
import { PORT, mongoDBURL } from "./config.js"
const app = express();
import mongoose from "mongoose";
import { Book } from "./models/BookModel.js";

// Middleware for parsing request body
app.use(express.json());

// HTTP ROUTE : GET
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to HO3 Bookclub")
})

// HTTP ROUTE : GET all books
app.get('/books', async (request, response) => {
    try {

        const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data: books
        })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : GET book by id
app.get('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findById(id);
        
        return response.status(200).json(book);

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : POST a new book
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Must enter all required fields: Title, Author, Publishing Year"
            })
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }

        const book = await Book.create(newBook);
        return response.status(201).send({ book })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })
