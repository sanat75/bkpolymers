import React from "react";
import { Box, Typography, Container, Grid, Paper, Divider } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactoryIcon from "@mui/icons-material/Factory";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BuildIcon from "@mui/icons-material/Build";

function Capabilities() {
  const capabilities = [
    {
      id: 1,
      title: "Advanced Manufacturing",
      icon: <FactoryIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
      icon: <EngineeringIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
      icon: <VerifiedIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
      icon: <LocalShippingIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
      icon: <SupportAgentIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
      icon: <BuildIcon sx={{ fontSize: 48, color: "#0d47a1" }} />,
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
    <Container maxWidth="lg">
      {/* Capabilities Header */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          Our Capabilities
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
          With advanced technology and decades of experience, we deliver superior packaging solutions through our comprehensive capabilities.
        </Typography>
        <Divider sx={{ mt: 4, mb: 6, width: "100px", mx: "auto", borderColor: "#0d47a1", borderWidth: 2 }} />
      </Box>
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: 6, 
          px: 4, 
          mb: 6, 
          bgcolor: "#f5f5f5", 
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          textAlign: "center"
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium" }}>
          End-to-End Packaging Solutions
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "900px", mx: "auto" }}>
          At B.K. Polymers, we pride ourselves on our comprehensive capabilities that enable us to provide end-to-end 
          packaging solutions. From initial consultation and design to manufacturing, quality control, and delivery, 
          we handle every aspect of your packaging needs with precision and care.
        </Typography>
      </Box>
      
      {/* Capabilities Cards */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {capabilities.map((capability) => (
          <Grid item xs={12} md={6} key={capability.id}>
            <Paper elevation={2} sx={{ p: 4, height: "100%", transition: "transform 0.3s", "&:hover": { transform: "translateY(-5px)" } }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", mb: 3 }}>
                {capability.icon}
                <Typography variant="h5" component="h3" sx={{ mt: 2, fontWeight: "medium", color: "#0d47a1" }}>
                  {capability.title}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                {capability.description}
              </Typography>
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Capabilities;