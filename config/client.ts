import axios from "axios";

const baseUrl = process.env.NODE_ENV == "development"? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASEURL;
const axiosClient = axios.create({
    baseURL: baseUrl,
    // timeout: 50000,
    withCredentials: true,
})

export default axiosClient;