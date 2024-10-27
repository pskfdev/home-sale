import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mjk5MzE2NjgsImV4cCI6MTczMTIyNzY2OH0.B3g6Sh55jAe-3dD-cCnHWJigFnQQj_gy9QjtMMTwG_U";

export const readAssets = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/assets/${id}`);
};

export const uploadFile = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/image`,
    {
      image: data,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFile = async (public_id) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/remove-image`,
    {
      public_id: public_id,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};
