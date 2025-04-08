import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Divider, IconButton, useMediaQuery, useTheme, Collapse } from "@mui/material";
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

// Leadership Card Component with photo zoom adjustments for specific individuals
const LeadershipCard = ({ name, title, description, photo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        height: "100%",
        minHeight: { xs: "400px", sm: "450px" },
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.6s ease",
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        "&:hover": {
          boxShadow: 6,
          transform: isFlipped ? "rotateY(180deg) translateY(-5px)" : "rotateY(0deg) translateY(-5px)"
        },
        mb: { xs: 4, sm: 0 } // Increased bottom margin on mobile from 2 to 4
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
              width: { xs: 180, sm: 220, md: 240 },
              height: { xs: 180, sm: 220, md: 240 },
              mb: 2,
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
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </Box>
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 1, fontWeight: 500 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: "text.secondary" }}>
            {title}
          </Typography>
          
          <Typography variant="body2" sx={{ color: "text.primary", mt: "auto" }}>
            Read more
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
          p: { xs: 2, sm: 2 }
        }}>
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 2, fontWeight: 500 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: "text.secondary" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ mt: "auto", color: "text.primary" }}>
            Return 
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

// Optimized About Us header section
const AboutUsHeader = () => {
  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        py: { xs: 4, sm: 6, md: 8 }, // Responsive padding
        px: { xs: 2, sm: 3 }, // Add horizontal padding for mobile
        backgroundColor: "#f5f9ff",
        backgroundImage: `linear-gradient(rgba(13, 71, 161, 0.05), rgba(13, 71, 161, 0.1))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "Black",
        borderRadius: 2,
        mb: { xs: 4, sm: 6 }, // Reduce bottom margin on mobile
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: "bold", 
          mb: 2,
          color: "#0d47a1",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } // Responsive font size
        }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          mb: 2,
          maxWidth: "800px",
          mx: "auto",
          color: "#555",
          fontSize: { xs: "1rem", sm: "1.1rem" } // Responsive font size
        }}>
          Providing Premium Polymer Solutions Since 1992
        </Typography>
      </Box>
    </Box>
  );
};

// Section Header component for consistent styling
const SectionHeader = ({ title }) => {
  return (
    <Typography variant="h4" component="h2" sx={{ 
      mb: 3, 
      fontWeight: "medium", 
      color: "#0d47a1", 
      textAlign: "center",
      fontSize: { xs: "1.7rem", sm: "2rem" } // Responsive font size
    }}>
      {title}
    </Typography>
  );
};

function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Updated leadership team data with expanded descriptions
  const leadershipTeam = [
    {
      name: "Satinder Singh",
      title: "Founder & Chairperson",
      description: "With over 30 years of industry experience, Satinder Singh is the visionary behind B.K. Polymers. His leadership has been instrumental in transforming the company into a respected and innovative player in the polymer industry.",
      photo: satinder3
    },
    {
      name: "Chandeep Singh",
      title: "Director",
      description: "Chandeep Singh oversees the company's manufacturing operations, ensuring that every product meets the highest quality standards. With a keen eye for efficiency and innovation, he implements cutting-edge technologies to enhance production processes.",
      photo: chandeep2
    },
    {
      name: "Harshdeep Singh",
      title: "Director",
      description: "Harshdeep Singh leads B.K. Polymers' strategic business initiatives, driving sustainable growth and market expansion. With a strong focus on innovation and adaptability, he ensures that the company remains ahead of industry trends.",
      photo: harshdeep
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      
      {/* Updated Hero Section with Background */}
      <AboutUsHeader />
      
      {/* Company Introduction */}
      <Box sx={{ mb: { xs: 5, sm: 6 } }}> {/* Increased mobile margin from 4 to 5 */}
        <SectionHeader title="Who We Are" />
        <Grid container spacing={3} alignItems="center">
          {isMobile ? (
            <>
              <Grid item xs={12}>
                <Box 
                  component="img" 
                  src={industryphoto}
                  alt="B.K. Polymers Industry" 
                  sx={{ 
                    width: "100%", 
                    borderRadius: 2,
                    boxShadow: 3,
                    mb: 3
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  At B.K. Polymers, we've been a trusted leader in the packaging industry since 1992. Our journey began with a vision to provide premium packaging solutions that meet the highest standards of quality and reliability.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our commitment to excellence drives us to deliver innovative and reliable packaging solutions for businesses across various industries.
                </Typography>
                <Typography variant="body1">
                  With decades of experience, we understand and meet our clients' diverse needs with precision, quality, and dedication.
                </Typography>
              </Grid>
            </>
          ) : (
            <>
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
            </>
          )}
        </Grid>
      </Box>
      
      <Divider sx={{ mb: { xs: 5, sm: 6 } }} /> {/* Increased mobile margin from 4 to 5 */}
      
      {/* Our History */}
      <Box sx={{ mb: { xs: 5, sm: 6 } }}> {/* Increased mobile margin from 4 to 5 */}
        <SectionHeader title="Our History" />
        <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, bgcolor: "#f5f5f5" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              mb: 2,
              p: 1,
              borderLeft: "4px solid #0d47a1"
            }}>
              <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ ml: 1, fontWeight: isMobile ? "medium" : "normal" }}>
                From Humble Beginnings to Industry Leader
              </Typography>
            </Box>
            <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: 2 }}>
              Established in 1992, B.K. Polymers began as a small enterprise with a clear vision: to deliver exceptional packaging solutions with uncompromising quality.
              {!isMobile && " Over three decades, we've grown into a recognized industry leader through dedication and innovation."}
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}>
              Our growth has been marked by continuous technological advancement and an expanding product portfolio. 
              {!isMobile ? " We've invested in state-of-the-art machinery and processes while maintaining our founding principles of quality, reliability, and customer satisfaction. Today, we serve a diverse clientele across multiple industries, providing customized packaging solutions that meet specific requirements and exceed expectations." : " Today, we serve a diverse clientele across multiple industries."}
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      <Divider sx={{ mb: { xs: 5, sm: 6 } }} /> {/* Increased mobile margin from 4 to 5 */}
      
      {/* Manufacturing Capabilities */}
      <Box sx={{ mb: { xs: 5, sm: 6 } }}> {/* Increased mobile margin from 4 to 5 */}
        <SectionHeader title="What We Do" />
        <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, mb: isMobile ? 3 : 4, bgcolor: "#f5f5f5" }}>
          <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: isMobile ? 2 : 3 }}>
            At B.K Polymers, we prioritize high-quality manufacturing, timely delivery, and complete customer satisfaction. Our production processes adhere to international quality standards.
            {!isMobile && " We manufacture a wide range of products, including Plain and Printed Polythene Bags, Rolls, Sheets, Industrial Liners, Self-Locking Zipper Bags, Stretch Film, Heat Shrink Film, and Black & Colored Bags, using LDPE, LLDPE, and HM/HDPE materials."}
          </Typography>
          <Typography variant={isMobile ? "body2" : "body1"}>
            {isMobile ? "We manufacture a wide range of products, including Plain and Printed Polythene Bags, Rolls, Sheets, Industrial Liners, Self-Locking Zipper Bags, Stretch Film, Heat Shrink Film, and Black & Colored Bags." : "Bag sizes range from 2\" to 80\" (50 microns and above), while sheets vary from 2\" to 160\", with thickness options between 7 and 100 microns."}
          </Typography>
        </Paper>
      </Box>
      
      <Divider sx={{ mb: { xs: 5, sm: 6 } }} /> {/* Increased mobile margin from 4 to 5 */}
      
      {/* Mission & Values Section */}
      <Box sx={{ mb: { xs: 5, sm: 6 } }}> {/* Increased mobile margin from 4 to 5 */}
        <SectionHeader title="Our Mission & Values" />
        <Paper elevation={3} sx={{ p: isMobile ? 3 : 4, mb: isMobile ? 3 : 5, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography variant="body1" sx={{ fontSize: isMobile ? "1.1rem" : "1.2rem", fontStyle: "italic" }}>
            "To provide premium packaging solutions that meet and exceed customer expectations, ensuring the highest quality, sustainability, and innovation standards."
          </Typography>
        </Paper>
        
        {!isMobile && (
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: "medium", color: "#0d47a1", textAlign: "center" }}>
            Our Values
          </Typography>
        )}
        
        <Grid container spacing={isMobile ? 3 : 4} sx={{ mb: isMobile ? 2 : 4 }}> {/* Increased spacing from 2 to 3 for mobile */}
          {[
            { 
              icon: VerifiedIcon, 
              title: "Quality", 
              description: isMobile ? "We are committed to providing the highest quality products through rigorous testing and quality control processes." : "We are committed to providing the highest quality products through rigorous testing and quality control processes. Our dedication to excellence ensures that every product meets or exceeds industry standards."
            },
            { 
              icon: AutorenewIcon, 
              title: "Innovation", 
              description: isMobile ? "We constantly evolve our processes and products to stay at the forefront of packaging technology." : "We constantly evolve our processes and products to stay at the forefront of packaging technology. Our R&D team works tirelessly to develop new solutions that address emerging market needs."
            },
            { 
              icon: RecyclingIcon, 
              title: "Customer Focus", 
              description: isMobile ? "Understanding customer needs is at the core of our business." : "Understanding customer needs is at the core of our business. We prioritize listening to our clients, anticipating their requirements, and developing solutions that address their specific challenges."
            },
            { 
              icon: EthicsIcon, 
              title: "Ethics", 
              description: isMobile ? "We conduct our business with the highest ethical standards, ensuring transparency and integrity." : "We conduct our business with the highest ethical standards, ensuring transparency, honesty, and integrity in all our interactions with clients, suppliers, employees, and the community."
            }
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {isMobile ? (
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    display: "flex", 
                    alignItems: "center",
                    borderLeft: "4px solid #0d47a1" 
                  }}
                >
                  <value.icon sx={{ mr: 2, color: "#0d47a1", fontSize: 24 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>{value.title}</Typography>
                    <Typography variant="body2">{value.description}</Typography>
                  </Box>
                </Paper>
              ) : (
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column",
                    borderTop: "4px solid #0d47a1" 
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <value.icon sx={{ mr: 1, color: "#0d47a1", fontSize: 30 }} />
                    <Typography variant="h6">{value.title}</Typography>
                  </Box>
                  <Typography sx={{ flexGrow: 1 }}>
                    {value.description}
                  </Typography>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Divider sx={{ mb: { xs: 5, sm: 6 } }} /> {/* Increased mobile margin from 4 to 5 */}
      
      {/* Our Leadership - Updated Section with new content and 360 flip effect */}
      <Box sx={{ mb: { xs: 5, sm: 6 } }}> {/* Increased mobile margin from 4 to 5 */}
        <SectionHeader title="Our Leadership" />
        <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: isMobile ? 4 : 4, textAlign: "center" }}>
          At B.K. Polymers, our leadership team brings decades of expertise, innovation, and strategic vision.
          {!isMobile && " Their dedication drives our commitment to quality, sustainability, and customer satisfaction, ensuring we remain a trusted name in the industry."}
        </Typography>
        
        {isMobile ? (
          <Box sx={{ mb: 3 }}>
            {leadershipTeam.map((leader, index) => (
              <Box key={index} sx={{ mb: 5 }}> {/* Increased margin bottom from 3 to 5 for more spacing */}
                <LeadershipCard 
                  name={leader.name}
                  title={leader.title}
                  description={leader.description}
                  photo={leader.photo}
                />
              </Box>
            ))}
          </Box>
        ) : (
          <Grid container spacing={4}>
            {leadershipTeam.map((leader, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <LeadershipCard 
                  name={leader.name}
                  title={leader.title}
                  description={leader.description}
                  photo={leader.photo}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
   
      <Divider sx={{ mb: { xs: 5, sm: 6 } }} /> {/* Increased mobile margin from 4 to 5 */}
    </Container>
  );
}

export default AboutUs;