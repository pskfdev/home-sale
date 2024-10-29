import axios from "axios";

export const authProvider = {
  logout: () => {
    localStorage.clear();
    return Promise.resolve();
  },

  // ตรวจสอบสถานะการ login (Protect route)
  // ถ้าเคย login และมี token ,role == 'admin' ให้เข้าได้
  checkAuth: async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return Promise.reject();
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/current-admin`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return Promise.resolve();
    } catch (error) {
      console.log("Err", error);
      return Promise.reject();
    }
  },

  // ตรวจสอบสิทธิ์การเข้าถึง
  /* checkError: (error) => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('authToken');
            return Promise.reject();
        }
        return Promise.resolve();
    }, */

  // ดึงข้อมูลผู้ใช้ (ถ้ามี)
  /* getIdentity: () => Promise.resolve({
        id: 'user',
        fullName: 'Admin User',
    }), */

  // ตรวจสอบสิทธิ์การเข้าถึง resource ต่าง ๆ
  /* getPermissions: () => Promise.resolve(), */
};
