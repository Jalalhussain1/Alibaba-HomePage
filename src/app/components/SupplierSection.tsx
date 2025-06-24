"use client";

import {
  Box,
  Typography,
  Link,
  Container,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface Country {
  name: string;
  flag: string;
  code: string;
}

const countries: Country[] = [
  { name: "Italy", flag: "🇮🇹", code: "IT" },
  { name: "Türkiye", flag: "🇹🇷", code: "TR" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY" },
  { name: "South Korea", flag: "🇰🇷", code: "KR" },
  { name: "Vietnam", flag: "🇻🇳", code: "VN" },
  { name: "Russia", flag: "🇷🇺", code: "RU" },
  { name: "Thailand", flag: "🇹🇭", code: "TH" },
];

export default function SupplierFinder() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: "#333",
              fontSize: { xs: "1.5rem", md: "2rem" },
              px: 2,
              py: 1,
            }}
          >
            Find suppliers by country or region
          </Typography>
          <Link
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            View more
            <ArrowForward sx={{ ml: 0.5, fontSize: "1rem" }} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 9,
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": {
              height: 6,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: 3,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c1c1c1",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "#a8a8a8",
              },
            },
          }}
        >
          {countries.map((country) => (
            <Box
              key={country.code}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: { xs: 100, md: 120 },
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  "& .flag-circle": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  },
                  "& .country-name": {
                    color: "#1976d2",
                  },
                },
              }}
            >
              <Box
                className="flag-circle"
                sx={{
                  mb: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography
                className="country-name"
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "#333",
                  textAlign: "center",
                  fontSize: { xs: "0.875rem", md: "0.9rem" },
                  transition: "color 0.2s ease-in-out",
                }}
              >
                {country.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider sx={{ mt: 12, borderColor: "#ddd" }} />
    </Container>
  );
}
