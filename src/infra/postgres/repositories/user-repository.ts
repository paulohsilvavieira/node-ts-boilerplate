
import { CreateUserRepository, DeleteUserRepository, GetAllUsersRepository, GetUserRepository, UpdateUserRepository, UserJson } from '@/domain/protocols/repositories/users'
import { CreateUser, GetUser, UpdateUser, DeleteUser } from '@/domain/protocols/usecases/user'
import { User } from '@/infra/postgres/entities'
import { User as UserEntity } from '@/domain/entities'
import { DatabaseRepository } from '../helpers/repository'
export class UserRepository extends DatabaseRepository implements
  CreateUserRepository, GetUserRepository,
  GetAllUsersRepository, UpdateUserRepository,
  DeleteUserRepository {
  async getAll (): Promise<{ users: UserJson[]}> {
    const userRepositoryTypeORM = this.getRepository(User)
    const findResult = await userRepositoryTypeORM.find({})
    const users = findResult.map((user) => {
      return new UserEntity(user).toJSON()
    })
    return {
      users
    }
  }

  async get (params: GetUser.Params): Promise<{user: UserEntity}> {
    const userRepositoryTypeORM = this.getRepository(User)
    const user = await userRepositoryTypeORM.findOne(params.id)
    return {
      user: new UserEntity(user)
    }
  }

  async updateUser (params: UpdateUser.Params): Promise<boolean> {
    const { id, ...attributes } = params
    const userRepositoryTypeORM = this.getRepository(User)
    const updated = await userRepositoryTypeORM.update({
      id
    }, attributes)
    return updated !== undefined
  }

  async delete (params: DeleteUser.Params): Promise<boolean> {
    const { id } = params
    const userRepositoryTypeORM = this.getRepository(User)
    const deleted = await userRepositoryTypeORM.delete({
      id
    })
    return deleted !== undefined
  }

  async create (createUser: CreateUser.Params): Promise<boolean> {
    const userRepositoryTypeORM = this.getRepository(User)
    const entity = userRepositoryTypeORM.create({ ...createUser })
    const saved = await userRepositoryTypeORM.insert(entity)
    return saved !== undefined
  }
}
