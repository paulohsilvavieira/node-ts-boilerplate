import { GetAllUser } from '@/domain/protocols/usecases/user'
import { Controller, HttpRequest, HttpResponse } from '@/presenters/api/protocols'
import { badRequest, serverError, ok } from '@/presenters/api/helpers'

export class GetAllUserController implements Controller {
  constructor (
    private readonly getallUser: GetAllUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { errors, users } = await this.getallUser.execute()

      if (errors) {
        return badRequest({
          message: errors
        })
      }
      return ok({
        msg: users
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
