// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'


const GRAPHQL_ENDPOINT = process.env.VITE_PUBLIC_GRAPHQL_ENDPOINT ?? ''
const API_KEY = process.env.VITE_PUBLIC_DB_API_KEY ?? ''

const config: CodegenConfig = {
  schema: [
    {
        [GRAPHQL_ENDPOINT]: {
        headers: {
            apiKey: API_KEY,
        },
      },
    },
  ],
  documents: ['src/**/*.{tsx,ts}', '!src/lib/graphql/__generated__/*.ts'],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'src/lib/graphql/__generated__/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      presetConfig: {
        gqlTagName: 'graphql',
        fragmentMasking: false
      },
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
}

export default config

