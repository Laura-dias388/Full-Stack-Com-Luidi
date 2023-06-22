export interface IUser {
  type: string | null,
  message: string,
}

export interface IResult {
  dataValues: {
    id: number,
    name: string,
  },
}