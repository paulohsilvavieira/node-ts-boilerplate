import { DeleteUser } from '@/domain/protocols/usecases/user'
import { DeleteUserRepository } from '@/domain/protocols/repositories/users'

export class DeleteUserUseCase implements DeleteUser {
  constructor (private readonly deleteUserRepository: DeleteUserRepository) {}

  async execute (params: DeleteUser.Params): Promise<DeleteUser.Result> {
    const result = await this.deleteUserRepository.delete(params)
    return {
      success: result,
      errors: result ? null : new Error('Error on delete User')
    }
  }
}
