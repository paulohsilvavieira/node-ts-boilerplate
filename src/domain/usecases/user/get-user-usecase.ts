import { GetUser } from '@/domain/protocols/usecases/user'
import { GetUserRepository } from '@/domain/protocols/repositories/users'

export class GetUserUseCase implements GetUser {
  constructor (private readonly getUserRepository: GetUserRepository) {}

  async execute (params: GetUser.Params): Promise<GetUser.Result> {
    const result = await this.getUserRepository.get(params)
    return {
      user: result.user.toJSON(),
      errors: result ? null : new Error('Error on get User')
    }
  }
}
