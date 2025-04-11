import { type SchemaTypeDefinition } from 'sanity'
import { productInfo } from './product'
import { blogInfo } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productInfo,blogInfo],
}
