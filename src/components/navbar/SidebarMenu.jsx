import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

//Functions
import { logout } from "../../functions/auth";

const HeaderMenu = ({ username }) => {

  return (
    <div className="bg-blue-700 flex items-center justify-between text-white p-4 text-xl font-bold tracking-widest">
      <p>เมนู</p>
      {username && (
        <div className="flex items-center space-x-2 px-2 bg-blue-900 text-white border-2 border-sky-200 rounded-xl cursor-pointer">
          <FaUserCircle size={17} className="text-sky-200" />
          <h4>{username}</h4>
        </div>
      )}
    </div>
  );
};

function SidebarMenu({ username }) {
  const [subMenu, setSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setSubmenu(!subMenu);
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="flex flex-col justify-between h-full"
    >
      <List subheader={<HeaderMenu username={username} />}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="หน้าหลัก" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="ที่อยู่อาศัย" />
            {subMenu ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </ListItemButton>
        </ListItem>

        {/* Show Sub-menu */}
        <Collapse in={subMenu} timeout="auto" unmountOnExit sx={{ pl: 4 }}>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/townhouse">
              <ListItemText primary="ทาวน์เฮ้าส์" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/ready-build">
              <ListItemText primary="ที่พร้อมสิ่งปลูกสร้าง" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/semi-detached-house">
              <ListItemText primary="บ้านแฝด" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/condo">
              <ListItemText primary="คอนโดมิเนียม" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/land">
              <ListItemText primary="ที่ดิน" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/single-house">
              <ListItemText primary="บ้านเดี่ยว" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/apartment">
              <ListItemText primary="อพาร์ทเมนท์" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/commercial-buildinge">
              <ListItemText primary="อาคารพาณิชย์" />
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <ListItemText primary="ติดต่อเรา" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Logout */}
      <div className="mx-auto py-4">
        {username ? (
          <Button variant="outlined" color="error" onClick={() => logout(navigate)}>
            logout
          </Button>
        ) : (
          <Button variant="outlined" component={Link} to="/login">
            login
          </Button>
        )}
      </div>
    </Box>
  );
}

export default SidebarMenu;
