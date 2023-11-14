import express from "express";
import { User } from "../models/userModel";

const router = express.Router();

// HTTP ROUTE : POST a new book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: "Must enter all required fields: Username and Password"
            })
        }

        const newUser = {
            username: request.body.username,
            password: request.body.password,
            lists: request.body.lists,
        }

        const user = await User.create(newUser);
        return response.status(201).send({ user })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : GET all books
router.get('/', async (request, response) => {
    try {

        const users = await User.find({})
        return response.status(200).json({
            count: users.length,
            data: users
        })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : GET book by id
router.get('/:username', async (request, response) => {
    try {

        const { username } = request.params;

        const user = await User.findById(username);

        return response.status(200).json(user);

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : PUT book details
router.put('/:username', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.passowrd
        ) {
            return response.status(400).send({
                message: "Must enter all required fields: Title, Author, Publishing Year"
            })
        }

        const { username } = request.params;

        const result = await User.findByIdAndUpdate(username, request.body);

        if (!result) {
            return response.status(404).json({ message: 'User not found.' })
        }

        return response.status(200).send({ message: 'User updated successfully!' })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// HTTP ROUTE : DELETE book
router.delete('/:username', async (request, response) => {
    try {

        const { username } = request.params;

        const result = await Book.findByIdAndDelete(username);

        if (!result) {
            return response.status(404).json({ message: 'User not found.' })
        }

        return response.status(200).send({ message: 'User deleted successfully!' })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})


export default router;