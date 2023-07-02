import { CreateUser } from '@/domain/protocols/usecases/user'
import { CreateUserRepository } from '@/domain/protocols/repositories/users'
import { User } from '@/domain/entities'

export class CreateUserUseCase implements CreateUser {
  constructor (private readonly createUserRepository: CreateUserRepository) {}

  async execute (params: CreateUser.Params): Promise<CreateUser.Result> {
    const user = new User(params)
    if (!user.isValid) {
      return {
        success: false,
        errors: user.errors
      }
    }

    const result = await this.createUserRepository.create(params)
    return {
      success: result,
      errors: result ? null : new Error('Error on create User')
    }
  }
}
