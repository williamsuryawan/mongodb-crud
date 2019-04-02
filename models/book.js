const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'bookprojectr';
const client = new MongoClient(url, { useNewUrlParser: true });

class Book {
    static findAll(cb) {
        console.log("masuk model findall")
        client.connect(function(err) {
            if (!err) {
                console.log('connected')
                const db = client.db(dbName)
                db.collection('books')
                 .find({})
                 .toArray(function(err, docs) {
                     if (!err) {
                        console.log("masuk di toArray", docs)
                        cb(null, docs)
                     } else {
                        cb(err, null) 
                     }
                 })
            } else {
                console.log(err)
            }
            // client.close()
        })
    }

    static createBook (data, cb ) {
        client.connect(function(err) {
        if (!err) {
            console.log('connected')
            const db = client.db(dbName)
            db.collection('books')
             .insertOne({
                 isbn: data.isbn,
                 title: data.title,
                 author: data.author,
                 category: data.category,
                 stock: data.stock}, function (err) {
                    if (!err) {
                        cb(null)
                    } else {
                        cb(err)
                    }
                })
        } else {
            cb(err)
        }
        // client.close()
    })
    }

    static updateBook (inputId,inputEdit, cb) {
        console.log('Masuk ke models update', inputId , inputEdit)
        client.connect(function(err) {
            if (!err) {
                console.log('connected')
                const db = client.db(dbName)
                db.collection('books')
                 .updateOne({
                     "_id": inputId}, {$set: {"title": inputEdit.title}}
                     , function (err) {
                        if (!err) {
                            cb(null)
                        } else {
                            cb(err)
                        }
                    })
            } else {
                cb(err)
            }
            // client.close()
        })
    }

    static deleteBook (inputId, cb) {
        console.log('Masuk ke models delete', inputId)
        client.connect(function(err) {
            if (!err) {
                console.log('connected')
                const db = client.db(dbName)
                db.collection('books')
                 .deleteOne(inputId, function (err) {
                        if (!err) {
                            cb(null)
                        } else {
                            cb(err)
                        }
                    })
            } else {
                cb(err)
            }
            // client.close()
        })
    }
}

module.exports = Book;

