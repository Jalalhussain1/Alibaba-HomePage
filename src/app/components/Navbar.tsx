'use client';

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import FlagIcon from '@mui/icons-material/Flag';
import { useState } from 'react';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', px: 2 }}>
            <Toolbar sx={{ py: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                {/* Top Row: Left Logo and Right Content */}
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    {/* Left - Logo */}
                    <Box display="flex"  alignItems="center">
                        <img src="alibaba.png"   alt="Alibaba" width={50} />
                        <h1>Alibaba.com</h1>
                    </Box>

                    {/* Right Section (Top row + bottom row vertically stacked) */}
                    <Box display="flex" flexDirection="column" alignItems="flex-end">
                        {/* Top right row */}
                        <Box display="flex" alignItems="center" gap={2}>
                            
                            <FlagIcon fontSize="small" />
                            <Typography variant="body2">US</Typography>
                            <LanguageIcon fontSize="small" />
                            <Typography variant="body2">English-USD</Typography>
                            <IconButton sx={{ color: 'white' }}>
                                <ShoppingCartIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }}>
                                <AccountCircleIcon />
                            </IconButton>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#ff6a00',
                                    color: 'white',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    px: 3,
                                    fontWeight: 'bold',
                                    '&:hover': { bgcolor: '#e65c00' },
                                }}
                            >
                                Create account
                            </Button>
                        </Box>

                    </Box>
                </Box>
                <Box display={'flex'} justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                        <Button
                            startIcon={<MenuIcon />}
                            onClick={handleMenuOpen}
                            sx={{ color: 'white', textTransform: 'none' }}
                        >
                            All categories
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            Featured selections
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            Order protections
                        </Button>
                    </Box>
                    {/* Bottom row below that */}
                    <Box display="flex" gap={1} mt={1}>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            Featured selections
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            Order protections
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            AI sourcing agent
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            Buyer Central
                        </Button>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>
                            More services
                        </Button>
                    </Box>
                </Box>

                {/* Second Row: All categories and 2 buttons */}

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
