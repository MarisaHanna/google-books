const router = require('express').Router()
const bookControllers = require('../../controllers/bookControllers')

router.route('/')
  .get(bookControllers.findAll)
  .post(bookControllers.createBook)

router
  .route('/:id')
  .get(bookControllers.findById)
  .put(bookControllers.updateBook)
  .delete(bookControllers.removeBook);

  module.exports = router;