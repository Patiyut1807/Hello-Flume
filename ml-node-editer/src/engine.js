import { RootEngine } from 'flume'
import config from './config'

const resolvePorts = (portType, data) => {
    switch (portType) {
      case 'dataset':
        return data.dataset
      case 'model':
        return data.model
      default:
        return data
    }
  }
  const resolveNodes = (node, inputValues, nodeType, context) => {
    switch (node.type) {
      case 'dataset':
        return {dataset: inputValues.dataset}
      case 'model':
        return {model: inputValues.model}
      default:
        return inputValues
    }
  }
const engine = new RootEngine(config, resolvePorts, resolveNodes)

export default engine