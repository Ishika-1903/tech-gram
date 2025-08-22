import ApiClient from "..";
import { SignupRequest, SignupResponse } from "./types";

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  try {
    const response = await ApiClient.post<SignupResponse>('/api/auth/signup', data);
    return response.data;
  } catch (error: any) {
    // Optional: you can throw a friendly error message for frontend
    const errorMessage = error?.data?.message || 'Something went wrong';
    throw new Error(errorMessage);
  }
};