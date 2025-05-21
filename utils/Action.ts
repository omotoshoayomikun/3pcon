import axiosClient from "../config/client";
import { valueInterface } from "./types";


export const SendMessage = async (url: string, body: valueInterface) => {
    try {
        const response = await axiosClient.post(`/${url}`, body, {headers: {'Content-Type': 'application/json'}});
        const data = await response.data;
        if (response.status === 200) {
          return { success: true, message: data.message, data: data.data };
        } else {
          return { success: false, message: data.message };
        }
    } catch (err: any) {
        return { success: false, message: err.response?.data?.message || err.message };
    }
}