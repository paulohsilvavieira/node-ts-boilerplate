
import { GetAllUserController } from '@/presenters/api/controllers/user'
import { Controller } from '@/presenters/api/protocols'
import { makeGetAllUserUsecase } from '../../usecases/user'

export const makeGetAllUserController = (): Controller => {
  const controller = new GetAllUserController(makeGetAllUserUsecase())
  return controller
}
