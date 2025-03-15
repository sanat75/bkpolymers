import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Paper, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";

function Contact() {
  // Effect hook to load the Tally script
  useEffect(() => {
    // Function to load Tally embeds
    const loadTallyEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    // Check if Tally script is already loaded
    if (typeof window.Tally !== "undefined") {
      loadTallyEmbeds();
    } else {
      // Check if the script is already being loaded
      if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.onload = loadTallyEmbeds;
        script.onerror = loadTallyEmbeds;
        document.body.appendChild(script);
      }
    }

    // Cleanup function
    return () => {
      // Optional: remove the script when component unmounts if necessary
    };
  }, []);

  return (
    <Container maxWidth="lg">
      {/* Contact Header */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", maxWidth: "700px", mx: "auto" }}>
          Our team is ready to assist you with your packaging needs. Reach out to us today.
        </Typography>
        <Divider sx={{ mt: 4, mb: 6, width: "100px", mx: "auto", borderColor: "#0d47a1", borderWidth: 2 }} />
      </Box>
      
      {/* Contact Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {/* Tally Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 4, bgcolor: "#f9f9f9" }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: "medium" }}>
              Send us a Message
            </Typography>
            <Box sx={{ height: "500px" }}> {/* Adjust height as needed */}
              <iframe 
                data-tally-src="https://tally.so/embed/nrvg7v?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Contact Us"
                style={{ border: "none", minHeight: "500px" }}
              ></iframe>
            </Box>
          </Paper>
        </Grid>
        
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: "100%" }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: "medium" }}>
              Contact Information
            </Typography>
            
            {/* Address */}
            <Box sx={{ display: "flex", mb: 4 }}>
              <LocationOnIcon sx={{ fontSize: 36, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="h6" gutterBottom>
                  Our Location
                </Typography>
                <Typography variant="body1">
                  A12/4 Naraina Industrial Area,<br />
                  Phase  1, New Delhi - 110028
                </Typography>
              </Box>
            </Box>
            
            {/* Key Contacts */}
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Key Contacts
            </Typography>
            
            {/* Contact Person 1 */}
            <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
              <PersonIcon sx={{ fontSize: 24, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                  Satinder Singh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Founder & Chairperson
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "#666" }} />
                  <Typography variant="body2">+91 9810079639</Typography>
                </Box>
                {/* <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                  <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "#666" }} />
                  <Typography variant="body2">+91 8920632866</Typography>
                </Box> */}
              </Box>
            </Box>
            
            {/* Contact Person 2 */}
            <Box sx={{ display: "flex", mb: 4, alignItems: "center" }}>
              <PersonIcon sx={{ fontSize: 24, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                  Chandeep Singh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Director
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "#666" }} />
                  <Typography variant="body2">+91 9810369639</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", mb: 4, alignItems: "center" }}>
              <PersonIcon sx={{ fontSize: 24, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                  Harshdeep Singh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Director
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "#666" }} />
                  <Typography variant="body2">+1 (647) 819-6399</Typography>
                </Box>
              </Box>
            </Box>
            
            {/* Email */}
            <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
              <EmailIcon sx={{ fontSize: 24, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                  Email Us
                </Typography>
                <Typography variant="body2">bkpolymers1617@yahoo.com</Typography>
              </Box>
            </Box>
            
            {/* LinkedIn */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon sx={{ fontSize: 24, mr: 2, color: "#0d47a1" }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                  Connect With Us
                </Typography>
                <Typography variant="body2">linkedin.com/company/bk-polymers</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;