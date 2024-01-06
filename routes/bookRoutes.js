const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create Book
router.post('/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.send('Book added');
});

// Read Books
router.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Update Book
router.put('/books/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
});

// Delete Book
router.delete('/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book deleted');
});

module.exports = router;
