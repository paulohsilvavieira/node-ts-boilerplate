import { DeleteUser } from '@/domain/protocols/usecases/user'
import { Controller, HttpRequest, HttpResponse } from '@/presenters/api/protocols'
import { badRequest, serverError, ok } from '@/presenters/api/helpers'

export class DeleteUserController implements Controller {
  constructor (
    private readonly deleteUser: DeleteUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.deleteUser.execute({
        id: httpRequest.params.id
      })

      if (!result.success) {
        return badRequest({
          message: result.errors
        })
      }
      return ok({
        msg: 'User Deleted'
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
