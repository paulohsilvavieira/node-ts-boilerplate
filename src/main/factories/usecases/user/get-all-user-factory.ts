import { GetAllUser } from '@/domain/protocols/usecases/user'
import { GetAllUsersUseCase } from '@/domain/usecases/user'
import { UserRepository } from '@/infra/postgres/repositories'

export const makeGetAllUserUsecase = (): GetAllUser => {
  const userRepository = new UserRepository()
  return new GetAllUsersUseCase(userRepository)
}
