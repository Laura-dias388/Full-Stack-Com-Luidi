import { RowDataPacket } from 'mysql2';

export default interface IUser {
  type: string | null,
  message: string | RowDataPacket[],
}