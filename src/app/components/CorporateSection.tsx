"use client";

import {
  Typography,
  Container,
  Card,
  CardContent,
  Paper,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B35",
    },
    secondary: {
      main: "#8B4513",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
});

const locations = [
  "Hangzhou, China",
  "Paris, France",
  "Munich, Germany",
  "Tokyo, Japan",
  "Seoul, Korea",
  "London, UK",
  "New York, US",
  "...",
  "and many other",
  "locations",
  "worldwide.",
];

export default function CorporateMissionAndLocationsSection() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ py: 15 }}>
        {/* Intro Heading and Paragraph */}
        <Box textAlign="center" mb={6} >
          <Typography variant="h3" color="secondary.main" fontWeight='bold' gutterBottom>
            Empowering businesses through global trade
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="800px" mx="auto">
            Alibaba.com offers one-stop B2B trading solutions for global small and medium-sized businesses,
            empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.
          </Typography>
        </Box>

        <Box display={{ xs: "block", md: "flex" }} gap={4}>
          {/* Mission Section */}
          <Box flex={1}>
            <Card
              sx={{
                height: "500px",
                position: "relative",
                borderRadius: 6,
                py: 12,
                overflow: "hidden",
                backgroundImage: `url('image6.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 1,
                },
              }}
            >
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  color: "white",
                  p: 4,
                }}
              >
                <Typography variant="h6" sx={{ color: "#FF6B35", mb: 2 }}>
                  OUR MISSION
                </Typography>
                <Typography variant="h4" sx={{ lineHeight: 1.2 }}>
                  Make it easy to do business anywhere.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Locations and ESG Section */}
          <Box flex={1} display="flex" flexDirection="column" gap={3}>
            {/* Locations Section */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: "#F5F5F5",
                backgroundImage: `url('image7.jpeg')`,
                borderRadius: 5,
                height: 300,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ color: "#FF6B35", mt: 2, }}>
                  OUR LOCATIONS
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#8B4513", mt: 2, lineHeight: 1.3 }}
                >
                  We have teams around the world.
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end" gap={0.5}>
                {locations.map((location, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{ color: "", fontSize: "0.875rem" }}
                  >
                    {location}
                  </Typography>
                ))}
              </Box>
            </Paper>

            {/* ESG Section */}
            <Card
              sx={{
                height: "180px",
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                backgroundImage: `url('/image8.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(139, 69, 19, 0.3)",
                  zIndex: 1,
                },
              }}
            >
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  color: "white",
                  p: 3,
                }}
              >
                <Typography variant="h6" sx={{ color: "#FF6B35", mb: 1 }}>
                  OUR ESG PROMISES
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: 1.2 }}>
                  Responsible technology. Sustainable future.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
