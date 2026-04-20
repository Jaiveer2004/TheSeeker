import axiosInstance from "./axiosInstance";

export const getConnection = () => {
  return axiosInstance.get("/test/test-conntection");
}