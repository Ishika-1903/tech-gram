export type SignupRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponse = {
  message: string;
};
