import { ErrorStructure } from './error-structure'

export interface UserData {
  id?: string
  email: string
  name: string
  password: string
  created_at?: Date
  updated_at?: Date
}

export class User {
  public errors: ErrorStructure[]=[]
  public isValid: boolean=false
  private readonly requiredFields =['name', 'email', 'password']
  constructor (private readonly params: UserData, private readonly validationTools?: any) {
    this.validation()
  }

  private validation () {
    this.errors = []
    const params = this.params

    if (params === undefined) {
      this.requiredFields.forEach((field) => {
        this.errors.push({
          param: `${field}`,
          msg: `${field} is required!`
        })
      })
    } else {
      this.requiredFields.forEach((field) => {
        const fieldtoValidate = this.params[field as keyof typeof params]
        if (fieldtoValidate === undefined || !fieldtoValidate) {
          this.errors.push({
            param: `${field}`,
            msg: `${field} is required!`
          })
        }
      })
    }

    this.isValid = this.errors.length === 0
  }

  toJSON () {
    return {
      ...this.params,
      created_at: this.params.created_at,
      updated_at: this.params.updated_at
    }
  }
}
