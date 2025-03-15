import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Avatar, Collapse, IconButton } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecyclingIcon from "@mui/icons-material/Recycling";
import EthicsIcon from "@mui/icons-material/Handshake";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import industryphoto from '../assets/industryphoto.jpg';
import harshdeep from '../assets/harshdeep.jpg';
import chandeep from '../assets/chandeep.jpg';
import satinder from '../assets/satinder.jpg';

// Leadership Card Component
const LeadershipCard = ({ name, title, description, photo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        height: "100%", 
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-5px)"
        }
      }}
      onClick={handleExpandClick}
    >
      <Avatar
        src={photo}
        alt={name}
        sx={{ width: 120, height: 120, mx: "auto", mb: 2, border: "4px solid #0d47a1" }}
      />
      <Typography variant="h6" sx={{ color: "#0d47a1", mb: 1 }}>
        {name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2, color: "text.secondary" }}>
        {title}
      </Typography>
      
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <IconButton 
          size="small"
          sx={{ 
            bgcolor: "#e3f2fd", 
            "&:hover": { bgcolor: "#bbdefb" }
          }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #e0e0e0" }}>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
};

function AboutUs() {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Satinder Singh",
      title: "Founder & Chairperson",
      description: "With over 30 years of industry experience, Satinder has been the guiding force behind B.K. Polymers' growth and success, establishing the company's reputation for quality and innovation.",
      photo: satinder
    },
    {
      name: "Chandeep Singh",
      title: "Director",
      description: "Chandeep leads our strategic business initiatives, focusing on sustainable growth and market expansion while maintaining our commitment to customer satisfaction and product excellence.",
      photo: chandeep
    },
    {
      name: "Harshdeep Singh",
      title: "Director",
      description: "Harshdeep oversees our manufacturing operations, ensuring adherence to quality standards and efficient production processes while implementing innovative technologies to enhance our capabilities.",
      photo: harshdeep
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section with Background Image */}
      <Box 
        sx={{ 
          textAlign: "center", 
          py: 10,
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${industryphoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "Black",
          borderRadius: 2,
          mb: 6,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: "bold", 
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
          }}>
            About B.K. POLYMERS
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
          }}>
            Your Trusted Partner in Premium Packaging Solutions Since 1992
          </Typography>
        </Box>
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
              src={industryphoto}
              alt="B.K. Polymers Industry" 
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
      
      {/* Our History */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our History
        </Typography>
        <Paper elevation={3} sx={{ p: 4, bgcolor: "#f5f5f5" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              mb: 2,
              p: 1,
              borderLeft: "4px solid #0d47a1"
            }}>
              <Typography variant="h6" sx={{ ml: 1 }}>From Humble Beginnings to Industry Leader</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Established in 1992, B.K. Polymers began as a small enterprise with a clear vision: to deliver exceptional packaging solutions with uncompromising quality. Over three decades, we've grown into a recognized industry leader through dedication and innovation.
            </Typography>
            <Typography variant="body1">
              Our growth has been marked by continuous technological advancement and an expanding product portfolio. We've invested in state-of-the-art machinery and processes while maintaining our founding principles of quality, reliability, and customer satisfaction. Today, we serve a diverse clientele across multiple industries, providing customized packaging solutions that meet specific requirements and exceed expectations.
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Manufacturing Capabilities */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          What We Do
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: "#f5f5f5" }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            At B.K Polymers, we prioritize high-quality manufacturing, timely delivery, and complete customer satisfaction. Our production processes adhere to international quality standards. We manufacture a wide range of products, including Plain and Printed Polythene Bags, Rolls, Sheets, Industrial Liners, Self-Locking Zipper Bags, Stretch Film, Heat Shrink Film, and Black & Colored Bags, using LDPE, LLDPE, and HM/HDPE materials.
          </Typography>
          <Typography variant="body1">
            Bag sizes range from 2" to 80" (50 microns and above), while sheets vary from 2" to 160", with thickness options between 7 and 100 microns.
          </Typography>
        </Paper>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Mission & Values */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Mission
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mb: 5, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", fontStyle: "italic" }}>
            "To provide premium packaging solutions that meet and exceed customer expectations, ensuring the highest quality, sustainability, and innovation standards."
          </Typography>
        </Paper>
        
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Values
        </Typography>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <RecyclingIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Customer Focus</Typography>
              </Box>
              <Typography>
                Understanding customer needs is at the core of our business. We prioritize listening to our clients, anticipating their requirements, and developing solutions that address their specific challenges.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3, height: "100%", borderTop: "4px solid #0d47a1" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EthicsIcon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                <Typography variant="h6">Ethics</Typography>
              </Box>
              <Typography>
                We conduct our business with the highest ethical standards, ensuring transparency, honesty, and integrity in all our interactions with clients, suppliers, employees, and the community.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Our values guide everything we do at B.K. Polymers, forming the foundation of our business practices and relationships.
        </Typography>
      </Box>
      
      <Divider sx={{ mb: 6 }} />
      
      {/* Our Leadership - Updated Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Leadership
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Our team of experienced leaders brings decades of industry expertise, innovation, and strategic vision to drive B.K. Polymers forward.
        </Typography>
        
        <Grid container spacing={4}>
          {leadershipTeam.map((leader, index) => (
            <Grid item xs={12} md={4} key={index}>
              <LeadershipCard 
                name={leader.name}
                title={leader.title}
                description={leader.description}
                photo={leader.photo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
   
      <Divider sx={{ mb: 6 }} />
    </Container>
  );
}

export default AboutUs;