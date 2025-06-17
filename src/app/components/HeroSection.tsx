'use client';

import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { relative } from 'path';

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/hero.jpg)', // Replace with your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                px: 6,
                position: 'relative',
            }}
        ><Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.5)', // ← use RGBA or alpha
            zIndex: 1,
        }}></Box>

            {/* Top Link */}
            <Typography sx={{ color: 'white', zIndex: 10, mb: 3, fontSize: '14' }}>
                ▶️ Learn about Alibaba.com
            </Typography>

            {/* Main Title */}
            <Typography
                variant="h2"
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    maxWidth: '90%',     // full width to prevent wrapping
                    mb: 2,
                    padding: 3,
                    zIndex: 10,
                    textOverflow: 'ellipsis', // optional: adds ... if overflow
                }}
            >
                The leading B2B ecommerce platform for global trade
            </Typography>


            {/* Search Field */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: 600,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    zIndex: 10,
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
                        sx: { border: 'none', pl: 1 },
                    }}
                    sx={{
                        '& fieldset': { border: 'none' },
                        backgroundColor: 'white',
                        borderRadius: '30px 0 0 30px',
                        flex: 1,
                        zIndex: 10,
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ff6a00',
                        borderRadius: '0 30px 30px 0',
                        px: 4,
                        height: '40px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '0,0,0,0,5',
                        },
                    }}
                >
                    Search
                </Button>
            </Box>

            {/* Frequently Searched */}
            <Box display="flex" alignItems="center" zIndex={10} mt={2} flexWrap="wrap">
                <Typography sx={{ color: 'white', mr: 1 }}>
                    Frequently searched:
                </Typography>

                <Chip
                    label="lululemon"
                    variant="outlined"
                    sx={{
                        mr: 1,
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            backgroundColor: 'black',
                        },
                    }}
                />
                <Chip
                    label="vending machine"
                    variant="outlined"
                    sx={{
                        mr: 1,
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            backgroundColor: 'black',
                        },
                    }}
                />
                <Chip
                    label="iphones 15 pro max"
                    variant="outlined"
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            backgroundColor: 'black',
                        },
                    }}
                />
            </Box>

        </Box>
    );
};

export default HeroSection;
