import axios from "axios"

export function saveData (nodes)
{  
    const body = JSON.stringify(nodes);
    console.log(`this :${body}`)
    axios.post('http://localhost:4000/write',body)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    console.log("JSON data is saved.");

}