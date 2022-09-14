import React from "react";
import { NodeEditor, useRootEngine } from "flume";
import config from "./config";
import engine from "./engine";
import "./styles.css";

export default function App() {
  const [nodes, setNodes] = React.useState({});
  const {
    title,
    subtitle,
    background,
    flumeWidth,
    flumeHeight
  } = useRootEngine(nodes, engine);

  return (
    <div className="App" style={{ background }}>
      <h1>{title || "Welcome to Flume"}</h1>
      <h2>{subtitle || "Start editing to see some magic happen!"}</h2>
      <div
        style={{
          width: flumeWidth || 800,
          height: flumeHeight || 600,
          borderRadius: 20,
          overflow: "hidden"
        }}
      >
        <NodeEditor
          nodeTypes={config.nodeTypes}
          portTypes={config.portTypes}
          nodes={nodes}
          onChange={nodes => setNodes(nodes)}
          defaultNodes={[{ type: "output", x: 200, y: -130 }]}
        />
      </div>
    </div>
  );
}
