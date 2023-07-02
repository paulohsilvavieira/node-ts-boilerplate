/* eslint-disable @typescript-eslint/no-var-requires */

import { DatabaseConnection } from '@/infra/postgres/helpers'

require('dotenv').config()

const NODE_PORT = process.env.PORT ? parseInt(process.env.PORT) : 3004

DatabaseConnection.getInstance().connect()
  .then(async () => {
    console.log('Crud Node Database Connected')
    const app = await import('./app')

    app.default.listen(NODE_PORT, () => {
      console.log(`Crud running at http://localhost:${NODE_PORT}`)
    })
  })
  .catch(console.error)
