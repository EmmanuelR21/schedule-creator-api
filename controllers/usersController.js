const Users = require("../models/usersModel");

const doesUserExist = async (req, res) => {
    const { username } = req.params;
    const data = await Users.getAccountName(username);
    if (data.rows[0]) {
        return res.send({ userExists: true });
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