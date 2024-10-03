import { fetchUtils } from 'react-admin';

// สร้าง custom data provider เพื่อโหลดข้อมูลจากไฟล์ JSON
const customDataProvider = {
  getList: (resource, params) => {
    // ดึงข้อมูลจากไฟล์ JSON
    return fetch("/data.json")
      .then(response => response.json())
      .then(data => {
      
        let filteredData = data;

        // กรองตาม title
        if (params.filter && params.filter.title) {
          filteredData = filteredData.filter(item =>
            item.title.toLowerCase().includes(params.filter.title.toLowerCase())
          );
        }

        return {
          data: filteredData,
          total: filteredData.length,
        };
      });
  },

  getOne: (resource, params) => {
    // ดึงข้อมูลเฉพาะที่มี id ตรงกับ params.id
    return fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        const record = data.find(item => item.id === params.id);
        return {
          data: record, // ส่งข้อมูลของรายการที่เลือก
        };
      });
  },

  // เพิ่ม method อื่นๆ ถ้าจำเป็น เช่น create, update, delete
};

export default customDataProvider;
