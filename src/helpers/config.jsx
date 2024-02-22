import axios from "axios";

export const publicHeader = () => {
  return {
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "content-type": "multipart/form-data",
  };
};
export const tokenHeader = () => {
  return {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}`,
});
