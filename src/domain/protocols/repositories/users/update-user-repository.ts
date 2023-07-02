import { UpdateUser } from '../../usecases/user'

export interface UpdateUserRepository{
  updateUser: (basicData: UpdateUser.Params) => Promise<boolean>
}
