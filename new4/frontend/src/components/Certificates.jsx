import React, { useState } from 'react';
import {
  Box, Typography, Button, Grid, Paper,
  TextField, InputAdornment, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, IconButton, Stack,Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Branding Colors
  const themeColors = {
    primary: '#1a4d2e',
    secondary: '#42a5f5',
    border: '#d1d5db'
  };

  const stats = [
    { label: 'Total Issued', value: '2,150', icon: <EmojiEventsIcon />, color: '#2e7d32', bg: '#e8f5e9' },
    { label: 'Verified This Month', value: '156', icon: <CheckCircleOutlineIcon />, color: '#1976d2', bg: '#e3f2fd' },
    { label: 'Pending Issue', value: '24', icon: <ErrorOutlineIcon />, color: '#ed6c02', bg: '#fff3e0' },
  ];

  const certificateData = [
    { id: 'CERT001', student: 'Alice Johnson', course: 'Full Stack Web Development', compDate: '2024-01-15', issueDate: '2024-01-18', status: 'Issued' },
    { id: 'CERT002', student: 'Bob Williams', course: 'Data Science & Analytics', compDate: '2024-01-20', issueDate: '2024-01-22', status: 'Issued' },
    { id: 'CERT003', student: 'Carol Davis', course: 'AI & Machine Learning', compDate: '2024-01-25', issueDate: '-', status: 'Pending' },
    { id: 'CERT004', student: 'David Miller', course: 'Cloud Computing AWS', compDate: '2024-01-28', issueDate: '2024-01-30', status: 'Issued' },
  ];

  const filteredData = certificateData.filter(item => 
    item.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* HEADER SECTION */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight="900" sx={{ letterSpacing: '-1.5px', color: themeColors.primary }}>
            CERTIFICATES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Management and issuance portal for academic credentials.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <Button 
            variant="outlined" 
            sx={{ borderRadius: 0, borderColor: themeColors.primary, color: themeColors.primary, fontWeight: 'bold', px: 3 }}
          >
            VERIFY
          </Button>
          <Button 
            variant="contained" 
            sx={{ borderRadius: 0, bgcolor: themeColors.secondary, fontWeight: 'bold', px: 3, boxShadow: 'none' }}
          >
            GENERATE NEW
          </Button>
        </Stack>
      </Box>

      {/* STATS SECTION */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper 
              elevation={0} 
              sx={{ p: 3, borderRadius: 0, display: 'flex', alignItems: 'center', border: `1px solid ${themeColors.border}` }}
            >
              <Box sx={{ p: 1.5, borderRadius: 0, bgcolor: stat.bg, color: stat.color, mr: 2, display: 'flex' }}>
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="bold">{stat.value}</Typography>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        
        {/* PREVIEW PANEL */}
        <Grid size={12} >
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1, textTransform: 'uppercase' }}>Template Preview</Typography>
          <Paper 
            sx={{ p: 3, borderRadius: 0, border: `1px solid ${themeColors.border}`, bgcolor: '#fff', textAlign: 'center' }}
          >
            <Box sx={{ p: 3, border: `5px double ${themeColors.primary}`, borderRadius: 0 }}>
              <EmojiEventsIcon sx={{ fontSize: 40, color: themeColors.primary, mb: 1 }} />
              <Typography variant="h5" sx={{ fontFamily: 'serif', mb: 1 }}>Certificate of Achievement</Typography>
              <Typography variant="caption" display="block">This honors the successful completion of</Typography>
              <Typography variant="h6" sx={{ my: 1, color: themeColors.secondary }}>[STUDENT NAME]</Typography>
              <Divider sx={{ my: 2, width: '60%', mx: 'auto' }} />
              <Typography variant="body2" fontWeight="bold">[COURSE TITLE]</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, px: 2 }}>
                <Typography variant="caption" sx={{ borderTop: '1px solid #000', pt: 0.5 }}>DATE</Typography>
                <Typography variant="caption" sx={{ borderTop: '1px solid #000', pt: 0.5 }}>SIGNATURE</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* DATA TABLE PANEL */}
        <Grid size={12}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1, textTransform: 'uppercase' }}>Issuance Log</Typography>
          <Paper sx={{ borderRadius: 0, border: `1px solid ${themeColors.border}`, overflow: 'hidden' }}>
            <Box sx={{ p: 2, display: 'flex', gap: 1, borderBottom: `1px solid ${themeColors.border}` }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search database..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  sx: { borderRadius: 0 },
                  startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),
                }}
              />
              <IconButton sx={{ borderRadius: 0, border: `1px solid ${themeColors.border}` }}><PrintIcon /></IconButton>
              <IconButton sx={{ borderRadius: 0, border: `1px solid ${themeColors.border}` }}><DownloadIcon /></IconButton>
            </Box>

            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    {['ID', 'STUDENT', 'COURSE', 'STATUS', 'ACTIONS'].map((head) => (
                      <TableCell key={head} sx={{ fontWeight: 'bold', bgcolor: '#f3f4f6', borderRadius: 0 }}>{head}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{row.id}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{row.student}</TableCell>
                      <TableCell sx={{ fontSize: '0.8rem' }}>{row.course}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.status} 
                          size="small" 
                          sx={{ borderRadius: 0, fontWeight: 'bold', fontSize: '0.65rem', height: 20 }} 
                          color={row.status === 'Issued' ? 'success' : 'warning'}
                        />
                      </TableCell>
                      <TableCell>
                        <Stack direction="row">
                          <IconButton size="small"><VisibilityIcon sx={{ fontSize: 18 }} /></IconButton>
                          <IconButton size="small"><DownloadIcon sx={{ fontSize: 18 }} /></IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Certificates;