import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Card, CardContent, useMediaQuery, Button, Collapse } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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

// Industry Card Component with expand/collapse functionality
const IndustryCard = ({ industry }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Paper 
      elevation={2} 
      sx={{ 
        height: "100%",
        borderRadius: "8px",
        background: "linear-gradient(145deg, #ffffff, #f5f9ff)",
        borderLeft: "4px solid #0d47a1",
        boxShadow: "0 4px 12px rgba(13, 71, 161, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 20px rgba(13, 71, 161, 0.15)"
        },
        overflow: "hidden"
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#0d47a1", 
            fontSize: isMobile ? "1.25rem" : "1.15rem",
            fontWeight: 600,
            mb: 1
          }}
        >
          {industry.title}
        </Typography>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: isMobile ? "1rem" : "0.875rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
              mb: 2
            }}
          >
            {industry.description}
          </Typography>
        </Collapse>
        
        <Button 
          onClick={() => setExpanded(!expanded)}
          size="small"
          endIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          sx={{ 
            color: "#1565c0",
            fontSize: "0.875rem",
            p: 0,
            "&:hover": {
              background: "transparent",
              color: "#0d47a1"
            }
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Box>
    </Paper>
  );
};

function Clients() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Define consistent spacing values
  const spacing = {
    section: isMobile ? 6 : 7,       // Space between major sections
    headingToContent: isMobile ? 3 : 3.5, // Space between heading and its content
    contentToContent: isMobile ? 4 : 5, // Space between content blocks within a section
  };
  
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

  // Industries data
  const industriesData = [
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
      py: spacing.section / 2, // Add consistent padding to top and bottom of container
    }}>
      {/* Clients Header */}
      <Box sx={{ 
        textAlign: "center", 
        mb: spacing.section,
      }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          sx={{ fontWeight: "bold", mb: spacing.headingToContent / 1.5 }} 
        >
          Our Clients
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          sx={{ 
            color: "#555", 
            maxWidth: "800px", 
            mx: "auto", 
            mb: spacing.headingToContent / 1.5,
          }}
        >
          We're proud to serve a diverse range of industries with our premium packaging solutions.
        </Typography>
        <Divider sx={{ 
          width: "80px", 
          mx: "auto", 
          borderColor: "#0d47a1", 
          borderWidth: 3 
        }} />
      </Box>
      
      {/* Industries We Serve - Consistent spacing */}
      <Box sx={{ mb: spacing.section }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            textAlign: "center", 
            mb: spacing.headingToContent, 
            fontWeight: "medium" 
          }}
        >
          Industries We Serve
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: spacing.contentToContent }}>
          {industriesData.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <IndustryCard industry={industry} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Client Logos - With consistent spacing */}
      <Box sx={{ mb: spacing.section }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            textAlign: "center", 
            mb: spacing.headingToContent, 
            fontWeight: "medium" 
          }}
        >
          Trusted By Industry Leaders
        </Typography>
        
        {/* Scrolling clients component */}
        <ScrollingClientsDisplay clients={clients} isMobile={isMobile} />
      </Box>
      
      {/* Testimonials - With consistent spacing */}
      <Box sx={{ mb: spacing.section }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            textAlign: "center", 
            mb: spacing.headingToContent, 
            fontWeight: "medium" 
          }}
        >
          Client Testimonials
        </Typography>
        
        <Grid container spacing={3}>
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
                  pt: 4, 
                  px: 3, 
                  pb: 3 
                }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      position: "absolute", 
                      top: 16, 
                      left: 16, 
                      fontSize: isMobile ? 40 : 32, 
                      color: "#e0e0e0",
                      transform: "scaleX(-1)"
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      pl: 2, 
                      mb: 3, 
                      fontStyle: "italic", 
                      fontWeight: "medium",
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
                        mb: 0.5
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
      
      {/* Call to Action - With consistent spacing */}
      <Box 
        sx={{ 
          textAlign: "center", 
          p: spacing.contentToContent, 
          mb: spacing.section / 2, // Reduced bottom margin for last element
          background: "linear-gradient(135deg, #0d47a1, #1565c0)", 
          color: "white",
          borderRadius: "8px",
          boxShadow: "0 6px 20px rgba(13, 71, 161, 0.25)"
        }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ mb: spacing.headingToContent / 2 }}
        >
          Join Our Impressive Client List
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: spacing.headingToContent, 
            maxWidth: "800px", 
            mx: "auto",
            fontSize: isMobile ? "1.05rem" : "1rem",
            lineHeight: 1.6,
            px: 2
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
            px: 4, 
            py: 1.5, 
            bgcolor: "white", 
            color: "#0d47a1", 
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: isMobile ? "1.1rem" : "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#f5f5f5",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
            }
          }}
        >
          Contact Us Today
        </Box>
      </Box>
    </Container>
  );
}

// Improved Scrolling Clients Component with consistent spacing
const ScrollingClientsDisplay = ({ clients, isMobile }) => {
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
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      py: 3  
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
              mx: 2.5, 
              height: 120,
              width: 160,
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              p: 2,
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
                maxHeight: '80px', 
                objectFit: 'contain' 
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;