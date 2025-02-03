import { type SchemaTypeDefinition } from 'sanity'
import { homeMainPicture } from './homeHighlight'
import { explore } from "./explore"
import { comment } from "./comment"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeMainPicture , explore, comment ],
}
