export type TValue = string | number | boolean | null | undefined;
export type InputType = 'text' | 'number' | 'date';

export interface IGenericResponse<T> {
  data: T;
  count: number;
}
