import express from "express";
import { PORT, mongoDBURL } from "./config.js"
const app = express();
import mongoose from "mongoose";


// HTTP ROUTE : GET
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("HO3 Bookclub")
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
