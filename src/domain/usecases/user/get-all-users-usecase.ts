import { GetAllUsersRepository } from '@/domain/protocols/repositories/users'
import { GetAllUser } from '@/domain/protocols/usecases/user'

export class GetAllUsersUseCase implements GetAllUser {
  constructor (private readonly getAllUsersRepository: GetAllUsersRepository) {}

  async execute (): Promise<GetAllUser.Result> {
    const result = await this.getAllUsersRepository.getAll()
    return {
      users: result.users,
      errors: result ? null : new Error('Error on get Users')
    }
  }
}
