import { axiosInstance } from "@/utils/axios";
interface LoginResponse {
  status: string;
  token?: string;
  msg?: string;
}

export const loginAdmin = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/api/admin/login",
      {
        username,
        password,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
export const getUnBlockUser = async () => {
  try {
    const response = await axiosInstance.get(
      `/api/admin/users?is_blocked=false`,
    );
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
export const getBlockUser = async () => {
  try {
    const response = await axiosInstance.get(
      `/api/admin/users?is_blocked=true`,
    );
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
export const welcomeChips = async () => {
  try {
    const response = await axiosInstance.get(`/api/settings`);
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
export const GetPaymentHistory = async () => {
  try {
    const response = await axiosInstance.get(`/api/payments/history`);
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
export const UserBlock = async (userId: string) => {
  try {
    const response = await axiosInstance.post(`/api/admin/block/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
export const UserUnBlock = async (userId: string) => {
  try {
    const response = await axiosInstance.post(`/api/admin/unblock/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error);
    throw error;
  }
};
