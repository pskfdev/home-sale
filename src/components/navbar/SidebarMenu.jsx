import React, { useState } from "react";
import { Link } from "react-router-dom";

//Components
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function SidebarMenu() {
  const [subMenu, setSubmenu] = useState(false);

  const handleClick = () => {
    setSubmenu(!subMenu);
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List
        subheader={<div className="bg-blue-700 text-white p-4 text-xl font-bold tracking-widest">เมนู</div>}
      >
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
    </Box>
  );
}

export default SidebarMenu;
