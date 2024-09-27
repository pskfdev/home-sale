import React from "react";
import { Button } from "@mui/material";

function Cardhouse() {
  return (
    <div className="flex flex-col md:flex-row rounded-md bg-white overflow-hidden">
      <img src="https://thepandaproperty.com/wp-content/uploads/2023/08/81076-592x444.jpg" alt="" className="w-full md:w-1/5 object-cover" />

      <div className="p-5 w-full space-y-20">
        <div className="flex flex-col md:flex-row justify-between">
          <p>ขายทาวน์เฮาส์ 2 ชั้น นวมินทร์ 74 หลังแม็กแวลู</p>
          <p>฿1,990,000 บาท</p>
        </div>

        <div className="flex justify-between">
          <div className="space-y-4">
            <p>ทาวน์เฮ้าส์</p>
            <p>ผู้ขาย : B Smartlife</p>
          </div>
          <Button variant="contained">รายละเอียด</Button>
        </div>
      </div>
    </div>
  );
}

export default Cardhouse;
