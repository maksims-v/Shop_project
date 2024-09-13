export interface LoginSchema {
  identifier: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
