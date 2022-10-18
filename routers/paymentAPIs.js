const express = require('express')
const paymentController = require("../controllers/paymentController")

const router = express.Router();

router.post('/initiatePayment',paymentController.initiatePayment)
router.post('/executePayment',paymentController.executePayment)
router.post('/getPaymentStatus',paymentController.getPaymentStatus)
module.exports = router