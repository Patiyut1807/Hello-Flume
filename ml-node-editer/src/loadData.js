
 export const loadData = async () => {
    await axios
    .get("http://localhost:4000/read")
    .then((response) => { 
      console.log(response.data)
      // setNodes(response.data)})
      console.log(data)})
    .catch((error) => {});
  }
