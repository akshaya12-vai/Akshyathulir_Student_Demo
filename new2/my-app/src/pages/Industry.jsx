import React, { useState } from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Box
} from "@mui/material";

const styles = {
    header: {
        backgroundColor: "#0b5e00",
        color: "#fff",
        padding: "12px 20px",
        fontWeight: 600,
        borderRadius: "6px 6px 0 0",
    },
    card: {
        border: "1px solid #0b5e00",
        borderRadius: "6px",
        mb: 4,
    },
};

const Industry = () => {
    const [formData, setFormData] = useState({
        partnershipId: "",
        partnershipName: "",
        companyName: "",
        industryType: "",
        website: "",

        contactName: "",
        designation: "",
        contactNumber: "",
        email: "",

        mouNumber: "",
        mouStartDate: "",
        mouEndDate: "",
        mouStatus: "",

        address: "",
        city: "",
        state: "",
        country: "",

        studentsBenefited: "",
        lastCollaborationDate: "",
        partnershipStatus: "",

        remarks: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(formData);
        alert("Form Submitted Successfully");
    };

    return (
        <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
            <Typography variant="h4" align="center" sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}>
                Institute – Industry Partnership Form
            </Typography>

            {/* Partnership Details */}
            <Card sx={styles.card}>
                <Box sx={styles.header}>Partnership Details</Box>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Partnership ID" name="partnershipId" value={formData.partnershipId} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Industry Partnership Name" name="partnershipName" value={formData.partnershipName} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Industry Type / Sector" name="industryType" value={formData.industryType} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth label="Company Website" name="website" value={formData.website} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Contact Person */}
            <Card sx={styles.card}>
                <Box sx={styles.header}>Contact Person Details</Box>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Contact Person Name" name="contactName" value={formData.contactName} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Email ID" name="email" value={formData.email} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* MoU Details */}
            <Card sx={styles.card}>
                <Box sx={styles.header}>MoU & Agreement Details</Box>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="MoU Number" name="mouNumber" value={formData.mouNumber} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Select
                                fullWidth
                                name="mouStatus"
                                value={formData.mouStatus}
                                onChange={handleChange}
                                displayEmpty
                                renderValue={(v) => v || "MoU Status"}
                            >
                                <MenuItem value="">MoU Status</MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Expired">Expired</MenuItem>
                                <MenuItem value="Terminated">Terminated</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField type="date" fullWidth label="MoU Start Date" InputLabelProps={{ shrink: true }} name="mouStartDate" value={formData.mouStartDate} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField type="date" fullWidth label="MoU End Date" InputLabelProps={{ shrink: true }} name="mouEndDate" value={formData.mouEndDate} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Location */}
            <Card sx={styles.card}>
                <Box sx={styles.header}>Location Details</Box>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth label="Company Address" name="address" value={formData.address} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="State" name="state" value={formData.state} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Country" name="country" value={formData.country} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Tracking & Remarks */}
            <Card sx={styles.card}>
                <Box sx={styles.header}>Partnership Tracking</Box>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField fullWidth label="Students Benefited" name="studentsBenefited" value={formData.studentsBenefited} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField type="date" fullWidth label="Last Collaboration Date" InputLabelProps={{ shrink: true }} name="lastCollaborationDate" value={formData.lastCollaborationDate} onChange={handleChange} />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Select
                                fullWidth
                                name="partnershipStatus"
                                value={formData.partnershipStatus}
                                onChange={handleChange}
                                displayEmpty
                                renderValue={(v) => v || "Partnership Status"}
                            >
                                <MenuItem value="">Partnership Status</MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth multiline rows={3} label="Remarks / Notes" name="remarks" value={formData.remarks} onChange={handleChange} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Box textAlign="center" mt={4}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#0b5e00",
                        px: 5,
                        py: 1.5,
                        "&:hover": { backgroundColor: "#084600" },
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Industry;
