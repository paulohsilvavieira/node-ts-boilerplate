import { GetUser } from '@/domain/protocols/usecases/user'
import { Controller, HttpRequest, HttpResponse } from '@/presenters/api/protocols'
import { badRequest, serverError, ok } from '@/presenters/api/helpers'

export class GetUserController implements Controller {
  constructor (
    private readonly getUser: GetUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { errors, user } = await this.getUser.execute(httpRequest.params)

      if (errors) {
        return badRequest({
          message: errors
        })
      }
      return ok({
        msg: user
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
