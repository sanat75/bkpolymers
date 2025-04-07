import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, useMediaQuery, useTheme, Collapse, IconButton } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactoryIcon from "@mui/icons-material/Factory";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BuildIcon from "@mui/icons-material/Build";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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

// Mobile-friendly capability card component with collapsible details
const CapabilityCard = ({ capability }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: { xs: 3, sm: 4 }, 
        height: "100%", 
        transition: "transform 0.3s", 
        "&:hover": { 
          transform: isMobile ? "none" : "translateY(-5px)",
          boxShadow: isMobile ? 2 : 4
        } 
      }}
    >
      <Box sx={{ 
        display: "flex", 
        flexDirection: isMobile ? "row" : "column", 
        alignItems: isMobile ? "flex-start" : "center", 
        textAlign: isMobile ? "left" : "center", 
        mb: 2
      }}>
        {React.cloneElement(capability.icon, { 
          sx: { 
            fontSize: isMobile ? 36 : 48, 
            color: "#0d47a1",
            mr: isMobile ? 2 : 0
          } 
        })}
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          component="h3" 
          sx={{ 
            mt: isMobile ? 0 : 2, 
            fontWeight: "medium", 
            color: "#0d47a1" 
          }}
        >
          {capability.title}
        </Typography>
      </Box>
      
      <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
        {capability.description}
      </Typography>
      
      {isMobile ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <IconButton 
              onClick={handleToggle} 
              size="small" 
              sx={{ 
                bgcolor: "rgba(13, 71, 161, 0.1)", 
                "&:hover": { bgcolor: "rgba(13, 71, 161, 0.2)" } 
              }}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={expanded}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "medium", mb: 1 }}>
                Key Features:
              </Typography>
              <ul style={{ paddingLeft: "20px", marginTop: "8px", marginBottom: "8px" }}>
                {capability.details.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Collapse>
        </>
      ) : (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "medium", mb: 1 }}>
            Key Features:
          </Typography>
          <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
            {capability.details.map((detail, index) => (
              <li key={index}>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  {detail}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Paper>
  );
};

function Capabilities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const capabilities = [
    {
      id: 1,
      title: "Advanced Manufacturing",
      icon: <FactoryIcon />,
      description: "Our facilities use cutting-edge technology and the latest machinery to ensure precision, efficiency, and high production standards.",
      details: [
        "State-of-the-art extrusion and conversion equipment",
        "Automated quality monitoring systems",
        "Capacity to handle large volume orders",
        "Flexible manufacturing setup for customized requirements"
      ]
    },
    {
      id: 2,
      title: "Engineering Excellence",
      icon: <EngineeringIcon />,
      description: "Our engineering team develops innovative solutions tailored to your specific packaging requirements.",
      details: [
        "Custom formulation development",
        "Technical consultation for material selection",
        "Product development and prototyping",
        "Process optimization for efficiency"
      ]
    },
    {
      id: 3,
      title: "Rigorous Quality Control",
      icon: <VerifiedIcon />,
      description: "We ensure top standards with rigorous quality control at every stage—from raw material inspection to final product testing.",
      details: [
        "ISO-certified quality management system",
        "Regular testing for tensile strength and puncture resistance",
        "Thickness consistency monitoring",
        "Regulatory compliance verification"
      ]
    },
    {
      id: 4,
      title: "Efficient Logistics",
      icon: <LocalShippingIcon />,
      description: "Our well-established logistics network ensures timely delivery of products to meet your production schedules.",
      details: [
        "Nationwide distribution network",
        "On-time delivery commitment",
        "Inventory management services",
        "Flexible delivery scheduling"
      ]
    },
    {
      id: 5,
      title: "Customer Support",
      icon: <SupportAgentIcon />,
      description: "Our dedicated customer support team addresses client needs and provides solutions promptly.",
      details: [
        "Dedicated account representatives",
        "Technical support for product utilization",
        "Post-sale assistance",
        "Regular client consultations for continuous improvement"
      ]
    },
    {
      id: 6,
      title: "Technological Edge",
      icon: <BuildIcon />,
      description: "We continuously invest in cutting-edge technology and innovation to deliver superior packaging solutions.",
      details: [
        "State-of-the-art machinery for precision manufacturing",
        "Modern extruders and converting machines",
        "Advanced quality testing equipment",
        "Ongoing research and development initiatives"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      {/* Capabilities Header */}
      <Box sx={{ 
        textAlign: "center", 
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 0 }
      }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          sx={{ 
            fontWeight: "bold", 
            mb: { xs: 1.5, sm: 2 },
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Our Capabilities
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          sx={{ 
            color: "#555", 
            maxWidth: "800px", 
            mx: "auto",
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
          }}
        >
          With advanced technology and decades of experience, we deliver superior packaging solutions.
        </Typography>
        <Divider 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            mb: { xs: 4, sm: 6 }, 
            width: "100px", 
            mx: "auto", 
            borderColor: "#0d47a1", 
            borderWidth: 2 
          }} 
        />
      </Box>
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: { xs: 4, sm: 6 }, 
          px: { xs: 3, sm: 4 }, 
          mb: { xs: 4, sm: 6 }, 
          bgcolor: "#f5f5f5", 
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          textAlign: "center"
        }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            mb: { xs: 2, sm: 3 }, 
            fontWeight: "medium" 
          }}
        >
          End-to-End Packaging Solutions
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: "900px", 
            mx: "auto",
            fontSize: { xs: '0.95rem', sm: '1rem' }
          }}
        >
          At B.K. Polymers, we pride ourselves on our comprehensive capabilities that enable us to provide end-to-end 
          packaging solutions. From initial consultation and design to manufacturing, quality control, and delivery, 
          we handle every aspect of your packaging needs with precision and care.
        </Typography>
      </Box>
      
      {/* Capabilities Cards */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 6, sm: 8 } }}>
        {capabilities.map((capability) => (
          <Grid item xs={12} sm={6} key={capability.id} sx={{ mb: { xs: 1, sm: 0 } }}>
            <CapabilityCard capability={capability} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Capabilities;