import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'

export default defineConfig({
  basePath: '/studio',

  name: 'default',
  title: 'Magyar Wesnoth Közösségi Portál',

  projectId: 'x23r8kwf',
  dataset: 'development',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
