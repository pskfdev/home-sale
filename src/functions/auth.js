import axios from "axios";


export const register = (data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/register`, data);
}

export const login = (data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/login`, data);
}