"use client"

import type React from "react"
import { Box, Typography, Container } from "@mui/material"
import {
    GridView as GridIcon,
    CheckCircle as CheckIcon,
    Monitor as MonitorIcon,
    AttachMoney as DollarIcon,
} from "@mui/icons-material"

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <Box
            sx={{
                backgroundColor: "hsla(0, 84.80%, 12.90%, 0.03);",
                border: "1px solid rgba(22, 1, 1, 0.1)",
                borderRadius: "24px",
                width: "280px",
                height: "370px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                    backgroundColor: "rgba(133, 8, 8, 0.34)",
                    transform: "translateY(-4px)",
                },
            }}
        >
            <Box
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                }}
            >
                {icon}
            </Box>

            <Typography
                variant="h5"
                sx={{
                    color: "white",
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: "1.5rem",
                    lineHeight: 1.3,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                }}
            >
                {description}
            </Typography>
        </Box>
    )
}

export default function FeaturesSection() {
    const features = [
        {
            icon: <GridIcon sx={{ color: "white", fontSize: 32 }} />,
            title: "Millions of business offerings",
            description: "Explore products and suppliers for your business from millions of offerings worldwide.",
        },
        {
            icon: <CheckIcon sx={{ color: "white", fontSize: 32 }} />,
            title: "Assured quality and transactions",
            description:
                "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
        },
        {
            icon: <MonitorIcon sx={{ color: "white", fontSize: 32 }} />,
            title: "One-stop trading solution",
            description: "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
        },
        {
            icon: <DollarIcon sx={{ color: "white", fontSize: 32 }} />,
            title: "Tailored trading experience",
            description:
                "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
        },
    ]

    return (
        <Box
            sx={{
                backgroundColor: "#4A3728",
                py: 8,
                width: "100%",
                overflowX: "auto",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    px: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    minWidth: "fit-content",
                    justifyContent: {
                        xs: "flex-start",
                        lg: "center",
                    },
                }}
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                ))}
            </Container>
        </Box>
    )
}
