import axios from "axios";


export const createAssets = async (data) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/assets`, data);
};

export const listAssets = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/assets`);
};

export const readAssets = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/assets/${id}`);
};

export const updateAssets = async (id, data) => {
  return await axios.put(`${import.meta.env.VITE_API_URL}/assets/${id}`, data);
};

export const removeAssets = async (id) => {
  return await axios.delete(`${import.meta.env.VITE_API_URL}/assets/${id}`);
};


//For Upload Image
export const uploadFile = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/image`,
    {
      image: data,
    },
  );
};

export const removeFile = async (public_id) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/remove-image`,
    {
      public_id: public_id,
    },
  );
};
