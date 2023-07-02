
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import crypto from 'node:crypto'
@Entity({ name: 'users' })

export class User {
  @PrimaryColumn()
  id: string

  @Column({ nullable: true })
  name: string

  @Column({
    nullable: true
  })
  email: string

  @Column({ nullable: true })
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  setId () {
    this.id = crypto.randomUUID()
  }
}
