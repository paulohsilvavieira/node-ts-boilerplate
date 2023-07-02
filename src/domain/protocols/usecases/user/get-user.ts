import { ErrorStructure } from '@/domain/entities/error-structure'

export interface GetUser {
  execute: (account: GetUser.Params) => Promise<GetUser.Result>
}

export namespace GetUser {
  export type Params ={
    id: string
  }
  export type Result={
    user: {
      created_at: Date
      updated_at: Date
      id?: string
      email: string
      name: string
      password: string
    }
    errors?: ErrorStructure[] | Error
  }
}
