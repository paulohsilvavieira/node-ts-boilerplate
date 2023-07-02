import { ErrorStructure } from '@/domain/entities/error-structure'

export interface GetAllUser {
  execute: () => Promise<GetAllUser.Result>
}
type UserJson={
  created_at: Date
  updated_at: Date
  id?: string
  email: string
  name: string
  password: string
}
export namespace GetAllUser {

  export type Result={
    users: UserJson[]
    errors?: ErrorStructure[] | Error
  }
}
