import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
import bkp2 from "../assets/bkp2.webp";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // Handle click on current page link
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img 
          src={bkp2} 
          alt="B.K. Polymers Logo" 
          style={{ 
            height: "40px", 
            marginRight: "10px" 
          }} 
        />
        B.K. POLYMERS
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path} 
            onClick={() => handleNavClick(item.path)}
            sx={{ textAlign: "center", color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main, color: "white", boxShadow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            onClick={() => handleNavClick("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              flexGrow: 1
            }}
          >
            <img 
              src={bkp2} 
              alt="B.K. Polymers Logo" 
              style={{ 
                height: "40px", 
                marginRight: "10px" 
              }} 
            />
            B.K. POLYMERS
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    color: "white",
                    mx: 1,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                sx={{
                  ml: 2,
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.dark }
                }}
              >
                Get A Quote
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;