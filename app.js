const express = require("express");
const cors = require('cors');
const { signUp, doesUserExist } = require("./controllers/usersController");
const { signUpSchema, loginSchema } = require("./schema/usersSchema");
const { signUpValidation, loginValidation } = require("./validation/usersValidations");
const app = express();

app.use(cors())
app.use(express.json())

app.get('/getUser/:username', doesUserExist)
app.get('/login/:username/:password', loginValidation(loginSchema), doesUserExist)
app.post('/signUp', signUpValidation(signUpSchema), signUp);

app.listen(3000);
