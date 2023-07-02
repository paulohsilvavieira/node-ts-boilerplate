import { Router } from 'express'
import { routerAdapter } from '../adapters/express-adptater'
import { makeCreateUserController, makeDeleteUserController, makeGetAllUserController, makeGetUserController, makeUpdateUserController } from '../factories/controller/user'

export default (router: Router): void => {
  router.post('/users', routerAdapter(makeCreateUserController()))
  router.get('/users/:id', routerAdapter(makeGetUserController()))
  router.get('/users', routerAdapter(makeGetAllUserController()))
  router.put('/users/:id', routerAdapter(makeUpdateUserController()))
  router.delete('/users/:id', routerAdapter(makeDeleteUserController()))
}
