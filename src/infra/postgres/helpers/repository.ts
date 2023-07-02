import { ObjectType, Repository } from 'typeorm'
import { DatabaseConnection } from './connection'

export abstract class DatabaseRepository {
  constructor (private readonly connection: DatabaseConnection = DatabaseConnection.getInstance()) {}

  getRepository<Entity> (entity: ObjectType<Entity>, transaction?: boolean): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}
