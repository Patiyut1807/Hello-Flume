const fs = require('fs');
// import data from "./data.json"
const readJson =()=> {
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);
return data
}

module.exports = {
    readJson
}