import { ConnectionNotFoundError } from '@/infra/postgres/helpers/errors'

import path from 'path'
import config from '@/ormconfig'
import { createConnection, getConnection, getConnectionManager, ObjectType, QueryRunner, Repository, Connection } from 'typeorm'

export class DatabaseConnection {
  private static instance?: DatabaseConnection
  private query?: QueryRunner
  private connection?: Connection

  private constructor () {}

  static getInstance (): DatabaseConnection {
    if (DatabaseConnection.instance === undefined) DatabaseConnection.instance = new DatabaseConnection()
    return DatabaseConnection.instance
  }

  async connectDatabaseTest (): Promise<void> {
    this.connection = getConnectionManager().has('default')
      ? getConnection()
      : await createConnection()
  }

  async connect (): Promise<void> {
    this.connection = getConnectionManager().has('crud_node')
      ? getConnection('crud_node')
      : await createConnection({
        ...config as any,
        entities: [path.join(__dirname , '../entities/index.{ts,js}')],
        migrations: [path.join(__dirname , '../migrations/**/*.{ts,js}')],
        migrationsRun: true,
        synchronize: false,
        name: 'crud_node'
      })
  }

  async disconnect (): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    await getConnection('crud_node').close()
    this.query = undefined
    this.connection = undefined
  }

  async disconnectDatabaseTest (): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    await getConnection().close()
    this.query = undefined
    this.connection = undefined
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}
