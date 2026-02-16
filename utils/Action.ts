import axios from "axios";
// import axiosClient from "../config/client";
import { valueInterface } from "./types";
import toast from "react-hot-toast";


export type AxiosErrorResponse = {
  response?: {
    data?: {
      message?: string;
      detail?: string; // <-- Add 'detail' here
    };
  };
  message?: string;
};

export const PostApi = async (url: string, body: unknown) => {
  try {
    const response = await axios.post(`/${url}`, body, { headers: { 'Content-Type': 'application/json' } });
    const data = await response.data;
    if ((response.status === 200 || response.status === 201) && data.success !== false) {
      return { success: true, message: data.message, data: data.data };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err: unknown) {
    const error = err as AxiosErrorResponse;
    toast.error(error.response?.data?.message || error.response?.data?.detail || error.message || "An Error occur!!!");
    return { success: false, message: error.response?.data?.message || error.message };
  }
}


export const UsePutApi = async (url: string, body: unknown) => {
  try {
    const response = await axios.put(`/${url}`, body);
    const data = response.data;

    if ((response.status === 200 || response.status === 201) && data.success !== false) {
      return { success: true, message: data.message, data: data.data };
    } else {
      return { success: false, message: data.message || "Update failed" };
    }
  } catch (err: unknown) {
   const error = err as AxiosErrorResponse;
    toast.error(error.response?.data?.message || error.response?.data?.detail || error.message || "An Error occur!!!");
    return { success: false, message: error.response?.data?.message || error.message };
  }
}

export const UseDeleteApi = async (url: string) => {
  try {
    const response = await axios.delete(`/${url}`);
    const data = response.data;

    if ((response.status === 200 || response.status === 201) && data.success !== false) {
      return { success: true, message: data.message, data: data.data };
    } else {
      return { success: false, message: data.message || "Update failed" };
    }
  } catch (err: unknown) {
   const error = err as AxiosErrorResponse;
    toast.error(error.response?.data?.message || error.response?.data?.detail || error.message || "An Error occur!!!");
    return { success: false, message: error.response?.data?.message || error.message };
  }
}

export const UseGetApi = async (url: string, params?: FilterModel) => {
  try {
    const response = await axios.get(`/${url}${getParamData(params)}`);
    const data = response.data;

    if ((response.status === 200 || response.status === 201) && data.success !== false) {
      return { success: true, message: data.message, data: data.data || data, pagination: data.pagination };
    } else {
      return { success: false, message: data.message || "Failed to fetch data", };
    }
  } catch (err: unknown) {
    const error = err as AxiosErrorResponse;
    toast.error(error.response?.data?.message || error.response?.data?.detail || error.message || "An Error occur!!!");
    return { success: false, message: error.response?.data?.message || error.message };
  }
}

export class FilterModel {
  from?: string;
  to?: string;
  staff_id?: string
  q?: string;
  page?: number;
  status?: string;
  limit?: string;
}


export function getParamData(param: FilterModel | undefined): string {
  //return `?UserId=${param.userId}&query=${param.Query}&PageSize=${param.PageSize}&Page=${param.Page}&startDate=${param.StartDate}&endDate=${param.EndDate}`

  if (!param) {
    return '';
  }

  const queryParams: string[] = [];

  if (param.from !== undefined && param.from !== "") {
    queryParams.push(`from=${param.from}`);
  }

  if (param.to !== undefined) {
    queryParams.push(`to=${param.to}`);
  }
  if (param.staff_id !== undefined) {
    queryParams.push(`staff_id=${param.staff_id}`);
  }
  if (param.q !== undefined) {
    queryParams.push(`q=${param.q}`);
  }
  if (param.page !== undefined) {
    queryParams.push(`page=${param.page}`);
  }
  if (param.status !== undefined) {
    queryParams.push(`status=${param.status}`);
  }
  if (param.limit !== undefined) {
    queryParams.push(`limit=${param.limit}`);
  }
  // console.log(queryParams.length > 0 ? `?${queryParams.join('&')}` : '');
  // Join the parameters with '&' and prefix with '?'
  return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
}

export const SendMessage = async (url: string, body: valueInterface) => {
  try {
    const response = await axios.post(`/${url}`, body, { headers: { 'Content-Type': 'application/json' } });
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