import axios from "axios";

export const createCategory = async (token, value) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/category`, value, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const listCategory = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/category`);
};

export const readCategory = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/category/${id}`);
};

export const updateCategory = async (token, id, value) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/category/${id}`,
    value,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeCategory = async (token, id) => {
  return await axios.delete(`${import.meta.env.VITE_API_URL}/category/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
