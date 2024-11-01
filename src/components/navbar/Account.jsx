import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { FiPower, FiHome } from "react-icons/fi";

//Functions
import { logout } from "../../functions/auth";

function Account({ username }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hidden lg:flex">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <div className="flex items-center space-x-2 p-2 bg-blue-900 text-white border-2 border-sky-200 rounded-xl cursor-pointer">
          <FaUserCircle size={17} className="text-sky-200" />
          <h4>{username && username}</h4>
        </div>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/myassets">
          <span className="mr-2 text-sky-400">
            <FiHome size={22} />
          </span>
          My Assets
        </MenuItem>
        <MenuItem onClick={() => logout(navigate)}>
          <span className="mr-2 text-red-400">
            <FiPower size={22} />
          </span>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Account;
