"use client";

import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import PublicIcon from '@mui/icons-material/Public';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const items = [
    {
        label: "Search for matches",
        icon: SearchOutlinedIcon,
        image: "/image1.jpg",
        description: "Search and filter from millions of product and supplier offerings to find the matching ones for your business."
    },
    {
        label: "Identify the right one",
        icon: CheckCircleOutlineIcon,
        image: "/image2.jpg",
        description: "Quickly discover and connect with suppliers tailored to your business needs."
    },
    {
        label: "Pay with confidence",
        icon: GavelIcon,
        image: "/image3.jpg",
        description: "Enjoy secure transactions with buyer protection every step of the way."
    },
    {
        label: "Fulfill with transparency",
        icon: PublicIcon,
        image: "/image4.jpg",
        description: "Track your order and shipping status in real time with full visibility."
    },
    {
        label: "Manage with ease",
        icon: ManageAccountsIcon,
        image: "/image5.jpg",
        description: "Easily handle your sourcing process from start to finish on one platform."
    },
];

export default function SearchForMatchesSection() {
    const [hoverImage, setHoverImage] = useState("/image1.jpg");
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <Box sx={{ px: 12, py: 15, backgroundColor: "#fff" }}>
            <Typography variant="h3" fontWeight={600} mb={4}>
                Streamline ordering from search to <br /> fulfillment, all in one place
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    alignItems: "center",
                }}
            >
                <Box flex={1}>
                    <Stack spacing={3}>
                        {items.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <Box
                                    key={index}
                                    onMouseEnter={() => {
                                        setHoverImage(item.image);
                                        setHoverIndex(index);
                                    }}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    sx={{ cursor: "pointer", transition: "all 0.3s" }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box
                                            sx={{
                                                backgroundColor: "#f5f5f5",
                                                p: 1.5,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <IconComponent
                                                fontSize="large"
                                                sx={{
                                                    color: hoverIndex === index ? "brown" : "gray",
                                                    transition: "color 0.3s",
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: hoverIndex === index ? "brown" : "inherit",
                                                fontWeight: hoverIndex === index ? 700 : 400,
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Stack>
                                    {hoverIndex === index && (
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ ml: 7, mt: 1, transition: "opacity 0.3s" }}
                                        >
                                            {item.description}
                                        </Typography>
                                    )}
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>

                <Box flex={1}>
                    <Box sx={{ position: "relative" }}>
                        <Box
                            component="img"
                            src={hoverImage}
                            alt="hovered"
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: "all 0.3s",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
