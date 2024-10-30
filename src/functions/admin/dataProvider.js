import axios from "axios";

// สร้างรายการ path ที่ต้องใช้ token
const protectedPaths = ["/user", "/wishlist"];

// สร้าง Axios instance
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// เพิ่ม token เข้าใน request headers ถ้า path นั้นต้องการ token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  
  // ตรวจสอบว่าชื่อ path อยู่ในรายการ protectedPaths หรือไม่
  const isProtectedPath = protectedPaths.some((path) =>
    config.url.includes(path)
  );

  if (token && isProtectedPath) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

// ฟังก์ชั่น Method ต่างๆ สำหรับใช้ติดต่อกับ Backend API
export const dataProvider = {
  getList: async (resource, params) => {
    try {
      const { page, perPage } = params.pagination;
      const filter = params.filter;

      const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/${resource}`
      );
      let data = response.data;

      // กรองข้อมูลตามหลายฟิลด์ใน filter
      if (filter.name) {
        data = data.filter((item) =>
          item.name.toLowerCase().includes(filter.name.toLowerCase())
        );
      }
      if (filter.title) {
        data = data.filter((item) =>
          item.title.toLowerCase().includes(filter.title.toLowerCase())
        );
      }

      // แบ่งข้อมูลเป็นหน้าๆ ตาม page และ perPage
      const start = (page - 1) * perPage;
      const end = start + perPage;
      const paginatedData = data.slice(start, end);

      return {
        data: paginatedData,
        total: data.length, // จำนวนข้อมูลทั้งหมดเพื่อคำนวณหน้าทั้งหมด
      };

      //แบบไม่ใช้ Pagination
      /* return {
        data: response.data.map((record) => ({ ...record, id: record.id })), // ใส่ id ให้ react-admin ใช้
        total: response.data.length,
      }; */
    } catch (error) {
      console.log("Err", error);
    }
  },

  /* For Select category when create assets */
  getMany: async (resource, params) => {
    if (resource === "category") {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/${resource}`);
      const categories = response.data;

      return {
        data: categories.filter((category) => params.ids.includes(category.id)),
      };
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`
      );

      return {
        data: { ...response.data, id: response.data.id }, // ใส่ id ในข้อมูล
      };
    } catch (error) {
      console.log("Err", error);
    }
  },

  create: async (resource, params) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/${resource}`,
        params.data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        data: { ...response.data, id: response.data.id },
      };
    } catch (error) {
      console.log("Err", error);
    }
  },

  update: async (resource, params) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`,
        params.data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        data: { ...response.data, id: response.data.id },
      };
    } catch (error) {
      console.log("Err", error);
    }
  },

  delete: async (resource, params) => {
    try {
      const token = localStorage.getItem("token");
      
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        data: { ...response.data, id: response.data.id },
      };
    } catch (error) {
      console.log("Err", error);
    }
  },
};
