const Users = require("../models/usersModel");

const doesUserExist = async (req, res) => {
    const { username, password } = req.params;

    const data = await Users.getAccountName(username);

    if (data.rows[0]) {
        if (!password) return res.send({ userExists: true });
        if (data.rows[0].password === password) return res.send({ userExists: true })
        return res.send({ error: 'Password is incorrect!' })
    }

    return res.send({ userExists: false });
}

const signUp = async (req, res) => {
    const { username, password } = req.body;

    const data = await Users.createAccount(username, password);

    return res.json("Account created!");
}

module.exports = {
    signUp,
    doesUserExist
} 
