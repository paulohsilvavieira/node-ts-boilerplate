import { ErrorStructure } from '@/domain/entities/error-structure'

export interface DeleteUser {
  execute: (params: DeleteUser.Params) => Promise<DeleteUser.Result>
}

export namespace DeleteUser {
  export type Params ={
    id: string
  }
  export type Result={
    success: boolean
    errors?: ErrorStructure[] | Error
  }
}
