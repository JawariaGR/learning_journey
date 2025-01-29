import { type SchemaTypeDefinition } from 'sanity'
import { productInfo } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productInfo],
}
