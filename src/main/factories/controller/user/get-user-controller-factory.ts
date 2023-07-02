
import { GetUserController } from '@/presenters/api/controllers/user'
import { Controller } from '@/presenters/api/protocols'
import { makeGetUserUsecase } from '../../usecases/user'

export const makeGetUserController = (): Controller => {
  const controller = new GetUserController(makeGetUserUsecase())
  return controller
}
