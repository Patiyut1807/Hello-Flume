// file system module to perform file operations
const fs = require('fs');
 
// json data
const writeFileJson = (nodes) =>{
    
var jsonContent = JSON.stringify(nodes);
console.log(jsonContent);
 
fs.writeFile("data.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});}

module.exports = {
    writeFileJson
}