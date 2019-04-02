const Book = require('../models/book.js');

class BookController {
    static findAll (req,res) {
        console.log("masuk ke controller findAll books")
        Book
            .findAll((err, books) => {
                if (!err) {
                    console.log("Masuk ke result controller", books)
                    res.status(200).json(books)
                } else {
                    console.log(err)
                }
            })
    }

    static createBook (req,res) {
        console.log("Masuk ke controller create")
        Book
            .createBook(req.body, (err,books) => {
                if (!err) {
                    Book.findAll((err, books) => {
                    if (!err) {
                        console.log("Masuk ke result controller", books)
                        res.status(200).json(books)
                    } else {
                        res.status(500).json({
                            message: "internal server error"
                        })
                    }
                    })

                } else {
                    res.status(500).json({
                        message: "internal server error"
                    })
                }
            })
    }

    static updateBook (req,res) {
        console.log("Masuk ke controller update ===>", req.params.id, req.body)
        Book
            .updateBook(req.params.id, req.body, (err, result) => {
                if(!err) {
                    Book.findAll((err, books) => {
                        if (!err) {
                            console.log("Masuk ke result controller", books)
                            res.status(200).json(books)
                        } else {
                            res.status(500).json({
                                message: "internal server error"
                            })
                        }
                    })

                } else {
                    res.status(500).json({
                        message: "internal server error"
                    })
                }
            })
    }

    static deleteBook (req,res) {
        console.log("Masuk ke controller delete ===>", req.params.id)
        Book
            .deleteBook(req.params, (err, result) => {
                if(!err) {
                    Book.findAll((err, books) => {
                        if (!err) {
                            console.log("Masuk ke result controller", books)
                            res.status(200).json(books)
                        } else {
                            res.status(500).json({
                                message: "internal server error"
                            })
                        }
                    })

                } else {
                    res.status(500).json({
                        message: "internal server error"
                    })
                }
            })
    }
};

module.exports = BookController;