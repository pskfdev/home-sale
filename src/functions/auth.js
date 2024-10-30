import axios from "axios";

export const register = (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/register`, data);
};

export const login = (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/login`, data);
};

export const currentUser = (token) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/current-user`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const currentAdmin = (token) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/current-admin`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const logout = (navigate) => {
  localStorage.clear();
  navigate('/');
  alert("Logout success")
}
