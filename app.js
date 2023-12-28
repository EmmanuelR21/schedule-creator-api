const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send("hello")
})

app.listen(3000);