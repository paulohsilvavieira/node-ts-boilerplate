
import { DeleteUserController } from '@/presenters/api/controllers/user'
import { Controller } from '@/presenters/api/protocols'
import { makeDeleteUserUsecase } from '../../usecases/user'

export const makeDeleteUserController = (): Controller => {
  const controller = new DeleteUserController(makeDeleteUserUsecase())
  return controller
}
