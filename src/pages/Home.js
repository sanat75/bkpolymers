import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecyclingIcon from "@mui/icons-material/Recycling";
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";

// Import client logos
import asianpaints from '../assets/asianpaints.png';
import berger from '../assets/berger.jpg';
import godrej from '../assets/godrej.png';
import lg from '../assets/Lg.jpg';
import samsung from '../assets/samsung.jpeg';
import voltas from '../assets/voltas.jpg';
import bg2 from "../assets/bg2.webp";

function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          mb: 6,
          position: "relative",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            letterSpacing: "2px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          B.K. POLYMERS
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontSize: { xs: "1.25rem", md: "1.75rem" },
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.4,
            fontWeight: 300,
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            px: 3,
          }}
        >
          Your Trusted Partner in Premium Packaging Solutions Since 1992
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#0d47a1",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            "&:hover": { bgcolor: "#1565c0", transform: "scale(1.05)" },
            transition: "all 0.3s ease",
            borderRadius: 2,
            alignSelf: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
          component={Link}
          to="/contact"
        >
          Get In Touch
        </Button>
      </Box>
      
      {/* About Us Section */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{
                  mb: 3,
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: "2.3rem",   // Slightly larger than default h4
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 2,
                  fontSize: "1.25rem",  // Increase body text size
                  lineHeight: 1.6       // Improves readability
                }}
              >
                Since 1992, B.K. Polymers has been a leading name in premium packaging solutions. 
                With a strong commitment to quality, innovation, and customer satisfaction, 
                we specialize in LDPE, LLDPE, and HDPE-based packaging rolls and poly bags, 
                catering to diverse industries. Our state-of-the-art manufacturing, rigorous 
                quality control, and efficient logistics ensure top-tier products that meet 
                global standards. Trusted by industry leaders, we continue to push the 
                boundaries of excellence in the packaging sector.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                sx={{
                  bgcolor: "#0d47a1",
                  "&:hover": { bgcolor: "#083378" },
                  fontSize: "1.1rem"  // Optional: slightly larger button text
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Clients Section */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 3, 
              textAlign: "center", 
              fontWeight: "medium", 
              color: "#0d47a1",
              fontSize: "2.3rem"      // Larger heading for Clients
            }}
          >
            Our Trusted Clients
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: "center", 
              mb: 4, 
              maxWidth: "800px", 
              mx: "auto",
              fontSize: "1.2rem",     // Increased paragraph font
              lineHeight: 1.6
            }}
          >
            We are proud to serve industry leaders who trust us for their premium packaging solutions.
          </Typography>
          
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Client Logos */}
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={asianpaints} alt="Asian Paints" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={berger} alt="Berger" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={godrej} alt="Godrej" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={lg} alt="LG" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={samsung} alt="Samsung" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4} md={2} sx={{ textAlign: "center" }}>
              <Paper elevation={2} sx={{ p: 2, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={voltas} alt="Voltas" sx={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }} />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* Mission & Values Combined Section */}
        <Box sx={{ mb: 6, bgcolor: "#f5f5f5", p: 4, borderRadius: 2 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 3, 
              textAlign: "center", 
              fontWeight: "medium", 
              color: "#0d47a1",
              fontSize: "2.3rem"    // Larger heading
            }}
          >
            Our Mission & Values
          </Typography>
          
          {/* Mission Statement */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.2rem",   // Larger body text
                lineHeight: 1.6,
                maxWidth: "800px", 
                mx: "auto" 
              }}
            >
              To provide premium packaging solutions that meet and exceed customer expectations,
              ensuring the highest quality, sustainability, and innovation standards.
            </Typography>
          </Box>
          
          {/* Core Values */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <VerifiedIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ fontSize: "1.3rem" }} // Slightly larger subheading
                  >
                    Quality
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
                  We are committed to providing the highest quality products through rigorous testing 
                  and quality control processes.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AutorenewIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ fontSize: "1.3rem" }}
                  >
                    Innovation
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
                  We constantly evolve our processes and products to stay at the forefront of packaging 
                  technology.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <RecyclingIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ fontSize: "1.3rem" }}
                  >
                    Sustainability
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
                  We prioritize environmentally responsible practices throughout our operations.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* Contact Section */}
        <Box sx={{ mb: 6, bgcolor: "#0d47a1", color: "white", p: 4, borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <BusinessIcon sx={{ mr: 1, fontSize: 30 }} />
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: "1.75rem"    // Larger subheading for contact
                  }}
                >
                  Get In Touch
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                <strong>Address:</strong> A12/4 Naraina Industrial Area, Phase – 1, New Delhi - 110028
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                <strong>Satinder Singh</strong> - Founder & Chairperson
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                Phone: +91 9810079639
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                <strong>Chandeep Singh</strong> - Director
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                Phone: +91 9810369639
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                <strong>Harshdeep Singh</strong> - Director
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2, 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
              >
                Phone: +1 (647) 819-6399
              </Typography>



              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: "1.2rem", 
                  lineHeight: 1.6 
                }}
          
              >
                Email: bkpolymers1617@yahoo.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Button 
                component={Link} 
                to="/contact" 
                variant="contained" 
                // sx={{ 
                //   bgcolor: "white", 
                //   color: "#0d47a1",
                //   "&:hover": { bgcolor: "#e0e0e0" },
                //   px: 4,
                //   py: 1.5,
                //   fontSize: "1.2rem"   // Larger font on the
                //   "&:hover": { bgcolor: "#e0e0e0" },
                //   px: 4,
                //   py: 1.5,
                //   fontSize: "1.2rem"   // Larger font on the button
                // }}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;