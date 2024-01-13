const pool = require("../db");

class Users {
    static createAccount(username, password) {
        return pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    }

    static getAccountName(username) {
        return pool.query('SELECT username, password FROM users WHERE username = $1', [username]);
    }
}

module.exports = Users;
