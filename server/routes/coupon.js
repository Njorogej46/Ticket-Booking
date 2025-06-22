const express = require('express')
const {
	createCoupon,
	getCoupons,
	updateCoupon,
	deleteCoupon
} = require('../controllers/couponController')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.use(protect)
router.use(authorize('admin'))

router.route('/').get(getCoupons).post(createCoupon)
router.route('/:id').put(updateCoupon).delete(deleteCoupon)

module.exports = router 