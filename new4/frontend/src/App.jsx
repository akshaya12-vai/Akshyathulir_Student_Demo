import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout and Page Imports
import DashboardLayout from './components/DashboardLayout';
import StatsDashboard from './components/StatsDashboard';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import Trainers from './components/Trainers';
import Placement from './components/Placement';

// The layout uses MUI's styled API, which requires a theme context.
const theme = createTheme({
  palette: {
    primary: { main: '#1a4d2e' },
    background: { default: '#f8fafc' },
  },
  shape: { borderRadius: 12 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>
        <Routes>
          {/* Main Dashboard paths */}
          <Route path="/" element={<StatsDashboard />} />
          <Route path="/today" element={<StatsDashboard />} />
          <Route path="/week" element={<StatsDashboard />} />
          <Route path="/month" element={<StatsDashboard />} />
          <Route path="/six-months" element={<StatsDashboard />} />

          {/* Other Pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
       <Route path="/certificates" element={<Certificates />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/placement" element={<Placement />} />
        </Routes>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;