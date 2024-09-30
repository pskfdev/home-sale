import React, { useRef, useState, useEffect } from "react";

//Components
import { Autocomplete, Breadcrumbs, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Cardhouse from "../components/util/Card-house";

//Data proprty
import dataJson from "../assets/data.json"

const county = [
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
  const value = useRef({
    county: "",
    detail: "",
  });

  const handleChange = (e) => {
    /* const { name, value } = e.target; */
    value.current = {
      ...value.current,
      [e.target.name]: e.target.value,
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(value.current);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Form Search-house */}
      <form
        onSubmit={handleSearch}
        className="w-full py-5 px-5 flex justify-between space-x-5 border-b-2"
      >
        <Autocomplete
          disablePortal
          options={county}
          sx={{ width: "50%" }}
          renderInput={(params) => <TextField {...params} label="จังหวัด" />}
          onChange={(e, v) => (value.current.county = v)}
        />

        <TextField
          required
          name="detail"
          label="อำเภอ / ตำบล"
          sx={{ width: "100%" }}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained">
          ค้นหา
        </Button>
      </form>

      {/* content */}
      <div className="py-10 px-10 space-y-10 bg-slate-100">
        {/* Head */}
        <div className="space-y-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <p className="text-gray-700">townhouse</p>
          </Breadcrumbs>
          <h2>townhouse</h2>
        </div>

        {/* list-house */}
        <div className="space-y-5">
          <p>617 อสังหาริมทรัพย์</p>

          <div className="space-y-5">
            <Cardhouse />
            <Cardhouse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHome;
