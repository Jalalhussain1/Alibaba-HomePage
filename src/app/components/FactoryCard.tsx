"use client";

import type React from "react";
import { Box, Container, Typography } from "@mui/material";

interface FactoryCardProps {
    title: string;
    image: string;
    actionText: string;
    isLive?: boolean;
}

const FactoryCard: React.FC<FactoryCardProps> = ({ title, image, actionText, isLive = false }) => (
    <Box
        sx={{
            position: "relative",
            height: 400,
            borderRadius: 5,
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            },
        }}
    >
        {/* Card Title on Top */}
        <Box
            sx={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 2,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: "20px",
                    lineHeight: 1.3,
                    textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                }}
            >
                {title}
            </Typography>
        </Box>

        {/* Background Image */}
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
                },
            }}
        />

        {/* Live Badge */}
        {isLive && (
            <Box
                sx={{
                    position: "absolute",
                    top: 48,
                    left: 16,
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#FF6B35",
                        color: "white",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "12px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "white",
                        }}
                    />
                    LIVE
                </Box>
            </Box>
        )}

        {/* Content at Bottom */}
        <Box
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
            <Typography
                variant="body2"
                sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "14px",
                    textDecoration: "underline",
                    cursor: "pointer",
                    "&:hover": {
                        color: "white",
                    },
                }}
            >
                {actionText}
            </Typography>
        </Box>
    </Box>
);

export default function SourceFactorySection() {
    const factoryCards = [
        {
            title: "Request Product Samples",
            image: "/pforphoto.jpg",
            actionText: "View more",
        },
        {
            title: "Partner with Verified Manufacturers",
            image: "/worker.jpg",
            actionText: "view more",
        },
        {
            title: "Experience a Live Factory Tour",
            image: "/workshop.jpg",
            actionText: "view Live",
            isLive: true,
        },
    ];

    return (
        <Box sx={{ backgroundColor: "#fff", py: 10 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: "#333",
                        mb: 4,
                        px: 7,
                        fontSize: { xs: "28px", md: "32px" },
                    }}
                >
                    Source direct-from-factory
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 3,
                        px: 7,
                    }}
                >
                    {factoryCards.map((card, index) => (
                        <Box key={index} sx={{ flex: 1 }}>
                            <FactoryCard
                                title={card.title}
                                image={card.image}
                                actionText={card.actionText}
                                isLive={card.isLive}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
