import {createClient} from 'next-sanity'
import { datasetKey, projectIdKey } from './constant'
export const dataset = process.env. SANITY_PROJECT_ID
export const projectId = process.env.SANITY_PROJECT_ID

 export const client = createClient({
    projectId: projectIdKey,
    dataset: datasetKey,
     apiVersion:  "2022-11-15",
    useCdn: false
 }) 