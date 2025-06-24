"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Avatar,
    Container,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const testimonials = [
    {
        name: "Dr. Sayed Ibrahim",
        title: "Founder of SprinJene",
        text: "Once I discovered Alibaba.com, I was amazed at how many options I had with suppliers from all over the world.",
        image: "/man1.jpg",
    },
    {
        name: "Emily Chen",
        title: "CEO of EcoGoods",
        text: "“Alibaba.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don’t think we could have sourced anything without Alibaba.com.”",
        image: "/man2.jpg",
    },
    {
        name: "Carlos Rivera",
        title: "Director at Casa Supplies",
        text: "“As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. Alibaba.com has been my trusted partner in this process.",
        image: "/man3.jpg",
    },
];

export default function BusinessStageCarousel() {
    const [index, setIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }; 

    const handleNext = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{ backgroundColor: "#FAF6F3", py: 8, px: 4 }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography variant="h4" fontWeight={700} color="brown" mb={2}>
                    Get tailored discounts, services, and tools for <br />
                    your business stage.
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    maxWidth={700}
                    mx="auto"
                    mb={2}
                >
                    Grow with curated benefits offered by the free Alibaba.com Membership,
                    whether you are a small business needing the essentials to start
                    sourcing or a well-established enterprise looking for tools and
                    solutions for more complex orders.
                </Typography>
                <Button
                    variant="text"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                >
                    Learn more
                </Button>
            </Container>

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <IconButton onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </IconButton>

                <Box
                    sx={{
                        backgroundColor: "#ffffff",
                        borderRadius: 3,
                        width: "100%",
                        maxWidth: 1000,
                        boxShadow: 2,
                        minHeight: 450,
                        px: isMobile ? 3 : isTablet ? 6 : 12,
                        py: isMobile ? 4 : 8,
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: 4,
                    }}
                >
                    <Box
                        textAlign="left"
                        display="flex"
                        flexDirection={isMobile ? "column" : "row"}
                        alignItems={isMobile ? "flex-start" : "center"}
                        gap={2}
                    >
                        <Avatar
                            src={testimonials[index].image}
                            sx={{ width: 100, height: 100 }}
                        />
                        <Box>
                            <Typography variant="h6" fontWeight={700}>
                                {testimonials[index].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {testimonials[index].title}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography
                        variant="body1"
                        fontWeight="900"
                        sx={{
                            maxWidth: 500,
                            textAlign: "left",
                            mt: isMobile ? 3 : 0,
                        }}
                    >
                        “{testimonials[index].text}”
                    </Typography>
                </Box>

                <IconButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
            
        </Box>
    );
}
