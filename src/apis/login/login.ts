import ApiClient from "..";
import { LoginRequest, LoginResponse } from "./types";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await ApiClient.post<LoginResponse>('/api/auth/login', data);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.data?.message || 'Something went wrong';
    throw new Error(errorMessage);
  }
}