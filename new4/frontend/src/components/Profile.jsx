import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Avatar,
    Paper,
    IconButton,
    Divider,
    Stack
} from '@mui/material';
import {
    Edit as EditIcon,
    PhotoCamera as PhotoCameraIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Lock as LockIcon,
    School as SchoolIcon
} from '@mui/icons-material';

const InstituteProfile = () => {
    return (
        <Box sx={{ bgcolor: '#f8fafd', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" fontWeight="bold" color="#1a202c">
                        Profile
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Manage your institute and admin profile information.
                    </Typography>
                </Box>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/* Left Column: Sidebar Card */}

                    <Grid size={4}>
                        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, textAlign: 'center', border: '1px solid #e2e8f0',height:'100%' }}>
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                                <Avatar
                                    sx={{ width: 100, height: 100, bgcolor: '#19841f', margin: '0 auto' }}
                                >
                                    <SchoolIcon sx={{ fontSize: 50 }} />
                                </Avatar>
                                <IconButton
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        bgcolor: 'white',
                                        border: '1px solid #e2e8f0',
                                        '&:hover': { bgcolor: '#19841f' }
                                    }}
                                >
                                    <PhotoCameraIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                            </Box>

                            <Typography variant="h6" fontWeight="bold">TechPro Institute</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Premier IT Training Center
                            </Typography>

                            <Divider sx={{ my: 3 }} />

                            <Stack spacing={2} alignItems="flex-start" sx={{ px: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <EmailIcon fontSize="small" color="action" />
                                    <Typography variant="body2">admin@techpro.edu</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <PhoneIcon fontSize="small" color="action" />
                                    <Typography variant="body2">+1 (555) 123-4567</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <LocationOnIcon fontSize="small" color="action" />
                                    <Typography variant="body2" textAlign="left">123 Tech Street, Silicon Valley</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>

                    {/* Right Column: Form Fields */}
                    <Grid size={8}>
                        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid #e2e8f0' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography variant="h6" fontWeight="bold">Institute Information</Typography>
                                <Button
                                    startIcon={<EditIcon />}
                                    variant="outlined"
                                    size="small"
                                    sx={{ textTransform: 'none', borderRadius: 2, color: 'text.primary', borderColor: '#e2e8f0' }}
                                >
                                    Edit Profile
                                </Button>
                            </Box>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Institute Name</Typography>
                                    <TextField fullWidth placeholder="TechPro Institute" variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Admin Name</Typography>
                                    <TextField fullWidth placeholder="John Anderson" variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Email Address</Typography>
                                    <TextField fullWidth placeholder="admin@techpro.edu" variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Phone Number</Typography>
                                    <TextField fullWidth placeholder="+1 (555) 123-4567" variant="outlined" size="small" />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Address</Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
                                        placeholder="123 Tech Street, Building A, Silicon Valley, CA 94025"
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Institute Description</Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        placeholder="Premier IT training center specializing in cutting-edge technology..."
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    {/* Security Settings Section */}
                    <Grid size={12}>
                        <Paper elevation={0} sx={{ p: 4, mt: 3, borderRadius: 3, border: '1px solid #e2e8f0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <LockIcon fontSize="small" />
                                <Typography variant="h6" fontWeight="bold">Security Settings</Typography>
                            </Box>

                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Current Password</Typography>
                                    <TextField fullWidth type="password" placeholder="********" size="small" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">New Password</Typography>
                                    <TextField fullWidth type="password" placeholder="********" size="small" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="600">Confirm Password</Typography>
                                    <TextField fullWidth type="password" placeholder="********" size="small" />
                                </Grid>
                            </Grid>

                            <Button
                                variant="contained"
                                sx={{ mt: 3, bgcolor: '#19841f', textTransform: 'none', px: 3, py: 1, borderRadius: 2 }}
                            >
                                Update Password
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default InstituteProfile;