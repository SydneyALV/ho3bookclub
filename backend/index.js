import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from "cors"

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Allows all Origins with default of cors(*)
// app.use(cors())

// Allows custom origins
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)

// HTTP ROUTE : GET webpage
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to HO3 Bookclub")
});

// Adds /books to router automatically
app.use('/books', booksRoute);

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
