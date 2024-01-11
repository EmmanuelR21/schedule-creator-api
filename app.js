const express = require("express");
const cors = require('cors');
const { signUp, doesUserExist } = require("./controllers/usersController");
const { signUpSchema } = require("./schema/usersSchema");
const { signUpValidation } = require("./validation/usersValidations");
const app = express();

app.use(cors())
app.use(express.json())

app.get('/getUser/:username', doesUserExist)
app.post('/signUp', signUpValidation(signUpSchema), signUp);

app.listen(3000);