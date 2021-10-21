export interface ErrorWithStatus extends Error {
  status?: string | number;
}
