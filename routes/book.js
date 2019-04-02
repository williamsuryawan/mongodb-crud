const express = require('express');
const router = express();
const BookController = require('../controllers/bookController.js');

router.get('/', BookController.findAll);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;