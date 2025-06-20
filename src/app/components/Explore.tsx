"use client";

import { Box, Typography, Card, CardContent, Link, Chip, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledCard = styled(Card)(({ }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const SectionHeader = styled(Box)(({  }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  
}));




const PopularityChip = styled(Chip)(({ }) => ({
  backgroundColor: "#f5f5f5",
  color: "#666",
  fontWeight: "500",
  fontSize: "0.875rem",
  border: "1px solid #e0e0e0",
}));



const CarouselDot = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: active ? "#666" : "#d0d0d0",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: active ? "#333" : "#bbb",
  },
}));

export default function ExploreOfferings() {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselImages = ["/boat.jpg", "/car.png", "/window.jpg"];
  const newArrivalImages = ["/bird.jpg", "/boat.jpg", "/bottle.jpg", "window.jpg"];

  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          marginTop: "10%",
        }}
      >
        {/* First Card */}
        <StyledCard sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
          <CardContent>
            <SectionHeader>
              <Typography variant="h5">Most popular</Typography>
            </SectionHeader>
            <Typography variant="body2">Speed Reducers</Typography>
            <PopularityChip label="Popularity score: 4.2" />
            <Box
              sx={{
                width: "100%",
                height: 350,
                backgroundColor: "#f5f5f5",
                backgroundImage: `url(${carouselImages[activeSlide]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
                my: 2,
              }}
            />
            <Box sx={{ display: "flex", gap: 6, overflowX: "auto", pb: 1 }}>
              {carouselImages.map((img, i) => (
                <Box
                  key={i}
                  sx={{
                    minWidth: 80,
                    height: 80,
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 1,
                    cursor: "pointer",
                    border: activeSlide === i ? "2px solid #1976d2" : "1px solid #ccc",
                  }}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
              {carouselImages.map((_, i) => (
                <CarouselDot key={i} active={activeSlide === i} onClick={() => setActiveSlide(i)} />
              ))}
            </Box>
          </CardContent>
        </StyledCard>

        {/* Second Column */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "30%" },
            height: "12%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* New Arrivals */}
          <StyledCard>
            <CardContent>
              <SectionHeader>
                <Typography variant="h5">40+ products added today</Typography>
              </SectionHeader>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, height: 390 }}>
                {newArrivalImages.map((img, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "48%",
                      height: 170,
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 7,
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </StyledCard>

          {/* Verified Suppliers */}
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: "#f5f5f5",
                    backgroundImage: 'url("/boat.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 6,
                  }}
                />
                <Box>
                  <Typography variant="body2" fontWeight="600">
                    New this week
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Products from Verified Suppliers only
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        </Box>

        {/* Third Column */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "30%" },
            height: "12%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Repeated Card */}
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: "#f5f5f5",
                    backgroundImage: 'url("/bird.jpg")',
                    backgroundSize: "cover",        // ✅ Make image cover the box
                    backgroundPosition: "center",
                    borderRadius: 6,
                  }}
                />
                <Box>

                  <Typography variant="h5" color="text-white" >
                    180-day lowest price
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>

          {/* Top Deals */}
          <StyledCard>
            <CardContent>
              <SectionHeader>
                <Typography variant="h5">Deals on best seller</Typography>

              </SectionHeader>
              <Box
                sx={{
                  width: "100%",
                  height: 370,
                  backgroundColor: "#f5f5f5",
                  backgroundImage: 'url("/window.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 4,
                  my: 2,
                }}
              />
            </CardContent>
          </StyledCard>
        </Box>
      </Box>
    </Container>
  );
}
