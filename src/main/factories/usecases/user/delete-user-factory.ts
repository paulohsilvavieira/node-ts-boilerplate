import { DeleteUser } from '@/domain/protocols/usecases/user'
import { DeleteUserUseCase } from '@/domain/usecases/user'
import { UserRepository } from '@/infra/postgres/repositories'

export const makeDeleteUserUsecase = (): DeleteUser => {
  const userRepository = new UserRepository()
  return new DeleteUserUseCase(userRepository)
}
