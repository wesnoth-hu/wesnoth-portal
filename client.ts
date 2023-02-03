import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: "x23r8kwf",
    dataset: "development",
    apiVersion: "2021-10-21",
    useCdn: true,
})