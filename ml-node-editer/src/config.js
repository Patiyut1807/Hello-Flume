import { FlumeConfig, Colors, Controls } from 'flume'

const config = new FlumeConfig()
config
  .addPortType({
    type: "dataset",
    name: "datasetOutput",
    label: "DataSet",
    color: Colors.green
  })
  .addPortType({
    type: "model",
    name: "Model",
    label: "Model",
    color: Colors.blue
  })
  .addNodeType({
    type: "DatasetA",
    label: "DatasetA",
    description: "Outputs a Dataset",
    outputs: ports => [
      ports.dataset()
    ]
  })
  .addNodeType({
    type: "DatasetB",
    label: "DatasetB",
    description: "Outputs a Dataset",
    outputs: ports => [
      ports.dataset()
    ]
  })
  .addNodeType({
    type: "ModelA",
    label: "ModelA",
    description: "Outputs a Model",
    outputs: ports => [
      ports.model()
    ]
  })
  .addNodeType({
    type: "ModelB",
    label: "ModelB",
    description: "Outputs a Model",
    outputs: ports => [
      ports.model()
    ]
  })
  .addRootNodeType({
    type: "trainfunc",
    label: "Train",
    initialWidth: 170,
    inputs: ports => [
      ports.model({
        name: "model",
        label: "Model"
      }),
      ports.dataset({
        name: "dataset",
        label: "DataSet"
      })
    ]
  })
  export default config;