export interface Profile {
  id?: number;
  username?: string;
  email?: string;
  fullName?: string;
  lastName?: string;
  city?: string;
  adress?: string;
  postCode?: string;
  phone?: number;
  country?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
