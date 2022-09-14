import React from "react";
import { NodeEditor, useRootEngine } from "flume";
import config from "./config";
import engine from "./engine";

export default function App() {
  const [nodes, setNodes] = React.useState({});
  const { model, dataset } = useRootEngine(nodes, engine);
  const result = JSON.stringify({
    model: model || "default",
    dataset: dataset || "default"
  });
  return (
    <div className="App" style={{ width: 800, height: 600 }}>
      <NodeEditor
        nodeTypes={config.nodeTypes}
        portTypes={config.portTypes}
        nodes={nodes}
        onChange={(nodes) => setNodes(nodes)}
        defaultNodes={[{ type: "trainfunc", x: 200, y: 50 }]}
      />
      <h1>Result</h1>
      
      <h2>{result}</h2>
    </div>
  );
}
