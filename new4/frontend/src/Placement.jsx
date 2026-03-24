import React, { useState } from 'react';
import {
    Box, Grid, Paper, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Avatar, AvatarGroup,
    LinearProgress, Chip, Card, CardContent, TextField, MenuItem, Button, Divider
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EDU_COLORS = {
    primary: '#1a3e36',
    secondary: '#8db596',
    background: '#f1f8f4',
    accent: '#4caf50'
};

// Fixed the "initialAddress is not defined" error
const initialAddress = {
    country: '',
    state: '',
    district: '',
    city: '',
    pinCode: ''
};

const Placement = () => {
    const eduCompanyData = [
        { id: 1, name: 'TCS', role: 'System Engineer', students: 157, package: '7.5 LPA', growth: '+8%' },
        { id: 2, name: 'Infosys', role: 'Power Programmer', students: 90, package: '9.0 LPA', growth: '+12%' },
        { id: 3, name: 'Wipro', role: 'Project Engineer', students: 70, package: '6.5 LPA', growth: '+5%' },
        { id: 4, name: 'Cognizant', role: 'Analyst', students: 50, package: '6.0 LPA', growth: '+10%' },
        { id: 5, name: 'Accenture', role: 'Associate Software Engineer', students: 102, package: '8.2 LPA', growth: '+15%' },
    ];

    const [eduFormData, setEduFormData] = useState({
        startupName: '',
        legalStatus: '',
        dateOfEstablishment: '',
        primarySector: '',
        companyPAN: '',
        currentTeamSize: '',
        maleCount: '',
        femaleCount: '',
        numberOfBranches: 1,
        branchAddresses: [{ ...initialAddress }]
    });

    const [eduErrors, setEduErrors] = useState({});

    // Handles Address changes for specific branch index
    const handleAddressChange = (index, field) => (event) => {
        const newAddresses = [...eduFormData.branchAddresses];
        newAddresses[index][field] = event.target.value;
        setEduFormData({ ...eduFormData, branchAddresses: newAddresses });
    };

    const eduHandleBranchCountChange = (e) => {
        const count = parseInt(e.target.value) || 0;
        if (count > 20) return; // Guard rail from your logic

        let updatedAddresses = [...eduFormData.branchAddresses];
        if (count > updatedAddresses.length) {
            for (let i = updatedAddresses.length; i < count; i++) {
                updatedAddresses.push({ ...initialAddress });
            }
        } else {
            updatedAddresses = updatedAddresses.slice(0, count);
        }

        setEduFormData({
            ...eduFormData,
            numberOfBranches: count,
            branchAddresses: updatedAddresses
        });
    };

    const eduHandleInputChange = (field) => (event) => {
        setEduFormData({ ...eduFormData, [field]: event.target.value });
    };

    const eduHandleSubmit = () => {
        console.log("Form Submitted:", eduFormData);
        alert("Company Registered Successfully!");
    };

    const eduHandleReset = () => {
        setEduFormData({
            startupName: '', legalStatus: '', dateOfEstablishment: '',
            primarySector: '', companyPAN: '', currentTeamSize: '',
            maleCount: '', femaleCount: '', numberOfBranches: 1,
            branchAddresses: [{ ...initialAddress }]
        });
    };

    return (
        <Box sx={{ p: 3, backgroundColor: EDU_COLORS.background, minHeight: '100vh' }}>
            {/* Header and Stats section (keeping your existing style) */}
            <Typography variant="h4" fontWeight="800" color={EDU_COLORS.primary} sx={{ mb: 4 }}>
                Career Launchpad
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="subtitle2" color="textSecondary">Students Placed</Typography>
                        <Typography variant="h3" fontWeight="bold">375</Typography>
                        <LinearProgress variant="determinate" value={82} sx={{ mt: 2, height: 8, borderRadius: 5, bgcolor: '#eee', '& .MuiLinearProgress-bar': { bgcolor: EDU_COLORS.accent } }} />
                    </Paper>
                </Grid>
                {/* Add other Stat Cards here as per your previous code */}
            </Grid>

            {/* Registration Form */}
            <Card sx={{ border: `2px solid ${EDU_COLORS.primary}`, borderRadius: 2 }}>
                <Box sx={{ bgcolor: EDU_COLORS.primary, color: 'white', p: 2 }}>
                    <Typography variant="h6">New Company Registration</Typography>
                </Box>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Startup Name *" value={eduFormData.startupName} onChange={eduHandleInputChange('startupName')} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField select fullWidth label="Legal Status *" value={eduFormData.legalStatus} onChange={eduHandleInputChange('legalStatus')}>
                                <MenuItem value="Private Limited">Private Limited</MenuItem>
                                <MenuItem value="LLP">LLP</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth type="number" label="Number of Branches" value={eduFormData.numberOfBranches} onChange={eduHandleBranchCountChange} />
                        </Grid>

                        {/* Dynamic Branch Address Sections */}
                        {eduFormData.branchAddresses.map((addr, index) => (
                            <Grid item xs={12} key={index}>
                                <Box sx={{ mt: 2, p: 2, border: '1px dashed #ccc', borderRadius: 2 }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                                        <LocationOnIcon sx={{ mr: 1, color: EDU_COLORS.accent }} /> Branch {index + 1} Address
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <TextField fullWidth size="small" label="City" value={addr.city} onChange={handleAddressChange(index, 'city')} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField fullWidth size="small" label="State" value={addr.state} onChange={handleAddressChange(index, 'state')} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField fullWidth size="small" label="Pin Code" value={addr.pinCode} onChange={handleAddressChange(index, 'pinCode')} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                        <Button variant="contained" onClick={eduHandleSubmit} sx={{ bgcolor: EDU_COLORS.primary, px: 4 }}>Submit</Button>
                        <Button variant="outlined" color="error" onClick={eduHandleReset}>Reset</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Placement;