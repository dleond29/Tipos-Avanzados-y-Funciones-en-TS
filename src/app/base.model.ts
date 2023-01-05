export type Id = string | number;
export interface BaseModel{
  readonly id: Id;
  readonly createAt: Date;
  updateAt: Date;
}
