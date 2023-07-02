
import { UpdateUserController } from '@/presenters/api/controllers/user'
import { Controller } from '@/presenters/api/protocols'
import { makeUpdateUserUsecase } from '../../usecases/user'

export const makeUpdateUserController = (): Controller => {
  const controller = new UpdateUserController(makeUpdateUserUsecase())
  return controller
}
