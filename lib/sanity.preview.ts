
"use client"

import {definePreview} from 'next-sanity/preview'
import {dataset, projectId} from './sanity.client'
import { datasetKey, projectIdKey } from './constant'



function onPublicAccessOnly() {
    throw new Error('Unable to load preview as you are not logged in')
}

if(!projectIdKey || !datasetKey) {
    throw new Error(
        'Missing projectId or dataset. Check your sanity.json or .env'
    );
}

export const usePreview = definePreview({
    projectId: projectIdKey,
    dataset: datasetKey,
    onPublicAccessOnly
})