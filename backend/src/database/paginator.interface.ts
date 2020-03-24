export interface Paginator<T> {
  readonly docs: T[];
  readonly total: number;
  readonly limit: number;
  readonly page?: number;
  readonly pages?: number;
  readonly offset?: number;
}
