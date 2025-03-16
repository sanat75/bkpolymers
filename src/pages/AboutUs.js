import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, Avatar, Collapse, IconButton } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RecyclingIcon from "@mui/icons-material/Recycling";
import EthicsIcon from "@mui/icons-material/Handshake";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import industryphoto from '../assets/newfactory.jpg';
import harshdeep from '../assets/harshdeep.jpg';
import chandeep2 from '../assets/chandeep2.jpg';
import satinder3 from '../assets/satinder3.jpg';
// Leadership Card Component with photo zoom adjustments for specific individuals
const LeadershipCard = ({ name, title, description, photo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        height: "100%",
        minHeight: "450px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.6s ease",
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        "&:hover": {
          boxShadow: 6,
          transform: isFlipped ? "rotateY(180deg) translateY(-5px)" : "rotateY(0deg) translateY(-5px)"
        }
      }}
      onClick={handleFlip}
    >
      {!isFlipped ? (
        // Front side of card
        <Box 
          sx={{ 
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          {/* Bordered image with consistent size */}
          <Box
            sx={{
              width: 240,
              height: 240,
              mb: 3,
              border: "2px solid #1976d2",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={photo}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Using cover to fill the container consistently
                objectPosition: "center" // Center the image within the container
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3, color: "text.secondary" }}>
            {title}
          </Typography>
          
          <Typography variant="body2" sx={{ color: "text.secondary", mt: "auto" }}>
            (Click to read more)
          </Typography>
        </Box>
      ) : (
        // Back side of card with description
        <Box sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
          p: 2
        }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3, color: "text.secondary" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ mt: "auto", color: "text.secondary" }}>
            (Click to flip back)
          </Typography>
        </Box>
      )}
    </Paper>
  );
};
// Fix for the About Us header section at the top
const AboutUsHeader = () => {
  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        py: 8, // Reduced padding to make it less empty
        backgroundColor: "#f5f9ff", // Light blue background to fill the empty space
        backgroundImage: `linear-gradient(rgba(13, 71, 161, 0.05), rgba(13, 71, 161, 0.1))`,
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
          color: "#0d47a1"
        }}>
          About Us
        </Typography>
        <Typography variant="h6" sx={{ 
          mb: 2,
          maxWidth: "800px",
          mx: "auto",
          color: "#555"
        }}>
          Providing Premium Polymer Solutions Since 1992
        </Typography>
      </Box>
    </Box>
  );
};

function AboutUs() {
  // Updated leadership team data with expanded descriptions
  const leadershipTeam = [
    {
      name: "Satinder Singh",
      title: "Founder & Chairperson",
      description: "With over 30 years of industry experience, Satinder Singh is the visionary behind B.K. Polymers. His leadership has been instrumental in transforming the company into a respected and innovative player in the polymer industry. His deep understanding of the market and commitment to quality and ethical business practices have established B.K. Polymers as a trusted partner for clients worldwide. Under his guidance, the company continues to grow, embracing new technologies and sustainable solutions while maintaining a strong focus on customer needs.",
      photo: satinder3
    },
    {
      name: "Harshdeep Singh",
      title: "Director",
      description: "Harshdeep Singh leads B.K. Polymers' strategic business initiatives, driving sustainable growth and market expansion. With a strong focus on innovation and adaptability, he ensures that the company remains ahead of industry trends while maintaining a commitment to product excellence. His expertise in business development and customer relations plays a vital role in strengthening partnerships and expanding our global reach. Harshdeep is passionate about delivering high-quality solutions while fostering a company culture centered on continuous improvement and customer satisfaction.",
      photo: harshdeep
    },
    {
      name: "Chandeep Singh",
      title: "Director",
      description: "Chandeep Singh oversees the company's manufacturing operations, ensuring that every product meets the highest quality standards. With a keen eye for efficiency and innovation, he implements cutting-edge technologies to enhance production processes while optimizing sustainability. His hands-on approach ensures that B.K. Polymers remains competitive by continuously improving workflows and adopting environmentally responsible practices. Chandeep is dedicated to maintaining operational excellence while pushing the boundaries of what's possible in polymer manufacturing.",
      photo: chandeep2
    }
  ];

  return (
    <Container maxWidth="lg">
      
    {/* Updated Hero Section with Background */}
    <AboutUsHeader />
      
      {/* Company Introduction */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Who We Are
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
      
      {/* Our Leadership - Updated Section with new content and 360 flip effect */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
          Our Leadership
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          At B.K. Polymers, our leadership team brings decades of expertise, innovation, and strategic vision. Their dedication drives our commitment to quality, sustainability, and customer satisfaction, ensuring we remain a trusted name in the industry.
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