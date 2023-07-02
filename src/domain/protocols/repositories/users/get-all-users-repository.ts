export type UserJson={
  created_at: Date
  updated_at: Date
  id?: string
  email: string
  name: string
  password: string
}
export interface GetAllUsersRepository{
  getAll: () => Promise<{users: UserJson[]}>
}
