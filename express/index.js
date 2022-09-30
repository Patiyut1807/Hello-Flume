const { writeFileJson } = require("./writeJson");
const { readJson } = require("./readJson");
var cors = require('cors');

const express = require('express')
const app = express()
const port = 4000
app.use(cors());

app.post('/write', (req, res) => {
    console.log(body)
    var jsonObj = JSON.parse(req.body);
    writeFileJson(jsonObj)
})
app.get('/read', (req, res) => {
    const data = readJson()
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

