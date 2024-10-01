import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//Components
import { Breadcrumbs, Container, Divider } from "@mui/material";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import Carousel from "../components/util/Carousel";

function DetailHome() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  

  const fetchData = async () => {
    try {
      const response = await fetch("/public/data.json");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const filter = json?.filter((item) => item.id == id);
      
      setData(filter[0]);
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
        <Carousel url={data?.url} />
      </div>

      {/* Detail */}
      <Container maxWidth="lg" className="py-10 space-y-10">
        {/* Head */}
        <div className="space-y-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <Link to="/">{data?.type}</Link>
            <p className="text-gray-700">
              {data?.title}
            </p>
          </Breadcrumbs>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
            <h2>{data?.title}</h2>
            <h2>{data?.price}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 bg-white rounded-md">
          <h3 className="mb-5">คำอธิบาย</h3>
          <Divider />
          <div className="mt-5 md:pe-20 space-y-4">
            <p>{data?.title}</p>
            <p>รายละเอียดบ้าน</p>
            <p>
              {data?.detailHome}
            </p>
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
              <p>Home Sale</p>
            </div>
            <div className="flex space-x-2">
              <FiPhoneCall size={20} />
              <p>096 886 9898</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailHome;
