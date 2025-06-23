"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B35", // Orange color for the button
    },
  },
  typography: {
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

export default function CTASection() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: "url('/women.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 12,
          px: 5,
          position: "relative",
          color: "white",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(20, 7, 7, 0.4)", // Optional dark overlay
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
              }}
            >
              Ready to get started?
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 2,
                opacity: 0.9,
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore millions of products from trusted suppliers by signing up today!
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#FF6B35",
                color: "white",
                px: 4,
                py: 1.5,
                width: 250,
                fontSize: "1.1rem",
                fontWeight: 500,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
                "&:hover": {
                  backgroundColor: "#E55A2B",
                  boxShadow: "0 6px 16px rgba(255, 107, 53, 0.4)",
                },
                "&:active": {
                  transform: "translateY(1px)",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
