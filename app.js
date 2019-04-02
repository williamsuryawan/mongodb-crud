const express = require('express')
const app = express();
const bookRouter = require('./routes/book')
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// Untuk latihan dan test db connect
// client.connect()
//     .then(() => {
//         console.log('berhasil connect')
//         let db = client.db(dbName);
//         db
//             .collection('books')
//             .find({}).toArray()
//             .then(users => {
//                 console.log(users)
//                 client.close();
//             })
//             .catch(err => {
//                 console.log(err)
//             })
        
//     })
//     .catch(err => {
//         console.log(err);
//     })
