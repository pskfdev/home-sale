import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Components */
import {
  AppBar,
  Box,
  Drawer,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { FiList, FiChevronDown, FiPhoneCall } from "react-icons/fi";
import SidebarMenu from "./SidebarMenu";


function Navbar() {
  const [menu, setMenu] = useState(null);
  const openMenu = Boolean(menu);
  const handleDropdown = (event) => {
    setMenu(event.currentTarget);
  };
  const selectDropdown = () => {
    setMenu(null);
  };

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="justify-between">
          <div className="flex items-center space-x-20">
            {/* Humberger & Logo */}
            <div className="flex space-x-5">
              <div className="lg:hidden">
                <FiList size={35} onClick={toggleDrawer(true)} />
              </div>
              {/* Menu-Sidebar */}
              <Drawer open={open} onClose={toggleDrawer(false)} >
                <SidebarMenu toggleDrawer={toggleDrawer} />
              </Drawer>
              <h2>Home Sale</h2>
            </div>

            {/* Menu */}
            <div className="space-x-5 hidden lg:flex">
              <Link to={`/`}>หน้าหลัก</Link>
              <div className="flex items-center">
                <p
                  className="cursor-pointer"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleDropdown}
                >
                  ที่อยู่อาศัย
                </p>{" "}
                <FiChevronDown size={20} className="mt-1 cursor-pointer" />

                {/* default hidden dropdown-menu */}
                <Menu
                  anchorEl={menu}
                  open={openMenu}
                  onClose={selectDropdown}
                  className="mt-2"
                >
                  <MenuItem onClick={selectDropdown}>ทาวน์เฮ้าส์</MenuItem>
                  <MenuItem onClick={selectDropdown}>
                    ที่พร้อมสิ่งปลูกสร้าง
                  </MenuItem>
                  <MenuItem onClick={selectDropdown}>บ้านแฝด</MenuItem>
                  <MenuItem onClick={selectDropdown}>คอนโดมิเนียม</MenuItem>
                  <MenuItem onClick={selectDropdown}>ที่ดิน</MenuItem>
                  <MenuItem onClick={selectDropdown}>บ้านเดี่ยว</MenuItem>
                  <MenuItem onClick={selectDropdown}>อพาร์ทเมนท์</MenuItem>
                  <MenuItem onClick={selectDropdown}>อาคารพาณิชย์</MenuItem>
                </Menu>
              </div>
              <Link to={`/contact`}>ติดต่อเรา</Link>
            </div>
          </div>

          {/* flex-end */}
          <div className="flex items-center space-x-2 p-2 bg-blue-900 text-white rounded-xl">
            <FiPhoneCall size={22} className="mt-1" />
            <h4>096 885 5869</h4>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
