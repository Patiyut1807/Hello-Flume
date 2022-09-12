import React from "react";
import { NodeEditor } from "flume";
import config from "./config";

export default function App() {
  const [nodes, setNodes] = React.useState({});
  return (
    <div style={{ width: 800, height: 600 }}>
      <NodeEditor
        portTypes={config.portTypes}
        nodeTypes={config.nodeTypes}
        nodes={nodes}
        onChange={setNodes}
        defaultNodes={[
          {
            type: "trainfunc",
            x: 190,
            y: -150,
          },
        ]}
      />
    </div>
  );
}
