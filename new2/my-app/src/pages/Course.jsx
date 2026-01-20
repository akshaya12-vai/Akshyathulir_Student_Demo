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

const Course = () => {
  const [formData, setFormData] = useState({
    courseId: "",
    courseName: "",
    category: "",
    description: "",
    level: "",

    duration: "",
    totalHours: "",
    startDate: "",
    endDate: "",
    schedule: "",

    trainer: "",
    prerequisites: "",
    language: "",
    trainingMode: "",
    certificationProvided: "",

    batchSize: "",
    minEnrollment: "",
    maxEnrollment: "",
    totalEnrolled: "",

    courseFee: "",
    feeType: "",
    discount: "",
    tax: "",

    courseStatus: "",
    rating: "",
    lastUpdated: "",

    syllabus: "",
    learningOutcomes: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Course Submitted Successfully");
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
      >
        Course Management Form
      </Typography>

      {/* Basic Course Information */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Basic Course Information</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course ID" name="courseId" value={formData.courseId} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course Name" name="courseName" value={formData.courseName} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course Category" name="category" value={formData.category} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField multiline rows={3} fullWidth label="Course Description" name="description" value={formData.description} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Select
                fullWidth
                name="level"
                value={formData.level}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Course Level"}
              >
                <MenuItem value="">Course Level</MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Duration & Schedule */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Duration & Schedule</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course Duration (Weeks / Months)" name="duration" value={formData.duration} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Total Hours" name="totalHours" value={formData.totalHours} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="Start Date" InputLabelProps={{ shrink: true }} name="startDate" value={formData.startDate} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="End Date" InputLabelProps={{ shrink: true }} name="endDate" value={formData.endDate} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Class Schedule"}
              >
                <MenuItem value="">Class Schedule</MenuItem>
                <MenuItem value="Morning">Morning</MenuItem>
                <MenuItem value="Evening">Evening</MenuItem>
                <MenuItem value="Weekend">Weekend</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Academic & Training */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Academic & Training Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Trainer Assigned" name="trainer" value={formData.trainer} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Prerequisites" name="prerequisites" value={formData.prerequisites} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Course Language" name="language" value={formData.language} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
            <Grid size={{ xs: 12 }}>
              <Select
                fullWidth
                name="certificationProvided"
                value={formData.certificationProvided}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Certification Provided"}
              >
                <MenuItem value="">Certification Provided</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Enrollment */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Enrollment Details</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Batch Size" name="batchSize" value={formData.batchSize} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Minimum Enrollment" name="minEnrollment" value={formData.minEnrollment} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Maximum Enrollment" name="maxEnrollment" value={formData.maxEnrollment} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Total Enrolled Students" name="totalEnrolled" value={formData.totalEnrolled} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Fee Structure */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Fee Structure</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Course Fee" name="courseFee" value={formData.courseFee} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Select
                fullWidth
                name="feeType"
                value={formData.feeType}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Fee Type"}
              >
                <MenuItem value="">Fee Type</MenuItem>
                <MenuItem value="One-time">One-time</MenuItem>
                <MenuItem value="Installments">Installments</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Discount (%)" name="discount" value={formData.discount} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField fullWidth label="Tax / GST" name="tax" value={formData.tax} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Status & Tracking */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Course Status & Tracking</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Select
                fullWidth
                name="courseStatus"
                value={formData.courseStatus}
                onChange={handleChange}
                displayEmpty
                renderValue={(v) => v || "Course Status"}
              >
                <MenuItem value="">Course Status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Upcoming">Upcoming</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Course Rating" name="rating" value={formData.rating} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="Last Updated Date" InputLabelProps={{ shrink: true }} name="lastUpdated" value={formData.lastUpdated} onChange={handleChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card sx={styles.card}>
        <Box sx={styles.header}>Additional Information</Box>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Course Syllabus (Upload / Link)" name="syllabus" value={formData.syllabus} onChange={handleChange} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField multiline rows={3} fullWidth label="Learning Outcomes" name="learningOutcomes" value={formData.learningOutcomes} onChange={handleChange} />
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
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Course;
