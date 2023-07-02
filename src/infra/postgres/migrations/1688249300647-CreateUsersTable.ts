import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersTable1688249300647 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          }
        ]
      }),
      true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
