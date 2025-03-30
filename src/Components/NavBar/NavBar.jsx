import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Shop", path: "/" },
    { label: "Cart", path: "/cart/home" },
    // { label: "Services", path: "/services" },
    // { label: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      {/* Navbar for Desktop */}
      <AppBar style={{ boxShadow: "none" }} className="navbar">
        <Toolbar className="toolbar">
          <Typography variant="h6" className="logo">
            <AddBusinessIcon /> THE SHOP-SPHERE
          </Typography>
          <div className="nav-links">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                className="nav-button"
              >
                {item.label}
              </Button>
            ))}
          </div>
          <IconButton
            edge="end"
            className="menu-icon"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <div className="drawer">
          <IconButton className="close-btn" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
          <List className="nav_list">
            {navItems.map((item) => (
              <ListItem
                className="list_item"
                button
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
