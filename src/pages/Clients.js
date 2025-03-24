import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Card, CardContent } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import asianpaints from '../assets/asianpaints.png';
import berger from '../assets/berger.jpg';
import godrej from '../assets/godrej.png';
import lg from '../assets/Lg.jpg';
import samsung from '../assets/samsung.jpeg';
import voltas from '../assets/voltas.jpg';
import honda from "../assets/honda.jpg";
import subros from "../assets/subros.jpeg";
import wybor from "../assets/wybor.jpg";
import { Helmet } from 'react-helmet';

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

function Clients() {
  // Actual clients with imported logos
  const clients = [
    { id: 1, name: "Wybor", logo: wybor },
    { id: 2, name: "Berger Paints", logo: berger },
    { id: 3, name: "Godrej", logo: godrej },
    { id: 4, name: "LG Electronics", logo: lg },
    { id: 5, name: "Samsung", logo: samsung },
    { id: 6, name: "Voltas", logo: voltas },
    { id: 7, name: "Honda", logo: honda },
    { id: 8, name: "Subros", logo: subros }
  ];

  // Updated testimonials with the new content
  const testimonials = [
    {
      id: 1,
      text: "We have been partnering with B.K. Polymers for the past 15 years, and their packaging solutions have consistently ensured the safety of our electronic products. Satinder and his team are committed to quality, and their expertise has significantly improved our product protection during shipping and storage.",
      author: "Mahesh D. Khanna",
      company: "Managing Director, Kanchan Plast Industries"
    },
    {
      id: 2,
      text: "We highly value B.K. Polymers' expertise in customizing packaging solutions to meet our specific needs. Their tailored approach has streamlined our packaging process, minimized waste, and enhanced efficiency thus making a significant impact on our operations.",
      author: "Manoj M.",
      company: "General Manager, Wybor Tech"
    },
    {
      id: 3,
      text: "B.K. Polymers has been our trusted partner for years, consistently delivering high-quality packaging solutions. The quality and consistency of its packaging materials are exceptional. Their attention to detail, durability, and commitment to excellence set them apart in the industry.",
      author: "Sartesh Kumar",
      company: "Plant Head, MarkTech Polymers"
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Clients Header */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          Our Clients
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
          We're proud to serve a diverse range of industries with our premium packaging solutions.
        </Typography>
        <Divider sx={{ mt: 4, mb: 6, width: "100px", mx: "auto", borderColor: "#0d47a1", borderWidth: 2 }} />
      </Box>
      
      {/* Industries We Serve - Reordered as requested */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Industries We Serve
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Electronics
              </Typography>
              <Typography variant="body2">
                Our specialized packaging solutions protect sensitive electronic components from 
                static, moisture, and physical damage during transportation and storage.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Automotive
              </Typography>
              <Typography variant="body2">
                We provide specialized packaging solutions for automotive parts that offer excellent 
                protection against corrosion, scratches, and damage during transit.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Industrial & Manufacturing
              </Typography>
              <Typography variant="body2">
                Our heavy-duty packaging materials are designed to withstand the rigors of industrial 
                environments, protecting components and finished goods throughout the supply chain.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Retail & E-commerce
              </Typography>
              <Typography variant="body2">
                We offer customizable packaging options that enhance product presentation while 
                providing adequate protection for retail and e-commerce applications.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Pharmaceutical
              </Typography>
              <Typography variant="body2">
                Our packaging solutions meet the stringent requirements of the pharmaceutical industry, 
                ensuring product integrity and compliance with regulatory standards.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderLeft: "4px solid #0d47a1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Food & Beverage
              </Typography>
              <Typography variant="body2">
                We provide food-grade packaging materials that maintain product freshness and comply 
                with safety regulations for food contact materials.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      {/* Client Logos - Replaced with Scrolling Section */}
      <ScrollingClientsSection clients={clients} />
      
      {/* Testimonials - Updated with bold formatting */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Client Testimonials
        </Typography>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1, position: "relative", pt: 4 }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      position: "absolute", 
                      top: 16, 
                      left: 16, 
                      fontSize: 32, 
                      color: "#e0e0e0",
                      transform: "scaleX(-1)"
                    }} 
                  />
                  <Typography variant="body1" sx={{ pl: 2, mb: 3, fontStyle: "italic", fontWeight: "bold" }}>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Call to Action */}
      <Box 
        sx={{ 
          textAlign: "center", 
          p: 5, 
          mb: 6, 
          bgcolor: "#0d47a1", 
          color: "white",
          borderRadius: 2
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Join Our Impressive Client List
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: "800px", mx: "auto" }}>
          Experience the quality, reliability, and excellent service that has made B.K. Polymers the 
          preferred packaging partner for leading companies across industries.
        </Typography>
        <Box 
          component="a" 
          href="/contact"
          sx={{ 
            display: "inline-block", 
            px: 4, 
            py: 1.5, 
            bgcolor: "white", 
            color: "#0d47a1", 
            borderRadius: 1,
            fontWeight: "bold",
            textDecoration: "none",
            "&:hover": {
              bgcolor: "#f5f5f5"
            }
          }}
        >
          Contact Us Today
        </Box>
      </Box>
    </Container>
  );
}

// Scrolling Clients Section Component
const ScrollingClientsSection = ({ clients }) => {
  const scrollRef = useRef(null);
  const [cloneCount, setCloneCount] = useState(3); // Number of times to clone the list
  
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
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
        Trusted By Industry Leaders
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
              key={`${client.id}-${index}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 2,
                height: 120,
                width: 160,
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 1,
                p: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <Box 
                component="img" 
                src={client.logo} 
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

export default Clients;