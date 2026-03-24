import React, { useState } from 'react';
import {
  Box, Typography, Button, Grid, Paper, TextField, 
  InputAdornment, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Chip, IconButton, Stack, Avatar, Card,
  Modal, MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false); // Added state for Modal

  const themeColors = {
    primary: '#1a4d2e',
    secondary: '#42a5f5',
    background: '#f8fafc'
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 500 },
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  };

  const trainersData = [
    { id: 'TR001', name: 'Dr. Robert Fox', expertise: 'Full Stack Dev', rating: 4.9, courses: 12, status: 'Active', email: 'robert.f@institute.com' },
    { id: 'TR002', name: 'Sarah Jenkins', expertise: 'Data Science', rating: 4.8, courses: 8, status: 'On Leave', email: 'sarah.j@institute.com' },
    { id: 'TR003', name: 'Michael Chen', expertise: 'UI/UX Design', rating: 4.7, courses: 15, status: 'Active', email: 'm.chen@institute.com' },
    { id: 'TR004', name: 'Emily Blunt', expertise: 'Cloud AWS', rating: 5.0, courses: 5, status: 'Active', email: 'emily.b@institute.com' },
  ];

  const filteredTrainers = trainersData.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, bgcolor: themeColors.background, minHeight: '100vh' }}>
      
      {/* HEADER */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight="800" sx={{ color: '#1e293b' }}>
            Trainer Directory
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View and manage your faculty members and their performance.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)} // Opens the Modal
          sx={{ 
            borderRadius: '10px', 
            bgcolor: themeColors.primary, 
            textTransform: 'none',
            fontWeight: '600', 
            px: 3, 
            '&:hover': { bgcolor: '#123520' }
          }}
        >
          Add New Trainer
        </Button>
      </Box>

      {/* STATS CARDS */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { label: 'Active Trainers', val: '24', icon: <SchoolIcon />, color: '#6366f1' },
          { label: 'Avg. Rating', val: '4.8', icon: <StarIcon />, color: '#f59e0b' },
          { label: 'Total Courses', val: '142', icon: <TrendingUpIcon />, color: '#10b981' }
        ].map((stat, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: `${stat.color}15`, color: stat.color, borderRadius: '12px', mr: 2 }}>
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="h4" fontWeight="700">{stat.val}</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="500">{stat.label}</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SEARCH BAR */}
      <TextField
        fullWidth
        placeholder="Search trainers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ 
          mb: 3, 
          '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'white' } 
        }}
        InputProps={{
          startAdornment: (<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>),
        }}
      />

      {/* TABLE */}
      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f1f5f9' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: '600' }}>Trainer</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Expertise</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Courses</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Rating</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTrainers.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ borderRadius: '10px', bgcolor: themeColors.primary }}>{row.name.charAt(0)}</Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="700">{row.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{row.id}</Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell><Chip label={row.expertise} size="small" sx={{ borderRadius: '6px' }} /></TableCell>
                <TableCell><Typography variant="body2">{row.courses} Assigned</Typography></TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#f59e0b' }}>
                    <StarIcon sx={{ fontSize: 18, mr: 0.5 }} />
                    <Typography variant="body2" fontWeight="700">{row.rating}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={row.status} size="small" sx={{ borderRadius: '8px', bgcolor: row.status === 'Active' ? '#dcfce7' : '#fef3c7', color: row.status === 'Active' ? '#166534' : '#92400e' }} />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small"><EmailIcon fontSize="small" /></IconButton>
                  <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ADD NEW TRAINER MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h5" fontWeight="800" mb={1} color="#1e293b">Register Trainer</Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>Enter the details to add a new faculty member.</Typography>
          
          <Grid container spacing={2}>
            <Grid size={12}><TextField fullWidth label="Full Name" size="small" /></Grid>
            <Grid size={12}><TextField fullWidth label="Email Address" size="small" /></Grid>
            <Grid size={12}>
              <TextField select fullWidth label="Primary Expertise" size="small" defaultValue="">
                <MenuItem value="Full Stack">Full Stack Development</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="UI/UX">UI/UX Design</MenuItem>
                <MenuItem value="Cloud">Cloud Computing</MenuItem>
              </TextField>
            </Grid>
            <Grid size={6}><TextField fullWidth label="Employee ID" size="small" /></Grid>
            <Grid size={6}><TextField fullWidth label="Experience (Years)" type="number" size="small" /></Grid>
            
            <Grid size={12}>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button fullWidth variant="contained" sx={{ bgcolor: themeColors.primary, borderRadius: '8px', py: 1, fontWeight: 'bold' }}>
                  Add Trainer
                </Button>
                <Button fullWidth variant="outlined" onClick={() => setOpen(false)} sx={{ borderRadius: '8px', color: 'text.secondary', borderColor: '#e2e8f0' }}>
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Trainers;