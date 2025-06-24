"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "400px", sm: "450px", md: "500px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></Box>

      {/* Top Link */}
      <Typography sx={{ color: "white", zIndex: 10, mb: 1, fontSize: "14px" }}>
        ▶️ Learn about Alibaba.com
      </Typography>

      {/* Main Title */}
      <Typography
        variant={isSmall ? "h5" : isTablet ? "h4" : "h2"}
        sx={{
          color: "white",
          fontWeight: "bold",
          maxWidth: "90%",
          mb: 2,
          zIndex: 10,
        }}
      >
        The leading B2B ecommerce platform for global trade
      </Typography>

      {/* Search Field */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: 600,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "30px",
          overflow: "hidden",
          zIndex: 10,
          flexDirection: isSmall ? "column" : "row",
        }}
      >
        <TextField
          placeholder="cnc machining"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <CameraAltIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: { border: "none", pl: 1 },
          }}
          sx={{
            "& fieldset": { border: "none" },
            backgroundColor: "white",
            borderRadius: isSmall ? "30px 30px 0 0" : "30px 0 0 30px",
            flex: 1,
            zIndex: 10,
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff6a00",
            borderRadius: isSmall ? "0 0 30px 30px" : "0 30px 30px 0",
            px: 4,
            textTransform: "none",
            fontWeight: "bold",
            width: isSmall ? "100%" : "auto",
            "&:hover": {
              backgroundColor: "#e65c00",
            },
          }}
        >
          Search
        </Button>
      </Box>

      {/* Frequently Searched */}
      <Box
        display="flex"
        alignItems="center"
        zIndex={10}
        mt={2}
        flexWrap="wrap"
      >
        <Typography sx={{ color: "white", mr: 1 }}>
          Frequently searched:
        </Typography>

        {["lululemon", "vending machine", "iphones 15 pro max"].map(
          (item, idx) => (
            <Chip
              key={idx}
              label={item}
              variant="outlined"
              sx={{
                mr: 1,
                color: "white",
                borderColor: "white",
                mb: 1,
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;
