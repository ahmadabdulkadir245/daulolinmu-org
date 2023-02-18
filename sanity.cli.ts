import {defineCliConfig} from 'sanity/cli'
import { datasetKey, projectIdKey } from './lib/constant'



export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_NODE_ENV
  }
})
