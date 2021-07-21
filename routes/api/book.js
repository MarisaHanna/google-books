const router = require('express').Router()
const bookControllers = require('../../controllers/booksControllers')

router.route('/').get(bookControllers.findAll).post(bookControllers.createbook)

router
  .route('/:id')
  .get(bookControllers.findById)
  .put(bookControllers.updateBook)
  .delete(bookControllers.removeBook);

  module.exports = router;