import { Helmet } from 'react-helmet';
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecyclingIcon from "@mui/icons-material/Recycling";
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";
import asianpaints from '../assets/asianpaints.png';
import berger from '../assets/berger.jpg';
import godrej from '../assets/godrej.png';
import lg from '../assets/Lg.jpg';
import samsung from '../assets/samsung.jpeg';
import voltas from '../assets/voltas.jpg';
import bg2 from "../assets/bg2.webp";
import honda from "../assets/honda.jpg";
import subros from "../assets/subros.jpeg";
import wybor from "../assets/wybor.jpg";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>BK Polymers - High Quality Polymer Products</title>
        <meta name="description" content="BK Polymers offers premium polymer products for industrial and commercial applications." />
        <meta name="keywords" content="polymers, industrial polymers, plastic manufacturing" />
        <link rel="canonical" href="https://www.bkpolymers.in" />
      </Helmet>
      {/* Your component content */}
    </>
  );
}

// Import client logos



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
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Button
    component={Link}
    to="/about"
    variant="contained"
    sx={{
      bgcolor: "#0d47a1",
      "&:hover": { bgcolor: "#083378" },
      fontSize: "1.1rem"
    }}
  >
    Learn More About Us
  </Button>
</Grid>

            </Grid>
          </Grid>
        </Box>

        {/* Clients Section */}
        <ScrollingClientsSection />
        
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
                sx={{ 
                  bgcolor: "white", 
                  color: "#0d47a1",
                  "&:hover": { bgcolor: "#e0e0e0" },
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem"   // Larger font on the button
                }}
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

// Define the ScrollingClientsSection component
const ScrollingClientsSection = () => {
  const scrollRef = useRef(null);
  const [cloneCount, setCloneCount] = useState(3); // Number of times to clone the list
  
  // Client logos - using the imported images
  const clients = [
    { name: "Honda", src: honda },
    { name: "Subros", src: subros },
    { name: "Berger", src: berger },
    { name: "Godrej", src: godrej },
    { name: "LG", src: lg },
    { name: "Samsung", src: samsung },
    { name: "Voltas", src: voltas },
    { name: "Wybor", src: wybor },
  ];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    
    // Calculate total width of a single set of items
    const calculateTotalWidth = () => {
      if (!scrollContainer || !scrollContainer.firstChild) return 0;
      const itemCount = clients.length;
      const itemWidth = scrollContainer.firstChild.offsetWidth;
      return itemWidth * itemCount;
    };
    
    let totalWidth = 0;
    let position = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      // Initialize total width if needed
      if (totalWidth === 0) {
        totalWidth = calculateTotalWidth();
      }
      
      position -= 1; // Speed of scrolling (smaller = slower)
      
      // When we've scrolled the width of the first set of items, reset position to start
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(scroll);
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [clients]);
  
  // Create multiple clones of the clients array
  const repeatedClients = useMemo(() => {
    let result = [];
    for (let i = 0; i < cloneCount; i++) {
      result = [...result, ...clients];
    }
    return result;
  }, [clients, cloneCount]);
  
  return (
    <Box sx={{ mb: 6, overflow: 'hidden' }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 3,
          textAlign: "center",
          fontWeight: "medium",
          color: "#0d47a1",
          fontSize: "2.3rem"
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
          fontSize: "1.2rem",
          lineHeight: 1.6
        }}
      >
        We are proud to serve industry leaders who trust us for their premium packaging solutions.
      </Typography>
      
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 'fit-content',
          }}
        >
          {repeatedClients.map((client, index) => (
            <Box
              key={`${client.name}-${index}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 2,
                height: 120,
                width: 150,
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 1,
                p: 2
              }}
            >
              <Box 
                component="img" 
                src={client.src} 
                alt={client.name}
                sx={{ 
                  maxWidth: '100%', 
                  maxHeight: '80px', 
                  objectFit: 'contain' 
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;