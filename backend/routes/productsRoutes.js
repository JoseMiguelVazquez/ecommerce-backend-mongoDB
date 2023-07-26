const express = require('express')
const router = express.Router()
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productsControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getAllProducts).post(protect, createProduct)
// router.get('/', getAllProducts)
// router.post('/', createProduct)

router.route('/:id').get(getProduct).put(protect, updateProduct).delete(protect, deleteProduct)
// router.get('/:id', getProduct)
// router.put('/:id', updateProduct)
// router.delete('/:id', deleteProduct)


module.exports = router