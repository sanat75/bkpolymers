import React from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Card, CardContent } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Clients() {
  // Example clients - replace with actual client list when available
  const clients = [
    { id: 1, name: "Pharmaceutical Company", logo: "/api/placeholder/150/80" },
    { id: 2, name: "Food Processing Industry", logo: "/api/placeholder/150/80" },
    { id: 3, name: "Electronics Manufacturer", logo: "/api/placeholder/150/80" },
    { id: 4, name: "Retail Chain", logo: "/api/placeholder/150/80" },
    { id: 5, name: "Chemical Industry", logo: "/api/placeholder/150/80" },
    { id: 6, name: "Textile Company", logo: "/api/placeholder/150/80" },
    { id: 7, name: "Automotive Parts", logo: "/api/placeholder/150/80" },
    { id: 8, name: "Construction Materials", logo: "/api/placeholder/150/80" }
  ];

  // Example testimonials
  const testimonials = [
    {
      id: 1,
      text: "B.K. Polymers has been our trusted packaging partner for over 5 years. Their HDPE packaging solutions have significantly improved our product protection during shipping.",
      author: "Operations Director",
      company: "Leading Electronics Manufacturer"
    },
    {
      id: 2,
      text: "The quality and consistency of B.K. Polymers' packaging materials are exceptional. Their customer service team is always responsive and helpful.",
      author: "Procurement Manager",
      company: "National Food Processing Company"
    },
    {
      id: 3,
      text: "We appreciate B.K. Polymers' ability to customize packaging solutions according to our specific requirements. This has helped us optimize our packaging process.",
      author: "Supply Chain Head",
      company: "Pharmaceutical Enterprise"
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
      
      {/* Industries We Serve */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Industries We Serve
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
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
                Automotive
              </Typography>
              <Typography variant="body2">
                We provide specialized packaging solutions for automotive parts that offer excellent 
                protection against corrosion, scratches, and damage during transit.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      {/* Client Logos */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Trusted By Industry Leaders
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {clients.map((client) => (
            <Grid item key={client.id} xs={6} sm={3} md={3}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  textAlign: "center", 
                  height: "120px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "scale(1.05)"
                  }
                }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  style={{ maxWidth: "100%", maxHeight: "80px" }} 
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Testimonials */}
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
                  <Typography variant="body1" sx={{ pl: 2, mb: 3, fontStyle: "italic" }}>
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

export default Clients;