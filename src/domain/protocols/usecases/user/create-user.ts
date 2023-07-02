import { ErrorStructure } from '@/domain/entities/error-structure'

export interface CreateUser {
  execute: (params: CreateUser.Params) => Promise<CreateUser.Result>
}

export namespace CreateUser {
  export type Params ={
    email: string
    name: string
    password: string
  }
  export type Result={
    success: boolean
    errors: ErrorStructure[] | Error
  }
}
