import { UpdateUser } from '@/domain/protocols/usecases/user'
import { Controller, HttpRequest, HttpResponse } from '@/presenters/api/protocols'
import { badRequest, serverError, ok } from '@/presenters/api/helpers'

export class UpdateUserController implements Controller {
  constructor (
    private readonly updateUser: UpdateUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.updateUser.execute({
        ...httpRequest.body,
        id: httpRequest.params.id
      })

      if (!result.success) {
        return badRequest({
          message: result.errors
        })
      }
      return ok({
        msg: 'User Updated'
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
