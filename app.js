const express = require("express");
const cors = require('cors');
const { signUp, doesUserExist } = require("./controllers/usersController");
const app = express();

app.use(cors())
app.use(express.json())

app.get('/getUser/:username', doesUserExist)
app.post('/signUp', signUp);

app.listen(3000);