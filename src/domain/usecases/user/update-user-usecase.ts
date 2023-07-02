import { UpdateUser } from '@/domain/protocols/usecases/user'
import { UpdateUserRepository } from '@/domain/protocols/repositories/users'
import { User } from '@/domain/entities'

export class UpdateUserUseCase implements UpdateUser {
  constructor (private readonly updateUserRepository: UpdateUserRepository) {}

  async execute (params: UpdateUser.Params): Promise<UpdateUser.Result> {
    const user = new User(params)
    if (!user.isValid) {
      return {
        success: false,
        errors: user.errors
      }
    }

    const result = await this.updateUserRepository.updateUser(params)

    return {
      success: result,
      errors: result ? null : new Error('Error on update User')
    }
  }
}
