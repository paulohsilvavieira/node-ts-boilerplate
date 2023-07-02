import { DeleteUser } from '../../usecases/user'

export interface DeleteUserRepository{
  delete: (basicData: DeleteUser.Params) => Promise<boolean>
}
