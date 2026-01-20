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
  Box,
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

const Certification = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    batchYear: "",
    courseName: "",
    trainerName: "",

    certificationId: "",
    certificationName: "",
    certificationType: "",
    certificateLevel: "",

    issueDate: "",
    expiryDate: "",
    certificateStatus: "",

    verificationCode: "",
    certificateUrl: "",
    issuedBy: "",
    authorizedSignatory: "",

    grade: "",
    assessmentResult: "",

    remarks: "",
    reissueReason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Certification Submitted Successfully");
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
      >
        Student Certification Form
      </Typography>

      {/* Student Details */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Student Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Student ID" name="studentId" value={formData.studentId} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Batch / Academic Year" name="batchYear" value={formData.batchYear} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course Name" name="courseName" value={formData.courseName} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Trainer Name" name="trainerName" value={formData.trainerName} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Certification Details */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Certification Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Certification ID" name="certificationId" value={formData.certificationId} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Certification Name" name="certificationName" value={formData.certificationName} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Select
                fullWidth
                name="certificationType"
                value={formData.certificationType}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Certification Type"}
              >
                <MenuItem value="">Certification Type</MenuItem>
                <MenuItem value="Course Completion">Course Completion</MenuItem>
                <MenuItem value="Merit">Merit</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Skill">Skill</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Select
                fullWidth
                name="certificateLevel"
                value={formData.certificateLevel}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Certificate Level"}
              >
                <MenuItem value="">Certificate Level</MenuItem>
                <MenuItem value="Basic">Basic</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Issue & Validity */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Issue & Validity</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="Issue Date" InputLabelProps={{ shrink: true }} name="issueDate" value={formData.issueDate} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="Expiry Date" InputLabelProps={{ shrink: true }} name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="certificateStatus"
                value={formData.certificateStatus}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Certificate Status"}
              >
                <MenuItem value="">Certificate Status</MenuItem>
                <MenuItem value="Issued">Issued</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Revoked">Revoked</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Verification & Tracking</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Verification Code / QR Code" name="verificationCode" value={formData.verificationCode} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Certificate URL / Download Link" name="certificateUrl" value={formData.certificateUrl} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Issued By (Institute Name)" name="issuedBy" value={formData.issuedBy} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Authorized Signatory" name="authorizedSignatory" value={formData.authorizedSignatory} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Performance & Additional Info */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Performance & Additional Information</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Grade / Score" name="grade" value={formData.grade} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Assessment Result" name="assessmentResult" value={formData.assessmentResult} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField multiline rows={3} fullWidth label="Remarks / Notes" name="remarks" value={formData.remarks} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Re-issue Reason (if applicable)" name="reissueReason" value={formData.reissueReason} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#0b5e00", px: 5, py: 1.5 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Certification;
