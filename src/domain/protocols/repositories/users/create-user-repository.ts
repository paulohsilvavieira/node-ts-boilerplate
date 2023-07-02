import { CreateUser } from '../../usecases/user'

export interface CreateUserRepository{
  create: (basicData: CreateUser.Params) => Promise<boolean>
}
