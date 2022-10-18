const express = require('express')
paymentAPIs= require("./routers/paymentAPIs")
const cors = require('cors')
const body_parser = require('body-parser')
const app = express()
app.use(cors())

app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

app.listen(process.env.PORT|| 3000);

app.use(paymentAPIs);

app.use( (req, res) => {
    res.status(404).send({
         error: 1, message: "Error 404 page not Found"
    })
})

