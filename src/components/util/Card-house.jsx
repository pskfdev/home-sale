import React from "react";
import { Link } from "react-router-dom";

//Components
import { Button } from "@mui/material";

function Cardhouse({ item }) {
  return (
    <div className="flex flex-col md:flex-row rounded-md bg-white overflow-hidden">
      <div>
        <img
          src={item?.images[0]?.url}
          alt={item?.images[0]?.public_id}
          className="w-full md:w-[500px] object-cover h-52"
        />
      </div>

      <div className="p-5 w-full flex flex-col justify-between space-y-2 md:space-y-0">
        {/* Title & Price */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between">
          <h3>{item?.title}</h3>
          <p className="text-gray-500">
            {item?.priceRent ? `เช่า ${item?.priceRent?.toLocaleString()} บาท/เดือน` : ''}{" "}
            <span className="text-blue-500">{item?.priceSale ? `| ขาย ${item?.priceSale?.toLocaleString()} บาท` : ''}</span>
          </p>
        </div>

        {/* Detail location */}
        <div>
          <p>{item?.description.substring(0, 70) + " ..."}</p>
          <p>{item?.location}</p>
        </div>

        {/* Type / name-sale / Button */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <p className="w-fit p-1 bg-yellow-500 text-white rounded-md">
              {item?.category?.name}
            </p>
            <p>ผู้ขาย : เสือ เอเจ้น</p>
          </div>
          <Button
            component={Link}
            to={`/${item?.category?.name}/${item?.id}`}
            variant="contained"
            color="primary"
          >
            รายละเอียด
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cardhouse;
