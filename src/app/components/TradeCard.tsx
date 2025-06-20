"use client";

import type React from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

interface TradeCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
}

const TradeCard: React.FC<TradeCardProps> = ({ icon, title, subtitle, description }) => (
    <Card
        sx={{
            background: "rgba(0,0,0,0.4)",
            borderRadius: 5,
            p: 4,
            color: "white",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
    >
        <CardContent sx={{ p: 0 }}>
            <Typography variant="subtitle1" sx={{ color: "#ccc", mb: 1 }}>
                {subtitle}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
                {icon}
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, ml: 1, fontSize: { xs: 20, md: 24 } }}
                >
                    {title}
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#ddd", mb: 3 }}>
                {description}
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
                <Button
                    variant="outlined"
                    startIcon={<PlayArrow />}
                    sx={{
                        color: "white",
                        borderColor: "white",
                        borderRadius: 50,
                        px: 3,
                        textTransform: "none",
                    }}
                >
                    Watch video
                </Button>
                <Button
                    variant="text"
                    sx={{
                        color: "white",
                        textDecoration: "underline",
                        textTransform: "none",
                    }}
                >
                    Learn more
                </Button>
            </Box>
        </CardContent>
    </Card>
);

export default function TradeConfidenceSection() {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/women.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box py={8}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            fontSize: { xs: '28px', md: '42px' },
                            lineHeight: 1.3,
                            mb: 6,
                        }}
                    >
                        Trade with confidence from:
                        <br />production quality to purchase:
                        <br />protection
                    </Typography>

                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
                        <Box flex={1}>
                            <TradeCard
                                icon={
                                    <Typography
                                        sx={{ fontSize: 32, fontWeight: 900, color: '#2196f3' }}
                                    >
                                        V
                                    </Typography>
                                }
                                subtitle="Ensure production quality with"
                                title="Verified Supplier"
                                description="Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the 'Verified' logo to begin sourcing with experienced suppliers your business could rely on."
                            />
                        </Box>

                        <Box flex={1}>
                            <TradeCard
                                icon={
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            backgroundColor: '#FFD54F',
                                            borderRadius: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography
                                            sx={{ fontSize: 22, fontWeight: 700, color: '#333' }}
                                        >
                                            $
                                        </Typography>
                                    </Box>
                                }
                                subtitle="Protect your purchase with"
                                title="Trade Assurance"
                                description="Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com."
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
