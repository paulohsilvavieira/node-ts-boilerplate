import { CreateUser } from '@/domain/protocols/usecases/user'
import { Controller, HttpRequest, HttpResponse } from '@/presenters/api/protocols'
import { badRequest, serverError, ok } from '@/presenters/api/helpers'

export class CreateUserController implements Controller {
  constructor (
    private readonly createUser: CreateUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.createUser.execute(httpRequest.body)

      if (!result.success) {
        return badRequest({
          message: result.errors
        })
      }
      return ok({
        msg: 'User Created'
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
