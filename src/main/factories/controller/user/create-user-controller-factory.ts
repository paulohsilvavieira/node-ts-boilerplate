
import { CreateUserController } from '@/presenters/api/controllers/user'
import { Controller } from '@/presenters/api/protocols'
import { makeCreateUserUsecase } from '../../usecases/user'

export const makeCreateUserController = (): Controller => {
  const controller = new CreateUserController(makeCreateUserUsecase())
  return controller
}
