const express = require('express')
const cors = require('cors')
const app = express()
const port = 4090
require ('dotenv').config

app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log("Server is running on port:" + (port))
});