import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Divider } from "@mui/material";
import ldpe from "../assets/ldpe.avif";
import lldpe from "../assets/lldpe.webp";
import hdpe from "../assets/hdpe.jpg";
import ldpegranuels from "../assets/ldpegranuels.jpg";
import lldpegranuels from "../assets/lldpegranuels.jpg";
import hdpegranuels from "../assets/hdpegranuels.jpg";
import flameretardantpolybags from "../assets/flameretardantpolybags.jpg";
import heatshrinkroll from "../assets/heatshrinkroll.jpg";

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
      image: ldpe
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
      image: lldpe
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
      image: hdpe
    },
    {
      id: 4,
      title: "Heat Shrink Roll",
      description: "Our heat-shrinking rolls provide a strong, protective seal around products when heated, ensuring secure packaging and durability. Ideal for safeguarding goods during storage and transportation.",
      applications: [
        "Tamper-proof packaging for bottles and containers",
        "Secure bundling of electronics and consumer goods",
        "Protective wrapping for industrial and automotive parts"
      ],
      image: heatshrinkroll
    },
    {
      id: 5,
      title: "Flame-Retardant Polybags",
      description: "Our flame-retardant polybags are designed to resist ignition and slow the spread of flames, providing enhanced safety in high-risk environments. Ideal for industries requiring fire-resistant packaging solutions.",
      applications: [
        "Secure packaging for electronic components",
        "Safe storage of flammable materials",
        "Protective wrapping for construction and insulation products"
      ],
      image: flameretardantpolybags
    }
  ];

  const granules = [
    {
      id: 1,
      title: "LDPE Granules",
      description: "Flexible and transparent films, packaging bags, and agricultural sheets.",
      image: ldpegranuels
    },
    {
      id: 2,
      title: "LLDPE Granules",
      description: "High-strength stretch films, industrial liners, and multilayer packaging.",
      image: lldpegranuels
    },
    {
      id: 3,
      title: "HDPE Granules",
      description: "Rigid containers, pipes, and heavy-duty plastic products.",
      image: hdpegranuels
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
      
      {/* Packaging Products Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Packaging
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
      </Box>

            {/* Polyethylene Granules Section - CORRECTED */}
            <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, fontWeight: "medium" }}>
          Polyethylene(PE) Plastic Granules
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
          Our high-quality plastic granules provide excellent durability, flexibility, and strength, catering to diverse industrial applications. Suitable for manufacturing films, bags, and molded products.
        </Typography>
        <Grid container spacing={4}>
          {/* LDPE Granules */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="240"
                image={ldpegranuels}
                alt="LDPE Granules"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, bgcolor: "#f9f9f9" }}>
                <Typography variant="h6" component="h3" sx={{ color: "#0d47a1", fontWeight: "bold", mb: 1 }}>
                  LDPE Granules
                </Typography>
                <Typography variant="body2">
                  Flexible and transparent films, packaging bags, and agricultural sheets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* LLDPE Granules */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="240"
                image={lldpegranuels}
                alt="LLDPE Granules"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, bgcolor: "#f9f9f9" }}>
                <Typography variant="h6" component="h3" sx={{ color: "#0d47a1", fontWeight: "bold", mb: 1 }}>
                  LLDPE Granules
                </Typography>
                <Typography variant="body2">
                  High-strength stretch films, industrial liners, and multilayer packaging.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* HDPE Granules */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="240"
                image={hdpegranuels}
                alt="HDPE Granules"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, bgcolor: "#f9f9f9" }}>
                <Typography variant="h6" component="h3" sx={{ color: "#0d47a1", fontWeight: "bold", mb: 1 }}>
                  HDPE Granules
                </Typography>
                <Typography variant="body2">
                  Rigid containers, pipes, and heavy-duty plastic products.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      
      {/* Capabilities Section
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
      </Box> */}
    </Container>
  );
}

export default Products;