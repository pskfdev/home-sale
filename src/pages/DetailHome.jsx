import React, { useState } from "react";
import { Link } from "react-router-dom";
//Components
import { Breadcrumbs, Container, Divider } from "@mui/material";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import Carousel from "../components/util/Carousel";

function DetailHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Carousel */}
      <div className="h-[500px] w-full bg-black">
        <Carousel />
      </div>

      {/* Detail */}
      <Container maxWidth="lg" className="py-10 space-y-10">
        {/* Head */}
        <div className="space-y-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <Link to="/">townhouse</Link>
            <p className="text-gray-700">
              ขายทาวน์เฮาส์ 2 ชั้น นวมินทร์ 74 หลังแม็กแวลู
            </p>
          </Breadcrumbs>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
            <h2>ขายทาวน์เฮาส์ 2 ชั้น นวมินทร์ 74 หลังแม็กแวลู</h2>
            <h2>฿1,990,000 บาท</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 bg-white rounded-md">
          <h3 className="mb-5">คำอธิบาย</h3>
          <Divider />
          <div className="mt-5 md:pe-20 space-y-4">
            <p>ขายทาวน์เฮาส์ 2 ชั้น นวมินทร์ 74 หลังแม็กแวลู</p>
            <p>รายละเอียดบ้าน</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              optio soluta sed in, minima facere consectetur, perspiciatis quia
              hic, inventore enim? Nesciunt exercitationem, reiciendis earum
              dolores nemo natus nihil. Culpa nesciunt sapiente cumque nemo
              nisi, maiores quas tempora voluptatem doloribus quaerat odio nihil
              minima? Ducimus vel voluptas unde sint explicabo!
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="p-7 bg-white rounded-md">
          <h3 className="mb-5">ช่องทางติดต่อ</h3>
          <Divider />
          <div className="mt-5 pe-20 space-y-4">
            <p>ขายทาวน์เฮาส์ 2 ชั้น นวมินทร์ 74 หลังแม็กแวลู</p>
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
