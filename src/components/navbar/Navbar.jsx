import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Components */
import { AppBar, Box, Drawer, Menu, MenuItem, Toolbar } from "@mui/material";
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
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <SidebarMenu />
              </Drawer>

              <Link to="/">
                <h2>เสือ เอเจ้น</h2>
              </Link>
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
                  <MenuItem component={Link} to="/townhouse">ทาวน์เฮ้าส์</MenuItem>
                  <MenuItem component={Link} to="/ready-build">
                    ที่พร้อมสิ่งปลูกสร้าง
                  </MenuItem>
                  <MenuItem component={Link} to="/semi-detached-house">บ้านแฝด</MenuItem>
                  <MenuItem component={Link} to="/condo">คอนโดมิเนียม</MenuItem>
                  <MenuItem component={Link} to="/land">ที่ดิน</MenuItem>
                  <MenuItem component={Link} to="/single-house">บ้านเดี่ยว</MenuItem>
                  <MenuItem component={Link} to="/apartment">อพาร์ทเมนท์</MenuItem>
                  <MenuItem component={Link} to="/commercial-building">อาคารพาณิชย์</MenuItem>
                </Menu>
              </div>
              <Link to={`/contact`}>ติดต่อเรา</Link>
            </div>
          </div>

          {/* flex-end */}
          <div className="flex items-center space-x-2 p-2 bg-blue-900 text-white rounded-xl">
            <FiPhoneCall size={22} className="mt-1" />
            <h4>099 454 4489</h4>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
