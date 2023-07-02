import { GetUser } from '@/domain/protocols/usecases/user'
import { GetUserUseCase } from '@/domain/usecases/user'
import { UserRepository } from '@/infra/postgres/repositories'

export const makeGetUserUsecase = (): GetUser => {
  const userRepository = new UserRepository()
  return new GetUserUseCase(userRepository)
}
