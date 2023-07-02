import { User } from '@/domain/entities'
import { GetUser } from '../../usecases/user'

export interface GetUserRepository{
  get: (params: GetUser.Params) => Promise<{
    user: User
  }>
}
