import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Card, CardContent, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
    <Container maxWidth="lg" sx={{ 
      px: isMobile ? 3 : 4,
      // Add more vertical spacing throughout the page on mobile
      "& > .MuiBox-root": {
        mb: isMobile ? 10 : 8
      }
    }}>
      {/* Clients Header */}
      <Box sx={{ 
        textAlign: "center", 
        py: isMobile ? 8 : 8, 
        mt: isMobile ? 5 : 0 
      }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          sx={{ fontWeight: "bold", mb: 4 }} 
        >
          Our Clients
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          sx={{ 
            color: "#555", 
            maxWidth: "800px", 
            mx: "auto", 
            px: isMobile ? 3 : 2 
          }}
        >
          We're proud to serve a diverse range of industries with our premium packaging solutions.
        </Typography>
        <Divider sx={{ 
          mt: isMobile ? 6 : 5,
          mb: isMobile ? 7 : 6,
          width: "80px", 
          mx: "auto", 
          borderColor: "#0d47a1", 
          borderWidth: 3 
        }} />
      </Box>
      
      {/* Industries We Serve - With improved spacing */}
      <Box sx={{ mb: isMobile ? 12 : 10 }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            textAlign: "center", 
            mb: isMobile ? 6 : 5, 
            fontWeight: "medium" 
          }}
        >
          Industries We Serve
        </Typography>
        
        <Grid container spacing={isMobile ? 5 : 3} sx={{ mb: isMobile ? 6 : 4 }}>
          {[
            {
              title: "Electronics",
              description: "Our specialized packaging solutions protect sensitive electronic components from static, moisture, and physical damage during transportation and storage."
            },
            {
              title: "Automotive",
              description: "We provide specialized packaging solutions for automotive parts that offer excellent protection against corrosion, scratches, and damage during transit."
            },
            {
              title: "Industrial & Manufacturing",
              description: "Our heavy-duty packaging materials are designed to withstand the rigors of industrial environments, protecting components and finished goods throughout the supply chain."
            },
            {
              title: "Retail & E-commerce",
              description: "We offer customizable packaging options that enhance product presentation while providing adequate protection for retail and e-commerce applications."
            },
            {
              title: "Pharmaceutical",
              description: "Our packaging solutions meet the stringent requirements of the pharmaceutical industry, ensuring product integrity and compliance with regulatory standards."
            },
            {
              title: "Food & Beverage",
              description: "We provide food-grade packaging materials that maintain product freshness and comply with safety regulations for food contact materials."
            }
          ].map((industry, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: isMobile ? 5 : 3, 
                  height: "100%", 
                  borderLeft: "4px solid #0d47a1",
                  borderRadius: "4px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: "#0d47a1", 
                    fontSize: isMobile ? "1.25rem" : "1.15rem",
                    mb: isMobile ? 3 : 2
                  }}
                >
                  {industry.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: isMobile ? "1rem" : "0.875rem",
                    lineHeight: 1.6
                  }}
                >
                  {industry.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Client Logos - Improved Scrolling Section */}
      <ScrollingClientsSection clients={clients} isMobile={isMobile} />
      
      {/* Testimonials - Updated with improved spacing */}
      <Box sx={{ mb: isMobile ? 12 : 8 }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            textAlign: "center", 
            mb: isMobile ? 6 : 4, 
            fontWeight: "medium" 
          }}
        >
          Client Testimonials
        </Typography>
        
        <Grid container spacing={isMobile ? 6 : 4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card 
                sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                  }
                }}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  position: "relative", 
                  pt: isMobile ? 6 : 5, 
                  px: isMobile ? 5 : 3, 
                  pb: isMobile ? 5 : 4 
                }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      position: "absolute", 
                      top: 16, 
                      left: 16, 
                      fontSize: isMobile ? 42 : 32, 
                      color: "#e0e0e0",
                      transform: "scaleX(-1)"
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      pl: 2, 
                      mb: isMobile ? 5 : 4, 
                      fontStyle: "italic", 
                      fontWeight: "bold",
                      fontSize: isMobile ? "1.05rem" : "0.95rem",
                      lineHeight: 1.7
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: "medium",
                        fontSize: isMobile ? "1.1rem" : "1rem",
                        mb: isMobile ? 1 : 0.5
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: isMobile ? "0.95rem" : "0.875rem" }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Call to Action - With improved spacing */}
      <Box 
        sx={{ 
          textAlign: "center", 
          p: isMobile ? 7 : 5, 
          mb: isMobile ? 10 : 8, 
          bgcolor: "#0d47a1", 
          color: "white",
          borderRadius: "8px"
        }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ mb: isMobile ? 4 : 3 }}
        >
          Join Our Impressive Client List
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: isMobile ? 5 : 4, 
            maxWidth: "800px", 
            mx: "auto",
            fontSize: isMobile ? "1.05rem" : "1rem",
            lineHeight: 1.6,
            px: isMobile ? 3 : 2
          }}
        >
          Experience the quality, reliability, and excellent service that has made B.K. Polymers the 
          preferred packaging partner for leading companies across industries.
        </Typography>
        <Box 
          component="a" 
          href="/contact"
          sx={{ 
            display: "inline-block", 
            px: isMobile ? 5 : 4, 
            py: isMobile ? 2.5 : 1.5, 
            bgcolor: "white", 
            color: "#0d47a1", 
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: isMobile ? "1.1rem" : "1rem",
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

// Improved Scrolling Clients Section Component
const ScrollingClientsSection = ({ clients, isMobile }) => {
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
      
      position -= 0.5; // Slowed down scrolling speed for better visibility
      
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
    <Box sx={{ 
      mb: isMobile ? 12 : 8, 
      mt: isMobile ? 6 : 2, 
      py: isMobile ? 4 : 2  
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        component="h2" 
        sx={{ 
          textAlign: "center", 
          mb: isMobile ? 6 : 4, 
          fontWeight: "medium" 
        }}
      >
        Trusted By Industry Leaders
      </Typography>
      
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden',
        my: isMobile ? 5 : 2, 
        py: isMobile ? 4 : 2  
      }}>
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
                mx: isMobile ? 4 : 2, 
                height: isMobile ? 120 : 120,
                width: isMobile ? 160 : 160,
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                p: isMobile ? 4 : 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Reduced scale effect
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box 
                component="img" 
                src={client.logo} 
                alt={client.name}
                sx={{ 
                  maxWidth: '100%', 
                  maxHeight: isMobile ? '70px' : '80px', 
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