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
  Avatar,
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

const TrainerForm = () => {
  const [formData, setFormData] = useState({
    trainerId: "",
    trainerName: "",
    gender: "",
    dob: "",

    qualification: "",
    specialization: "",
    certifications: "",
    totalExperience: "",
    industryExperience: "",

    coursesAssigned: "",
    subjectsHandled: "",
    batchCount: "",
    trainingMode: "",
    sessionType: "",

    studentsTrained: "",
    feedbackRating: "",
    performanceGrade: "",
    lastEvaluationDate: "",

    email: "",
    mobile: "",
    alternateMobile: "",

    joiningDate: "",
    employmentType: "",
    salary: "",
    status: "",

    address: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Trainer Details Submitted Successfully");
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
      >
        Trainer Management Form
      </Typography>

      {/* Basic Information */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Basic Information</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 2 }} textAlign="center">
              <Avatar sx={{ width: 80, height: 80, mx: "auto" }} />
              <Button size="small">Upload Photo</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField fullWidth label="Trainer ID" name="trainerId" value={formData.trainerId} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField fullWidth label="Trainer Name" name="trainerName" value={formData.trainerName} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Select
                fullWidth
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Gender"}
              >
                <MenuItem value="">Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                type="date"
                fullWidth
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Academic & Skill Details */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Academic & Skill Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Highest Qualification" name="qualification" value={formData.qualification} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Specialization / Expertise" name="specialization" value={formData.specialization} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Certifications" name="certifications" value={formData.certifications} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Total Experience (Years)" name="totalExperience" value={formData.totalExperience} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Industry Experience (Years)" name="industryExperience" value={formData.industryExperience} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Teaching & Assignment Details */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Teaching & Assignment Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Courses Assigned" name="coursesAssigned" value={formData.coursesAssigned} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Subjects / Modules Handled" name="subjectsHandled" value={formData.subjectsHandled} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Batch Count" name="batchCount" value={formData.batchCount} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="trainingMode"
                value={formData.trainingMode}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Training Mode"}
              >
                <MenuItem value="">Training Mode</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
                <MenuItem value="Offline">Offline</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Session Type"}
              >
                <MenuItem value="">Session Type</MenuItem>
                <MenuItem value="Weekday">Weekday</MenuItem>
                <MenuItem value="Weekend">Weekend</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Performance & Tracking */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Performance & Tracking</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Total Students Trained" name="studentsTrained" value={formData.studentsTrained} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Student Feedback Rating" name="feedbackRating" value={formData.feedbackRating} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Performance Grade" name="performanceGrade" value={formData.performanceGrade} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                type="date"
                fullWidth
                label="Last Evaluation Date"
                InputLabelProps={{ shrink: true }}
                name="lastEvaluationDate"
                value={formData.lastEvaluationDate}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Contact & Employment */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Contact & Employment Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Email ID" name="email" value={formData.email} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Alternate Contact Number" name="alternateMobile" value={formData.alternateMobile} onChange={handleChange} />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                type="date"
                fullWidth
                label="Joining Date"
                InputLabelProps={{ shrink: true }}
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Employment Type"}
              >
                <MenuItem value="">Employment Type</MenuItem>
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="status"
                value={formData.status}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Current Status"}
              >
                <MenuItem value="">Current Status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="On Leave">On Leave</MenuItem>
              </Select>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Salary / Honorarium" name="salary" value={formData.salary} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Additional */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Additional Information</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField multiline rows={3} fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField multiline rows={3} fullWidth label="Remarks / Notes" name="remarks" value={formData.remarks} onChange={handleChange} />
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
          Submit Trainer Details
        </Button>
      </Box>
    </Container>
  );
};

export default TrainerForm;
