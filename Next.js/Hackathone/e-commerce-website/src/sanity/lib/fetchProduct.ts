import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
 
 const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export async function fetchProductfromsanity({quary,params ={}}:{quary:string,params?:Record<string, any>;}){
    return await client.fetch(quary,params)
}