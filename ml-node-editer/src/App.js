import React from "react";
import { NodeEditor, useRootEngine } from "flume";
import config from "./config";
import engine from "./engine";
import axios from "axios";
import data from "./data.json"

export default function App() {
  const [nodes, setNodes] = React.useState({});

  // let loadData = async () => {
  //   await axios
  //   .get("http://localhost:4000/read")
  //   .then((response) => { 
  //     console.log(response.data)
  //     setNodes(response.data)
  //   .catch((error) => {});
  // }

  // React.useEffect(()=>{
  //   loadData()
  // },[])

  const { model, datamodule } = useRootEngine(nodes, engine);
  const result = JSON.stringify({
    main: "main.py",
    model: model || [],
    datamodule: datamodule || [],
  });
  const run = () => {
    console.log(result);
  };
  const save = () => {
    console.log(JSON.stringify(nodes));
  };

  return (
    <div className="App" style={{ width: "100vw", height: 800 }}>
      <NodeEditor
        nodeTypes={config.nodeTypes}
        portTypes={config.portTypes}
        nodes={nodes}
        onChange={(nodes) => {
          setNodes(data);
        }}
        defaultNodes={[{ type: "trainfunc", x: 300, y: 0 }]}
      />
      <button onClick={run}>Run</button>
      <button onClick={save}>Save</button>
    </div>
  );
}
