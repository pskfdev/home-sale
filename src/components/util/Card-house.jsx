import React from "react";
import { Link } from "react-router-dom";

//Components
import { Button } from "@mui/material";

function Cardhouse({ item }) {
  return (
    <div className="flex flex-col md:flex-row rounded-md bg-white overflow-hidden">
      <img
        src={item.url[0]}
        alt=""
        className="w-full md:w-[500px] object-cover h-52"
      />

      <div className="p-5 w-full flex flex-col justify-between">
        {/* Title & Price */}
        <div className="flex flex-col md:flex-row justify-between">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>

        {/* Detail location */}
        <div>
          <p>{item.detail}</p>
          <p>{item.county}</p>
        </div>

        {/* Type / name-sale / Button */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <p>ทาวน์เฮ้าส์</p>
            <p>ผู้ขาย : B Smartlife</p>
          </div>
          <Button
            component={Link}
            to={`/townhouse/${item.id}`}
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
