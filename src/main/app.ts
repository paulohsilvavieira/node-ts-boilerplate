import { setupRoutes } from '@/main/config/routes'
import setupMiddlewares from '@/main/config/middleware-config'

import express from 'express'

const app = express()
setupMiddlewares(app)
setupRoutes(app)

export default app
