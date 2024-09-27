import React from "react";
import { Link } from "react-router-dom";

function SelectType() {
  return (
    <div className="flex justify-center items-center my-5 px-5">
      <div className="space-y-5 w-full">
        <h2 className="text-center">เลือกประเภทที่ต้องการค้นหา</h2>

        <div className="w-full h-full lg:h-[520px] grid grid-cols-1 lg:grid-cols-5 gap-4 text-white rounded-md overflow-hidden">
          {/* Col 1 */}
          <Link to="/townhouse" className="rounded-md overflow-hidden relative">
            <img
              src="https://thepandaproperty.com/wp-content/uploads/2023/07/townhouse.jpeg"
              alt=""
              className="w-full h-96 lg:h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
            />

            <div className="absolute top-12 w-full">
              <h2 className="text-center">ทาวน์เฮ้าส์</h2>
            </div>
          </Link>

          {/* Col 2 */}
          <div className="space-y-4">
            <div className="h-96 lg:h-2/5 rounded-md overflow-hidden relative">
              <Link to="ready-build">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/ready-to-build.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">ที่พร้อมสิ่งปลูกสร้าง</h2>
                </div>
              </Link>
            </div>

            <div className="h-96 lg:h-3/5 rounded-md overflow-hidden relative">
              <Link to="semi-detached-house">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/semi-detached-house.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">บ้านแฝด</h2>
                </div>
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <div className="h-96 lg:h-3/5 rounded-md overflow-hidden relative">
              <Link to="/condo">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/condo.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">คอนโดมิเนียม</h2>
                </div>
              </Link>
            </div>

            <div className="h-96 lg:h-2/5 rounded-md overflow-hidden relative">
              <Link to="/land">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/land.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">ที่ดิน</h2>
                </div>
              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <div className="h-96 lg:h-2/5 rounded-md overflow-hidden relative">
              <Link to="single-house">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/single-house.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">บ้านเดี่ยว</h2>
                </div>
              </Link>
            </div>

            <div className="h-96 lg:h-3/5 rounded-md overflow-hidden relative">
              <Link to="/apartment">
                <img
                  src="https://thepandaproperty.com/wp-content/uploads/2023/07/apartment.jpeg"
                  alt=""
                  className="w-full h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
                />

                <div className="absolute top-12 w-full">
                  <h2 className="text-center">อพาร์ทเมนท์</h2>
                </div>
              </Link>
            </div>
          </div>

          {/* Col 5 */}
          <Link to="/commercial-building" className="rounded-md overflow-hidden relative">
            <img
              src="https://thepandaproperty.com/wp-content/uploads/2023/07/commercial-building.jpg"
              alt=""
              className="w-full h-96 lg:h-full object-cover brightness-50 cursor-pointer hover:brightness-90"
            />

            <div className="absolute top-12 w-full">
              <h2 className="text-center">อาคารพาณิชย์</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectType;
