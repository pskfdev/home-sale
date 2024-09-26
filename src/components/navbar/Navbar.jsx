import React from "react";

/* Components */
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { FiList, FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="justify-between">
          <div className="flex items-center space-x-20">
            {/* Humberger & Logo */}
            <div className="flex space-x-5">
              <div className="lg:hidden">
                <FiList size={35} />
              </div>
              <h2>Home Sale</h2>
            </div>

            {/* Menu */}
            <div className="space-x-5 hidden lg:flex">
              <Link to={`/`}>หน้าหลัก</Link>
              <div className="flex items-center space-x-1">
                <p>ที่อยู่อาศัย</p> <FiChevronDown size={22} className="mt-1" />
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
