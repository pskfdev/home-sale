import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//Components
import { Breadcrumbs, Container, Divider } from "@mui/material";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import Carousel from "../components/util/Carousel";
//Functions
import { readAssets } from "../functions/assets";

function DetailHome() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await readAssets(id);

      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Carousel */}
      <div className="h-[500px] w-full bg-black">
        <Carousel images={data?.images} />
      </div>

      {/* Detail */}
      <Container maxWidth="lg" className="py-10 space-y-10">
        {/* Head */}
        <div className="space-y-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <Link to={`/${data?.category?.name}`}>{data?.category?.name}</Link>
            <p className="text-gray-700">{data?.title}</p>
          </Breadcrumbs>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
            <h2>{data?.title}</h2>
            <h2 className="text-gray-500">
              {`เช่า ${data?.priceRent?.toLocaleString()} บาท/เดือน`}{" "}
              <span className="text-blue-500">{`| ขาย ${data?.priceSale?.toLocaleString()} บาท`}</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 bg-white rounded-md">
          <h3 className="mb-5">คำอธิบาย</h3>
          <Divider />
          <div className="mt-5 md:pe-20 space-y-4">
            <p>{data?.title}</p>
            <p className="text-slate-700">รายละเอียดบ้าน</p>
            <p>{data?.description}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="p-7 bg-white rounded-md">
          <h3 className="mb-5">ช่องทางติดต่อ</h3>
          <Divider />
          <div className="mt-5 pe-20 space-y-4">
            <p>{data?.title}</p>
            <div className="flex space-x-2">
              <FiUser size={20} />
              <p>เสือ เอเจ้น</p>
            </div>
            <div className="flex space-x-2">
              <FiPhoneCall size={20} />
              <p>099 454 4489</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailHome;
