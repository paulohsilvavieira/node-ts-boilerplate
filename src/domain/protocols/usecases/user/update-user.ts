import { ErrorStructure } from '@/domain/entities/error-structure'

export interface UpdateUser {
  execute: (params: UpdateUser.Params) => Promise<UpdateUser.Result>
}

export namespace UpdateUser {
  export type Params ={
    email: string
    name: string
    password: string
    id: string
  }
  export type Result={
    success: boolean
    errors: ErrorStructure[] | Error
  }
}
