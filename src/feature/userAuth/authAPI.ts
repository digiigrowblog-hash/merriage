import axios from "axios";
import { User } from "@/types/index";

const AXIOS_BASE_URL = "/api/auth";

export const signup = async (user: any) => {
  try {
    const response = await axios.post(`${AXIOS_BASE_URL}/signup`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    // Handle different error types
    if (error.response?.status === 400) {
      throw new Error(
        error.response.data.details?.message || "Validation failed"
      );
    }
    if (error.response?.status === 409) {
      throw new Error(error.response.data.error || "User already exists");
    }
    throw new Error("Signup failed. Please try again.");
  }
};

export const Signin = async (user: User) => {
  try {
    const response = await axios.post(`${AXIOS_BASE_URL}/signin`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    // Handle different error types
    if (error.response?.status === 400) {
      throw new Error(
        error.response.data.details?.message || "Validation failed"
      );
    }
  }
};

export const logout = async () => { };

export const getProfile = async () => { };

export const updateProfile = async () => { };
