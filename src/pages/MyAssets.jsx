import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Components
import { FiHome, FiTrash2 } from "react-icons/fi";
import {
  Breadcrumbs,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
//Functions
import { listAssets, removeAssets } from "../functions/assets";

function MyAssets() {
  const [data, setData] = useState([]);
  const username = localStorage.getItem("username");

  const fetchData = () => {
    listAssets()
      .then((res) => {
        const filter = res.data.filter((item) => item.ownerName == username);

        setData(filter);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure delete?")) {
      removeAssets(id)
        .then((res) => {
          const filter = data.filter((item) => item.id != res.data.id);

          setData(filter);
        })
        .catch((error) => {
          console.log("Error", error);
          alert("Remove fail!!");
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="py-10 px-10 space-y-10 bg-slate-100">
        {/* Header */}
        <div className="space-y-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">หน้าแรก</Link>
            <p className="text-gray-700">My Assets</p>
          </Breadcrumbs>
          <div className="flex items-center justify-center text-gray-500 space-x-5 py-10">
            <FiHome size={35} className="text-blue-400" />
            <h1 className="uppercase text-center tracking-widest">My Assets</h1>
          </div>
        </div>

        {/* list-house */}
        {data.length != 0 ? (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} className="border-x-0">
              <TableHead className="bg-slate-100 uppercase">
                <TableRow>
                  <TableCell>Assets image</TableCell>
                  <TableCell>Assets name</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Price rent</TableCell>
                  <TableCell align="right">Price Sale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-white">
                {data.map((item) => (
                  <TableRow
                    key={item?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <img
                        src={item?.images[0]?.url}
                        alt=""
                        className="w-20 h-20 rounded-md drop-shadow-2xl"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item?.title}
                    </TableCell>
                    <TableCell align="right">{item?.category?.name}</TableCell>
                    <TableCell align="right">{item?.location}</TableCell>
                    <TableCell align="right">{item?.priceRent}</TableCell>
                    <TableCell align="right">{item?.priceSale}</TableCell>
                    <TableCell>
                      <FiTrash2
                        size={25}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleRemove(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h2 className="tracking-widest">ไม่มีข้อมูล...</h2>
        )}
      </div>
    </div>
  );
}

export default MyAssets;
