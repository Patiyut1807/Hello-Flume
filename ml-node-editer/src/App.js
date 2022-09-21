import React from "react";
import { NodeEditor, useRootEngine } from "flume";
import config from "./config";
import engine from "./engine";

export default function App() {
  const [nodes, setNodes] = React.useState({});
  const { model, datamodule } = useRootEngine(nodes, engine);
  const result = JSON.stringify({main:"main.py",
    model: model || [],
    datamodule: datamodule || []
  });
  const run = () =>{
    //dsadad
    console.log(result)
  }

  return (
    <div className="App" style={{ width: "100vw", height: 800 }}>
      <NodeEditor
        nodeTypes={config.nodeTypes}
        portTypes={config.portTypes}
        nodes={nodes}
        onChange={(nodes) => setNodes(nodes)}
        defaultNodes={[{ type: "trainfunc", x: 300, y: 0 }]}
      />
      {/* <h1>Result</h1>
      
      <h2>{result}</h2> */}

      <button onClick={run}>Run</button>
    </div>
  );
}
