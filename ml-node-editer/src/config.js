import { FlumeConfig, Colors, Controls } from "flume";


const dataOptions = [
  "LitCifar.py","LitImageNet.py","LitMNIST.py"
].map(c => ({
  value: c,
  label: `${c}`
}));

const modelOptions = [
  "LitAlexNet.py","LitAutoEncoder.py","LitResNet50.py","LitResNet101.py","LitResNet152.py","LitViT.py","ResNet.py"
].map(c => ({
  value: c,
  label: `${c}`
}));

const dataSetOptions = [
  "porjai","tcd-thai-food"
].map(c => ({
  value: c,
  label: `${c}`
}));

const config = new FlumeConfig();
config
  .addPortType({
    type: "datamodule",
    name: "datamodule",
    label: "Data Module",
    color: Colors.green,
    controls: [
      Controls.select({
        label: "datamodule",
        name: "datamodule",
        options: dataOptions,
        placeholder: "[Select a Data Module]"
      })
    ]
  })
  .addPortType({
    type: "dataset",
    name: "dataset",
    label: "DataSet",
    color: Colors.red,
    controls: [
      Controls.select({
        label: "dataset",
        name: "dataset",
        options: dataSetOptions,
        placeholder: "[Select a Data Set]"
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
    type: "datamodule",
    label: "datamodule",
    description: "Outputs a Data module",
    inputs: (ports) => [ports.datamodule(),ports.dataset()],
    outputs: (ports) => [ports.datamodule()],
  })
  .addNodeType({
    type: "model",
    label: "model",
    description: "Outputs a Model",
    inputs: (ports) => [ports.model()],
    outputs: (ports) => [ports.model()],
  })
  .addNodeType({
    type: "dataset",
    label: "dataset",
    description: "Outputs a Dataset",
    inputs: (ports) => [ports.dataset()],
    outputs: (ports) => [ports.dataset()],
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
      ports.datamodule({
        name: "datamodule",
        label: "Data Module",
        noControls: true,
      }),
    ],
  });
export default config;
