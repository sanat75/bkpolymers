import React from "react";
import { Box, Typography, Container, Grid, Paper, Divider } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecyclingIcon from "@mui/icons-material/Recycling";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function AboutUs() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box 
        sx={{ 
          textAlign: "center", 
          py: 8,
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/api/placeholder/1200/400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          borderRadius: 2,
          mb: 6
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          About B.K. POLYMERS
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your Trusted Partner in Premium Packaging Solutions Since 1992
        </Typography>
      </Box>
      
      {/* Company Introduction */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Company
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At B.K. Polymers, we've been a trusted leader in the packaging industry since 1992. Our journey began with a vision to provide premium packaging solutions that meet the highest standards of quality and reliability.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our commitment to excellence drives us to deliver innovative and reliable packaging solutions for businesses across various industries. We understand that packaging is not just about protection but also about representing your brand.
            </Typography>
            <Typography variant="body1">
              With decades of experience, we understand and meet our clients' diverse needs with precision, quality, and dedication. Our team of experts works closely with each client to develop customized solutions that address their specific requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src="/api/placeholder/600/400" 
              alt="B.K. Polymers History" 
              sx={{ 
                width: "100%", 
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Mission & Values */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Mission
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mb: 5, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            "To provide premium packaging solutions that meet and exceed customer expectations, ensuring the highest quality, sustainability, and innovation standards."
          </Typography>
        </Paper>
        
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Values
        </Typography>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <VerifiedIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Quality</Typography>
              </Box>
              <Typography>
                We are committed to providing the highest quality products through rigorous testing and quality control processes. Our dedication to excellence ensures that every product meets or exceeds industry standards.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AutorenewIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Innovation</Typography>
              </Box>
              <Typography>
                We constantly evolve our processes and products to stay at the forefront of packaging technology. Our R&D team works tirelessly to develop new solutions that address emerging market needs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <RecyclingIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Sustainability</Typography>
              </Box>
              <Typography>
                We prioritize environmentally responsible practices throughout our operations. From using recycled materials to reducing waste, we are committed to minimizing our environmental footprint.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Our values guide everything we do at B.K. Polymers. We believe in conducting our business with the highest ethical standards and understanding our customer needs at every step.
        </Typography>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Our Products */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#0d47a1" }}>
                LDPE-Based Packaging
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Our LDPE rolls and bags are known for their flexibility, transparency, and strength. These products are widely used in various industries due to their versatility.
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
                Applications:
              </Typography>
              <Typography variant="body2">
                • Industrial Wrapping<br />
                • Garbage Bags<br />
                • Food packaging<br />
                • Hospital supplies
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#0d47a1" }}>
                LLDPE-Based Packaging
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                LLDPE (Linear Low-Density Polyethylene) rolls and bags are prized for their superior strength and puncture resistance. Our Poly Bags are suitable for applications where durability is essential.
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
                Applications:
              </Typography>
              <Typography variant="body2">
                • Stretch Wrap<br />
                • Heavy-Duty Bags<br />
                • Industrial packaging
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#0d47a1" }}>
                HDPE-Based Packaging
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Our HDPE Rolls are engineered to provide exceptional strength and durability for a wide range of industrial and commercial applications. These rolls, made from premium-grade HDPE resin, provide excellent performance.
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
                Applications:
              </Typography>
              <Typography variant="body2">
                • Construction Industry<br />
                • Retail and Consumer Goods<br />
                • Protective packaging
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Our Capabilities */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Capabilities
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <FactoryIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Advanced Manufacturing</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Our facilities use cutting-edge technology and the latest machinery to ensure precision, efficiency, and high production standards.
              </Typography>
              <Typography variant="body2">
                We utilize advanced technologies such as automated systems and real-time monitoring to enhance product quality and operational efficiency.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EngineeringIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Rigorous Quality Control</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We ensure top standards with rigorous quality control at every stage—from raw material inspection to final product testing. Quality is our priority.
              </Typography>
              <Typography variant="body2">
                We follow industry certifications and standards, including ISO, to ensure product reliability and safety.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocalShippingIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Efficient Logistics and Distribution</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Our well-established logistics network ensures timely delivery of products.
              </Typography>
              <Typography variant="body2">
                We prioritize on-time delivery and maintain efficient processes to meet deadlines and ensure customer satisfaction.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <SupportAgentIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Exceptional Customer Support</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Our dedicated customer support team addresses client needs and provides solutions.
              </Typography>
              <Typography variant="body2">
                We offer comprehensive after-sales support, including technical assistance and problem resolution, to ensure ongoing customer satisfaction.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      {/* Contact Information */}
      {/* <Box sx={{ bgcolor: "#0d47a1", color: "white", p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: "center" }}>
          Get In Touch With Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>Address:</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              A12/4 Naraina Industrial Area, Phase – 1, New Delhi - 110028
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Information:</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Satinder Singh</strong> - Founder & Chairperson
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Primary: +91 9810079639 | Secondary: +91 8920632866
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Chandeep Singh</strong> - Director
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Primary: +91 9810369639
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Email:</strong> bkpolymers1617@yahoo.com
            </Typography>
            <Typography variant="body1">
              <strong>LinkedIn:</strong> https://www.linkedin.com/company/bk-polymers
            </Typography>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}

export default AboutUs;