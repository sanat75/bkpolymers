import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Divider, Button, Link, CircularProgress } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { products, granules } from "./productData";


// Lazy load images
const LazyImage = lazy(() => import("./LazyImage"));

// Import products data from a separate file to improve code organization

function Products() {
  return (
    <>
      <Helmet>
        <title>Premium Polymer Products | LDPE, LLDPE, HDPE Solutions | BK Polymers</title>
        <meta name="description" content="High-quality polymer products including LDPE, LLDPE, HDPE packaging solutions and granules. Engineered for excellence, durability, and industrial applications." />
        <meta name="keywords" content="LDPE, LLDPE, HDPE, polymer products, plastic granules, flame retardant polybags, heat shrink roll, industrial packaging" />
        <link rel="canonical" href="https://www.bkpolymers.in/products" />
        <meta property="og:title" content="Premium Polymer Products | BK Polymers" />
        <meta property="og:description" content="Discover our range of high-quality polymer products including LDPE, LLDPE, HDPE packaging solutions and granules." />
        <meta property="og:url" content="https://www.bkpolymers.in/products" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Polymer Products | BK Polymers" />
        <meta name="twitter:description" content="Discover our range of high-quality polymer products including LDPE, LLDPE, HDPE packaging solutions and granules." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "image": `https://www.bkpolymers.in${product.image}`,
                "url": `https://www.bkpolymers.in/products#${product.title.toLowerCase().replace(/\s+/g, '-')}`,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR",
                  "seller": {
                    "@type": "Organization",
                    "name": "BK Polymers"
                  }
                }
              }
            }))
          })}
        </script>
        
        {/* Additional structured data for organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BK Polymers",
            "url": "https://www.bkpolymers.in",
            "logo": "https://www.bkpolymers.in/logo.svg",
            "sameAs": [
              "https://www.facebook.com/bkpolymers",
              "https://www.linkedin.com/company/bkpolymers"
            ]
          })}
        </script>
      </Helmet>
      
      <Container maxWidth="lg">
        {/* Products Header */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h1" sx={{ fontSize: "2.5rem", fontWeight: "bold", mb: 2 }}>
            Our Products
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "1.25rem", color: "#555", maxWidth: "800px", mx: "auto" }}>
            Engineered for excellence, our polymer packaging solutions combine innovation with reliability.
          </Typography>
          <Divider sx={{ mt: 4, mb: 6, width: "100px", mx: "auto", borderColor: "#0d47a1", borderWidth: 2 }} />
        </Box>
        
        {/* Packaging Products Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", mb: 4, fontWeight: "medium" }}>
            Packaging Products
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {products.slice(0, 3).map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id} id={product.title.toLowerCase().replace(/\s+/g, '-')}>
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
                  <Suspense fallback={<Box sx={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></Box>}>
                    <LazyImage 
                      src={product.image} 
                      alt={product.title}
                      height="200px"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Suspense>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ fontSize: "1.5rem", color: "#0d47a1", fontWeight: "medium" }}>
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
                    <Box sx={{ mt: 2, textAlign: "center" }}>
                      <Button 
                        component={RouterLink} 
                        to="/contact" 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        aria-label={`Get pricing for ${product.title}`}
                        sx={{ 
                          mt: 2, 
                          borderRadius: 2,
                          boxShadow: 1,
                          "&:hover": { backgroundColor: "#1565c0" }
                        }}
                      >
                        Want a price?
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Center the last two products */}
          <Grid container spacing={4} sx={{ mb: 8, justifyContent: "center" }}>
            {products.slice(3).map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id} id={product.title.toLowerCase().replace(/\s+/g, '-')}>
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
                  <Suspense fallback={<Box sx={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></Box>}>
                    <LazyImage 
                      src={product.image} 
                      alt={product.title}
                      height="200px"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Suspense>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ fontSize: "1.5rem", color: "#0d47a1", fontWeight: "medium" }}>
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
                    <Box sx={{ mt: 2, textAlign: "center" }}>
                      <Button 
                        component={RouterLink} 
                        to="/contact" 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        aria-label={`Get pricing for ${product.title}`}
                        sx={{ 
                          mt: 2, 
                          borderRadius: 2,
                          boxShadow: 1,
                          "&:hover": { backgroundColor: "#1565c0" }
                        }}
                      >
                        Want a price?
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Polyethylene Granules Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center", mb: 4, fontWeight: "medium" }}>
            Polyethylene(PE) Plastic Granules
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
            Our high-quality plastic granules provide excellent durability, flexibility, and strength, catering to diverse industrial applications. Suitable for manufacturing films, bags, and molded products.
          </Typography>
          <Grid container spacing={4}>
            {granules.map((granule) => (
              <Grid item xs={12} md={4} key={granule.id} id={granule.title.toLowerCase().replace(/\s+/g, '-')}>
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
                  <Suspense fallback={<Box sx={{ height: "240px", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></Box>}>
                    <LazyImage 
                      src={granule.image} 
                      alt={granule.title}
                      height="240px"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Suspense>
                  <CardContent sx={{ flexGrow: 1, bgcolor: "#f9f9f9" }}>
                    <Typography variant="h3" sx={{ fontSize: "1.5rem", color: "#0d47a1", fontWeight: "bold", mb: 1 }}>
                      {granule.title}
                    </Typography>
                    <Typography variant="body2">
                      {granule.description}
                    </Typography>
                    <Box sx={{ mt: 2, textAlign: "center" }}>
                      <Button 
                        component={RouterLink} 
                        to="/contact" 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        aria-label={`Get pricing for ${granule.title}`}
                        sx={{ 
                          mt: 2, 
                          borderRadius: 2,
                          boxShadow: 1,
                          "&:hover": { backgroundColor: "#1565c0" }
                        }}
                      >
                        Want a price?
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Products;