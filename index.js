const express = require('express');
const cors = require('cors');
const pokeRouter = require('../Pokemon-Fights/Backend_Router/pokemon');

const app = express();
const port = 4090;


app.use(express.json());
app.use(cors());
app.use('/pokemon', pokeRouter);


// app.route('/').get((req, res) => {
//     res.send('Hello World');
//   });


app.listen(port, () => {
    console.log("Server is running on port:" + (port))
});