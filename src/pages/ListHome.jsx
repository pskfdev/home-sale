import React from "react";

//Components
import { Autocomplete, Breadcrumbs, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Cardhouse from "../components/util/Card-house";

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
  return (
    <div>
      {/* Search-house */}
      <form className="w-full py-5 px-5 flex justify-between space-x-5 border-b-2 border-gray-300">
        <Autocomplete
          disablePortal
          options={county}
          sx={{ width: "50%" }}
          renderInput={(params) => <TextField {...params} label="จังหวัด" />}
        />

        <TextField
          required
          id="outlined-required"
          label="อำเภอ / ตำบล"
          /* defaultValue="Hello World" */
          sx={{ width: "100%" }}
        />

        <Button variant="contained">ค้นหา</Button>
      </form>

      {/* content */}
      <div className="py-10 px-10 space-y-10 bg-slate-100">
        {/* Head */}
        <div className="space-y-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              หน้าแรก
            </Link>
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
