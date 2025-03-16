import React from "react";
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import makeinindia from "../assets/makeinindia.png";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", pt: 6, pb: 4, mt: "auto" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#0d47a1" }}>
              B.K. POLYMERS
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Your trusted partner in premium packaging solutions since 1992. We deliver innovative and reliable 
              packaging solutions with quality, sustainability, and innovation.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ fontSize: 18, mr: 1, color: "#0d47a1" }} />
              <Typography variant="body2">+91 9810079639</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <EmailIcon sx={{ fontSize: 18, mr: 1, color: "#0d47a1" }} />
              <Typography variant="body2">bkpolymers1617@yahoo.com</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Connect with us:</Typography>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/company/bk-polymers" 
                target="_blank"
                sx={{ ml: -1, color: "#0d47a1" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "medium", mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/products" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  Products
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/about" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/capabilities" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  Capabilities
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/clients" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  Clients
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/contact" sx={{ textDecoration: "none", color: "#555", "&:hover": { color: "#0d47a1" } }}>
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>
          
          {/* Address */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "medium", mb: 2 }}>
              Our Location
            </Typography>
            <Box sx={{ display: "flex", mb: 3 }}>
              <LocationOnIcon sx={{ fontSize: 20, mr: 1, color: "#0d47a1", mt: 0.5 }} />
              <Typography variant="body2">
                A12/4 Naraina Industrial Area,<br />
                Phase – 1, New Delhi - 110028<br />
                India
              </Typography>
            </Box>
            <Link
              component="a"
              href="https://www.google.com/maps/dir//A-12%2F3,+behind+PVR,+Industrial+Area+Phase+I,+Block+B,+Naraina+Industrial+Area+Phase+1,+Naraina,+New+Delhi,+Delhi+110028/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d0387c3217071:0xd60aaf280bab2d4?sa=X&ved=1t:707&ictx=111&cshid=1741615268151969"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "#0d47a1", fontWeight: "medium", display: "inline-flex", alignItems: "center" }}
            >
              Get Directions
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              © {new Date().getFullYear()} B.K. Polymers. All rights reserved.
            </Typography>
            <Box 
              component="img" 
              src={makeinindia} 
              alt="Make in India" 
              sx={{ 
                height: 40, 
                width: "auto",
                mr: 2,
                display: { xs: "none", sm: "block" }
              }} 
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box 
              component="img" 
              src={makeinindia} 
              alt="Make in India" 
              sx={{ 
                height: 40, 
                width: "auto",
                mr: 2,
                display: { xs: "block", sm: "none" }
              }} 
            />
            <Link href="#" sx={{ color: "#555", textDecoration: "none", mr: 3 }}>
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
            <Link href="#" sx={{ color: "#555", textDecoration: "none" }}>
              <Typography variant="body2">Terms of Service</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;