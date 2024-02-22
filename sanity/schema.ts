import { type SchemaTypeDefinition } from 'sanity'
import fotoPost from './schemaTypes/fotoPost'
import videoPost from './schemaTypes/videoPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [fotoPost, videoPost],
}
