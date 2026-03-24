import React, { useState } from 'react';
import { 
  Box, Drawer, AppBar, Toolbar, List, Typography, 
  ListItemButton, ListItemIcon, ListItemText, 
  Avatar, IconButton, Divider, styled 
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

// Mixins for the drawer animations
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: '#1a4d2e',
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  width: theme.spacing(9),
  backgroundColor: '#1a4d2e',
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open ? {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    } : {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // ERROR-FIX: Must be inside BrowserRouter

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    
    { text: 'Courses', icon: <SchoolIcon />, path: '/courses' },
    { text: 'Placement', icon: <ShowChartIcon />, path: '/placement' },
    { text: 'Trainers', icon: <PeopleIcon />, path: '/trainers' },
    { text: 'Certificates', icon: <BadgeIcon />, path: '/certificates' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f1f5f9' }}>
      <StyledDrawer variant="permanent" open={open}>
        <Toolbar sx={{ px: 2, display: 'flex', justifyContent: open ? 'flex-start' : 'center' }}>
          <Avatar sx={{ bgcolor: 'white', color: '#1a4d2e', width: 32, height: 32 }}>🎓</Avatar>
          {open && (
            <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
              Akshaya Thulir
            </Typography>
          )}
        </Toolbar>
        <List sx={{ px: 1 }}>
          {menuItems.map((item) => (
            <ListItemButton 
              key={item.text} 
              component={Link} 
              to={item.path}
              sx={{ 
                borderRadius: '8px',
                mb: 0.5,
                justifyContent: open ? 'initial' : 'center',
                bgcolor: location.pathname === item.path ? 'rgba(255,255,255,0.15)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 'auto', mb: 2, px: 1 }}>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }} />
          <ListItemButton sx={{ borderRadius: '8px', justifyContent: open ? 'initial' : 'center' }}>
            <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0, color: 'white' }} />
          </ListItemButton>
        </Box>
      </StyledDrawer>

      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: '#1a4d2e', color: 'white', borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar>
            <IconButton color="inherit" onClick={() => setOpen(!open)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" color="White">
              Training Institute
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3, flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;