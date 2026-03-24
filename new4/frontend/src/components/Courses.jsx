import React, { useEffect, useState } from 'react';
import API from "../api";
import {
  Box, Typography, Button, TextField, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  Chip, IconButton, Modal, Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    course_id: "",
    name: "",
    department: "",
    duration: "",
    fees: "",
    trainer: ""
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await API.post("/courses", form);
    setOpen(false);
    fetchCourses();
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">Courses</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          ADD COURSE
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Dept</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Fees</TableCell>
              <TableCell>Trainer</TableCell>
              <TableCell>Enrolled</TableCell>
              <TableCell>Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.course_id}</TableCell>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.department}</TableCell>
                <TableCell>{c.duration}</TableCell>
                <TableCell>{c.fees}</TableCell>
                <TableCell>{c.trainer}</TableCell>
                <TableCell>
                  <GroupsIcon fontSize="small" /> {c.enrolled}
                </TableCell>
                <TableCell>
                  <Chip label={c.status} color="success" size="small" />
                </TableCell>
                <TableCell>
                  <IconButton><MoreVertIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Add Course</Typography>
          <Grid container spacing={2}>
            {["course_id", "name", "department", "duration", "fees", "trainer"].map((field) => (
              <Grid item xs={6} key={field}>
                <TextField
                  name={field}
                  label={field.toUpperCase()}
                  fullWidth
                  size="small"
                  onChange={handleChange}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Create Course
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Courses;
