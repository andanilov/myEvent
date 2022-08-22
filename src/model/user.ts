export type TRole = 'user' | 'admin' | 'manager';

export default interface IUser {
  email: string,
  name?: string,
  role: TRole,
}