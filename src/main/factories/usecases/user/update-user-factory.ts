import { UpdateUser } from '@/domain/protocols/usecases/user'
import { UpdateUserUseCase } from '@/domain/usecases/user'
import { UserRepository } from '@/infra/postgres/repositories'

export const makeUpdateUserUsecase = (): UpdateUser => {
  const userRepository = new UserRepository()
  return new UpdateUserUseCase(userRepository)
}
