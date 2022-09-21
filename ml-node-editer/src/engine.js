import { RootEngine } from "flume";
import config from "./config";

const resolvePorts = (portType, data) => {
  switch (portType) {
    case "datamodule":
      return data.datamodule;
    case "model":
      return data.model;
    case "dataset":
      return data.dataset;
    default:
      return data;
  }
};
const resolveNodes = (node, inputValues, nodeType, context) => {
  switch (node.type) {
    case "datamodule":
      return {
        datamodule: {
          module: [inputValues.datamodule],
          dataset: [inputValues.dataset],
        },
      };
    case "model":
      return { model: [inputValues.model] };
    case "dataset":
      return { dataset: inputValues.dataset };
    default:
      return inputValues;
  }
};
const engine = new RootEngine(config, resolvePorts, resolveNodes);

export default engine;
