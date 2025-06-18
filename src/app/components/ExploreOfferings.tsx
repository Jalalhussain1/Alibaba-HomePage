'use client';

import React from 'react';
import {
    Box,
    Typography,
    IconButton,
} from '@mui/material';
import {
    Spa as EnvironmentIcon,
    Checkroom as ApparelIcon,
    Coffee as HomeIcon,
    Face as BeautyIcon,
    DirectionsCar as VehicleIcon,
    Diamond as JewelryIcon,
    PrecisionManufacturing as IndustrialIcon,
    Headphones as BusinessIcon,
    HeadsetMic as ConsumerIcon,
    FitnessCenter as SportsIcon,
    BusinessCenter as CommercialIcon,
    Inventory as PackagingIcon,
    Build as ToolsIcon,
    ChildCare as KidsIcon,
} from '@mui/icons-material';

const stats = [
    { value: '200M+', label: 'products' },
    { value: '200K+', label: 'suppliers' },
    { value: '5,900', label: 'categories' },
    { value: '200+', label: 'countries & regions' },
];

const categories = [
    { icon: <EnvironmentIcon />, label: 'Environment' },
    { icon: <ApparelIcon />, label: 'Apparel & Accessories' },
    { icon: <HomeIcon />, label: 'Home & Garden' },
    { icon: <BeautyIcon />, label: 'Beauty' },
    { icon: <VehicleIcon />, label: 'Vehicle Parts & Accessories' },
    { icon: <JewelryIcon />, label: 'Jewelry, Eyewear,...' },
    { icon: <IndustrialIcon />, label: 'Industrial Machinery' },
    { icon: <BusinessIcon />, label: 'Business Services' },
    { icon: <ConsumerIcon />, label: 'Consumer Electronics' },
    { icon: <SportsIcon />, label: 'Sports & Entertainment' },
    { icon: <CommercialIcon />, label: 'Commercial Equipment &...' },
    { icon: <PackagingIcon />, label: 'Packaging & Printing' },
    { icon: <ToolsIcon />, label: 'Tools & Hardware' },
    { icon: <KidsIcon />, label: 'Mother, Kids & Toys' },
];

const ExploreSection: React.FC = () => {
    return (
        <Box sx={{ px: 6, py: 12, backgroundColor: '#fff' }}>
            {/* TOP SECTION */}
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" gap={4}>
                {/* Left: Heading */}
                <Box flex={1} px={7} textAlign={{ xs: 'left', md: 'left' }}>
                    <Typography variant="h4" fontWeight={700}>
                        Explore millions of offerings<br />
                        tailored to your business needs
                    </Typography>
                </Box>

                {/* Right: Stats 2x2 */}
                <Box flex={1}>
                    <Box display="flex" flexWrap="wrap" gap={4}>
                        {stats.map((stat, index) => (
                            <Box key={index} width={{ xs: '45%', md: '40%' }} display="flex" alignItems="center" gap={1}>
                                <Box component="span" sx={{ width: '3px', height: '43px', bgcolor: 'gray' }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="orange">
                                        {stat.value}
                                    </Typography>
                                    <Typography>{stat.label}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* CATEGORY ICONS SECTION */}
            <Box mt={6} display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                {categories.map((cat, index) => (
                    <Box
                        key={index}
                        width={{ xs: '30%', sm: '18%', md: '12%' }}
                        minWidth={100}
                        sx={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '50%',
                            textAlign: 'center',
                            height: 140,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            '&:hover': {
                                borderColor: 'orange',
                                backgroundColor: '#fff7f0',
                                transform: 'scale(1.05)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            },
                        }}
                    >
                        <IconButton>{cat.icon}</IconButton>
                        {cat.label && (
                            <Typography variant="body2" mt={1} sx={{ maxWidth: '80%', fontSize: '0.75rem' }}>
                                {cat.label}
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ExploreSection;
