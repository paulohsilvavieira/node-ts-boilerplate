import { CreateUser } from '@/domain/protocols/usecases/user'
import { CreateUserUseCase } from '@/domain/usecases/user'
import { UserRepository } from '@/infra/postgres/repositories'

export const makeCreateUserUsecase = (): CreateUser => {
  const userRepository = new UserRepository()
  return new CreateUserUseCase(userRepository)
}
