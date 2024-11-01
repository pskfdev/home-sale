import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//Components
import { Autocomplete, Breadcrumbs, Button, TextField } from "@mui/material";
import { FiPlusCircle } from "react-icons/fi";
import Cardhouse from "../components/util/Card-house";
import ModalCreateAssets from "../components/modal/ModalCreateAssets";
//Functions
import { listAssets } from "../functions/assets";

const listLocation = [
  "กรุงเทพมหานคร",
  "สมุทรปราการ",
  "ปทุมธานี",
  "นนทบุรี",
  "ชลบุรี",
  "สมุทรสาคร",
  "สมุทรสงคราม",
  "นครปฐม",
];

function ListHome() {
  /* useRef เวลา Rerender ข้อมูลจะไม่ถูก reset */
  const value = useRef({
    location: "",
    description: "",
  });

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  /* Get pathname */
  const location = useLocation();
  const pathname = location.pathname.substring(1); /* ตัด "/" ออก */

  /* Get token */
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    /* const { name, value } = e.target; */
    value.current = {
      ...value.current,
      [e.target.name]: e.target.value,
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (data.length == 0) {
      alert("ไม่มีข้อมูลที่ค้นหา");
      return;
    } else if (!value.current.location || !value.current.description) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    let resultFilter = data?.filter(
      (item) =>
        /* item.location == value.current.location */
        value.current.location.includes(item.location) &&
        item.description
          .toLowerCase()
          .includes(value.current.description.toLowerCase())
    );

    setDataSearch(resultFilter);
  };

  const fetchData = async () => {
    try {
      const response = await listAssets();
      const filter = response.data.filter(
        (item) => item?.category?.name == pathname
      );
      setData(filter);
      setDataSearch(filter);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [location.pathname, modal]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Form Search-house */}
      <form
        onSubmit={handleSearch}
        className="w-full py-5 px-5 flex justify-between space-x-5 border-b-2"
      >
        <Autocomplete
          disablePortal
          options={listLocation}
          sx={{ width: "50%" }}
          renderInput={(params) => (
            <TextField required {...params} label="จังหวัด" />
          )}
          onChange={(e, v) => (value.current.location = v)}
        />

        <TextField
          required
          type="search"
          name="description"
          label="รายละเอียดสถานที่"
          sx={{ width: "100%" }}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained">
          ค้นหา
        </Button>
      </form>

      {/* content */}
      <div className="py-10 px-10 space-y-10 bg-slate-100">
        {/* Head, Button Modal */}
        <div className="space-y-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <p className="text-gray-700">{pathname}</p>
          </Breadcrumbs>
          <div className="flex items-center space-x-5">
            <h2 className="uppercase">{pathname}</h2>
            {token && (
              <FiPlusCircle
                size={29}
                onClick={() => setModal(true)}
                className="text-green-500 cursor-pointer hover:scale-125 hover:text-green-700"
              />
            )}
          </div>
        </div>

        {/* list-house */}
        <div className="space-y-5">
          <p className="text-yellow-500">
            {dataSearch?.length} อสังหาริมทรัพย์
          </p>

          <div className="space-y-5">
            {dataSearch.length != 0 ? (
              dataSearch.map((item) => <Cardhouse item={item} key={item.id} />)
            ) : (
              <h1>ไม่มีข้อมูล</h1>
            )}
          </div>
        </div>

        {/* Modal Create Assets */}
        <ModalCreateAssets modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}

export default ListHome;
