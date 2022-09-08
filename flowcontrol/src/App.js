import React from 'react'
import { NodeEditor } from 'flume'
import config from './config'
import Homepage from "./homepage"
const App = () => {
  const nodeEditor = React.useRef()

  const saveNodes = () => {
    const nodes = nodeEditor.current.getNodes()
    // Do whatever you want with the nodes
  }

  return (
    <div>
      {/* <button onClick={saveNodes}>Save Logic</button> */}
      <div style={{width: "100vw", height: "100vh"}}>
        <NodeEditor
          // ref={nodeEditor}
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
        />
        {<Homepage/>}
      </div>
    </div>
  )
}

export default App;
