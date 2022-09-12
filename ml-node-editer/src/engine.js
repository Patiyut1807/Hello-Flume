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
      case 'datasetA':
        return 'datasetA'
      case 'datasetB':
        return 'datasetB'
      case 'modelA':
        return 'modelA'
      case 'modelB':
        return 'modelB'
      default:
        return inputValues
    }
  }
const engine = new RootEngine(config, resolvePorts, resolveNodes)

export default engine