import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: "x23r8kwf",
    dataset: "development",
    apiVersion: "2023-01-12",
    useCdn: true,
})