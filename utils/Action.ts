import axios from "axios";
// import axiosClient from "../config/client";
import { valueInterface } from "./types";


export type AxiosErrorResponse = {
  response?: {
    data?: {
      message?: string;
      detail?: string; // <-- Add 'detail' here
    };
  };
  message?: string;
};

export const SendMessage = async (url: string, body: valueInterface) => {
    try {
        const response = await axios.post(`/${url}`, body, {headers: {'Content-Type': 'application/json'}});
        const data = await response.data;
        if (response.status === 200) {
          return { success: true, message: data.message, data: data.data };
        } else {
          return { success: false, message: data.message };
        }
    } catch (err: unknown) {
        const error = err as AxiosErrorResponse;
        return { success: false, message: error.response?.data?.message || error.message };
    }
}