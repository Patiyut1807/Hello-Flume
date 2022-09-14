import { FlumeConfig, Colors, Controls } from "flume";


const dataOptions = [
  "dataA","dataB"
].map(c => ({
  value: c,
  label: `${c}`
}));
const modelOptions = [
  "modelA","modelB"
].map(c => ({
  value: c,
  label: `${c}`
}));
const config = new FlumeConfig();
config
  .addPortType({
    type: "dataset",
    name: "dataset",
    label: "DataSet",
    color: Colors.green,
    controls: [
      Controls.select({
        label: "dataset",
        name: "dataset",
        options: dataOptions,
        placeholder: "[Select a Data]"
      })
    ]

  })
  .addPortType({
    type: "model",
    name: "model",
    label: "Model",
    color: Colors.blue,
    controls: [
      Controls.select({
        label: "model",
        name: "model",
        options: modelOptions,
        placeholder: "[Select a Model]"
      })
    ]
  })
  .addNodeType({
    type: "dataset",
    label: "dataset",
    description: "Outputs a Dataset",
    inputs: (ports) => [ports.dataset()],
    outputs: (ports) => [ports.dataset()],
  })
  .addNodeType({
    type: "model",
    label: "model",
    description: "Outputs a Model",
    inputs: (ports) => [ports.model()],
    outputs: (ports) => [ports.model()],
  })
  .addRootNodeType({
    type: "trainfunc",
    label: "Train",
    initialWidth: 170,
    inputs: (ports) => [
      ports.model({
        name: "model",
        label: "Model",
        noControls: true,
      }),
      ports.dataset({
        name: "dataset",
        label: "DataSet",
        noControls: true,
      }),
    ],
  });
export default config;
