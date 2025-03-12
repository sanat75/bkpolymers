import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Divider } from "@mui/material";

function Products() {
  const products = [
    {
      id: 1,
      title: "LDPE-Based Packaging",
      description: "Our LDPE rolls and bags are known for their flexibility, transparency, and strength. Widely used in various industries due to their versatility.",
      applications: [
        "Industrial Wrapping for machinery protection",
        "Durable and flexible garbage bags",
        "Food packaging and hospital supplies"
      ],
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "LLDPE-Based Packaging",
      description: "LLDPE rolls and bags are prized for their superior strength and puncture resistance. Suitable for applications where durability is essential.",
      applications: [
        "Stretch Wrap for pallet wrapping",
        "Heavy-Duty Bags for carrying heavy items",
        "Protective packaging for shipping"
      ],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "HDPE-Based Packaging",
      description: "Our HDPE Rolls are engineered to provide exceptional strength and durability for a wide range of industrial and commercial applications.",
      applications: [
        "Construction Industry vapor barriers",
        "Retail and Consumer Goods packaging",
        "Protective coverings for building materials"
      ],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Products Header */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          Our Products
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
          Engineered for excellence, our polymer packaging solutions combine innovation with reliability.
        </Typography>
        <Divider sx={{ mt: 4, mb: 6, width: "100px", mx: "auto", borderColor: "#0d47a1", borderWidth: 2 }} />
      </Box>
      
      {/* Products Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: "#0d47a1", fontWeight: "medium" }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: "medium" }}>
                  Applications:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                  {product.applications.map((app, index) => (
                    <Typography component="li" variant="body2" key={index} sx={{ mb: 0.5 }}>
                      {app}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Capabilities Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Our Capabilities
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: "1px solid #e0e0e0", height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Advanced Manufacturing
              </Typography>
              <Typography variant="body2">
                Our facilities use cutting-edge technology and the latest machinery to ensure precision, 
                efficiency, and high production standards. We utilize automated systems and real-time monitoring 
                to enhance product quality and operational efficiency.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: "1px solid #e0e0e0", height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Rigorous Quality Control
              </Typography>
              <Typography variant="body2">
                We ensure top standards with rigorous quality control at every stage—from raw material 
                inspection to final product testing. We follow industry certifications and standards, 
                including ISO, to ensure product reliability and safety.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: "1px solid #e0e0e0", height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Efficient Logistics and Distribution
              </Typography>
              <Typography variant="body2">
                Our well-established logistics network ensures timely delivery of products. We prioritize 
                on-time delivery and maintain efficient processes to meet deadlines and ensure customer satisfaction.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: "1px solid #e0e0e0", height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#0d47a1" }}>
                Exceptional Customer Support
              </Typography>
              <Typography variant="body2">
                Our dedicated customer support team addresses client needs and provides solutions. We offer 
                comprehensive after-sales support, including technical assistance and problem resolution, 
                to ensure ongoing customer satisfaction.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;