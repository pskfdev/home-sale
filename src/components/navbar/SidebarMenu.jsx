import React, { useState } from "react";

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

function SidebarMenu({ toggleDrawer }) {
  const [subMenu, setSubmenu] = useState(false);

  const handleClick = () => {
    setSubmenu(!subMenu);
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation" /* onClick={toggleDrawer(false)} */
    >
      <List
        subheader={<ListSubheader component="div">List menu</ListSubheader>}
      >
        <ListItem disablePadding>
          <ListItemButton>
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
        <Collapse in={subMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="sub-menu" />
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="ติดต่อเรา" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SidebarMenu;
