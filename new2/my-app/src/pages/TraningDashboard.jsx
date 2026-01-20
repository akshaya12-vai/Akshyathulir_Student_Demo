import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";
import { useNavigate, useLocation } from "react-router-dom";
// Card

import { Paper, Grid } from "@mui/material";

/* Icons */
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessIcon from "@mui/icons-material/Business";
// chart
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,

} from "recharts";
// FILTER


/* ---------- CONSTANTS (MATCH IMAGE) ---------- */
const SIDEBAR_OPEN = 250;
const SIDEBAR_CLOSED = 70;
const HEADER_HEIGHT = 70;
const GAP = 6;

/* ---------- SIDEBAR ---------- */
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
    width: open ? SIDEBAR_OPEN : SIDEBAR_CLOSED,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: open ? SIDEBAR_OPEN : SIDEBAR_CLOSED,
        backgroundColor: "#0b5e00",
        color: "#FFFFFF",
        boxSizing: "border-box",
        overflowX: "hidden",
        transition: "width 0.3s ease",
    },
}));





/* ---------- HEADER ---------- */
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
    backgroundColor: "#0b5e00",
    height: HEADER_HEIGHT,
    width: `calc(100% - ${(open ? SIDEBAR_OPEN : SIDEBAR_CLOSED) + GAP
        }px)`,
    marginLeft: (open ? SIDEBAR_OPEN : SIDEBAR_CLOSED) + GAP,
    marginTop: GAP,
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
}));
// FILTER



// Charts
const StatCard = ({
    title,
    value,
    subtext,
    today,
    percent,
    icon,
}) => (
    <Card
        sx={{
            flex: 1,
            minWidth: { xs: "100%", sm: 310 },
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            bgcolor: "#f1f8e9",
        }}
    >
        <CardContent>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                    <Avatar sx={iconStyle}>{icon}</Avatar>
                    <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                        {title}
                    </Typography>
                </Box>

                <Avatar sx={{ ...iconStyle, width: 32, height: 32 }}>
                    <TrendingUpIcon fontSize="small" />
                </Avatar>
            </Box>

            {/* Count */}
            <Typography
                sx={{
                    mt: 2,
                    fontWeight: 700,
                    color: "#2e7d32",
                    fontSize: { xs: "1.8rem", sm: "2.5rem" },
                }}
            >
                {value}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {subtext}
            </Typography>

            {/* Footer */}
            <Box display="flex" alignItems="center" mt={2}>
                <Typography fontSize={13} fontWeight={600} color="#2e7d32">
                    +{today} today
                </Typography>

                <Box sx={badgeStyle}>↑ {percent}%</Box>
            </Box>
        </CardContent>
    </Card>
);
const iconStyle = {
    bgcolor: "#e8f5e9",
    color: "#2e7d32",
    width: { xs: 36, sm: 40 },
    height: { xs: 36, sm: 40 },
};

const badgeStyle = {
    ml: "auto",
    px: 1.2,
    py: 0.4,
    bgcolor: "#e8f5e9",
    borderRadius: 1,
    fontSize: 12,
    fontWeight: 600,
    color: "#2e7d32",
};


// chart

const data = [
    { date: "Apr 1", Direct: 12, Referral: 8, Organic: 5 },
    { date: "Apr 2", Direct: 15, Referral: 9, Organic: 6 },
    { date: "Apr 3", Direct: 20, Referral: 12, Organic: 7 },
    { date: "Apr 4", Direct: 25, Referral: 14, Organic: 9 },
    { date: "Apr 5", Direct: 30, Referral: 20, Organic: 11 },

    // ... continue for all days
];
const datas = [
    { date: "Jan", Direct: 40, Referral: 24, Organic: 24 },
    { date: "Feb", Direct: 30, Referral: 13, Organic: 22 },
    { date: "Mar", Direct: 20, Referral: 98, Organic: 22 },
    { date: "Apr", Direct: 27, Referral: 39, Organic: 20 },
    { date: "May", Direct: 18, Referral: 48, Organic: 21 },
    { date: "Jun", Direct: 23, Referral: 38, Organic: 25 },
    { date: "Jul", Direct: 34, Referral: 43, Organic: 21 },
];

export default function Layout({ children }) {
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const tabs = [
        { label: "TOTAL", path: "/" },
        { label: "TODAY", path: "/today" },
        { label: "THIS WEEK", path: "/week" },
        { label: "THIS MONTH", path: "/month" },
        { label: "6 MONTHS", path: "/six-months" },
    ];

    return (
        <Box sx={{ display: "flex", backgroundColor: "#F4F8F6", minHeight: "100vh" }}>
            <CssBaseline />

            {/* ---------- SIDEBAR ---------- */}
            <Drawer variant="permanent" open={drawerOpen}>

                <Toolbar
                    sx={{
                        height: HEADER_HEIGHT,
                        justifyContent: drawerOpen ? "flex-start" : "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, opacity: drawerOpen ? 1 : 0 }}
                    >
                        AkshayaThulir
                    </Typography>
                </Toolbar>

                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

                <List>
                    {[
                        { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
                        { text: "Profile", icon: <PersonIcon />, path: "Registerform" },
                        { text: "Course", icon: <SchoolIcon />, path: "/Course" },
                        { text: "Placement", icon: <EmojiEventsIcon />, path: "/Placement" },
                        { text: "Trainer", icon: <PersonIcon />, path: "/Trainer" },
                        { text: "Certification", icon: <VerifiedIcon />, path: "/Certification" },
                        { text: "Industry", icon: <HandshakeIcon />, path: "/Industry" }
                    ].map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={item.path}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: drawerOpen ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "#A7C4BC",
                                        minWidth: 0,
                                        mr: drawerOpen ? 2 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: drawerOpen ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>


                <Box sx={{ flexGrow: 1 }} />

                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                justifyContent: drawerOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: "#E57373",
                                    minWidth: 0,
                                    mr: drawerOpen ? 2 : "auto",
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Logout"
                                sx={{ opacity: drawerOpen ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            {/* ---------- MAIN AREA ---------- */}
            <Box sx={{ flexGrow: 1 }}>
                {/* HEADER */}
                <AppBar open={drawerOpen}>

                    <Toolbar >
                        <IconButton
                            color="inherit"
                            sx={{ mr: 2 }}
                            onClick={() => setDrawerOpen(!drawerOpen)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Training Dashboard
                        </Typography>

                        <AccountCircleIcon />
                    </Toolbar>
                </AppBar>



                {/* FILTER BAR */}
                <Box
                    sx={{
                        mt: { xs: 4, sm: 6, md: 10 },
                        p: { xs: 1, sm: 2 },
                        bgcolor: "#EAF3EF",
                        borderRadius: "14px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        overflowX: "auto",

                    }}
                >
                    <List
                        sx={{
                            display: "flex",
                            flexWrap: { xs: "wrap", sm: "nowrap" },
                            justifyContent: { xs: "center", sm: "space-between" },
                            gap: { xs: 1, sm: 2 },
                            p: 0,
                        }}
                    >
                        {tabs.map((tab) => {
                            const isActive = location.pathname === tab.path;

                            return (
                                <ListItem
                                    key={tab.label}
                                    onClick={() => navigate(tab.path)}
                                    sx={{
                                        width: "auto",
                                        px: { xs: 2, sm: 3 },
                                        py: 1,
                                        borderBottom: isActive ? "3px solid #2E7D32" : "none",
                                        color: isActive ? "#2E7D32" : "#5F6F68",
                                        fontWeight: 600,
                                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {tab.label}
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>


                {/* Card */}


                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",

                        alignItems: "flex-start",
                        // 👈 pushes cards below header

                    }}
                >


                    {/* Card */}

                    <Box sx={{ p: { xs: 4, sm: 6 } }}>
                        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <StatCard
                                    title="Total Users"
                                    value={20}
                                    subtext="All users"
                                    today={0}
                                    percent={0}
                                    icon={<PersonIcon fontSize="small" />}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <StatCard
                                    title="Placements"
                                    value={130}
                                    subtext="All users"
                                    today={130}
                                    percent={75}
                                    icon={<BusinessIcon fontSize="small" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <StatCard
                                    title="Placements"
                                    value={130}
                                    subtext="All users"
                                    today={130}
                                    percent={75}
                                    icon={<BusinessIcon fontSize="small" />}
                                />
                            </Grid>

                        </Grid>
                    </Box>


                    {/* Charts */}
                    <Grid container spacing={{ xs: 4, sm: 6, md: 8 }}>
  {/* Placement Chart */}
  <Grid item xs={12} md={6}>
    <Paper
      elevation={2}
      sx={{
        p: { xs: 1.5, sm: 2 },
        height: { xs: 300, sm: 380, md: 420 },
        width: "220%",
        borderRadius: 2,
        gap:"10%"
      }}
    >
      <Typography variant="h6" fontSize={{ xs: "1rem", md: "1.2rem" }}>
        Placement
      </Typography>

      <Typography variant="h4" sx={{ mb: 1 }} fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
        132 <Typography component="span" color="green" fontSize="0.9rem">+35%</Typography>
      </Typography>

      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f9d290ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Area type="monotone" dataKey="Direct" stroke="#d0573cff" fill="url(#colorDirect)" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>

  {/* Total Users Chart */}
  <Grid item xs={12} md={6}>
    <Paper
      elevation={3}
      sx={{
        p: { xs: 1.5, sm: 2 },
        height: { xs: 300, sm: 400, md: 450 },
        width: "100%",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" fontSize={{ xs: "1rem", md: "1.2rem" }}>
        Total Users
      </Typography>

      <Typography variant="h4" sx={{ mb: 1 }} fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
        137 <Typography component="span" color="green" fontSize="0.9rem">+35%</Typography>
      </Typography>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="Direct" fill="#f99090ff" />
          <Bar dataKey="Referral" fill="#199149ff" />
          <Bar dataKey="Organic" fill="#1565c0" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>
</Grid>

                    <Box sx={{ p: GAP }}>
                        {/* Grid for cards */}
                        <Grid container spacing={2}>
                            {/* Student Enrollment Card */}
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                                        bgcolor: "white",
                                        color: "black",
                                        height: "100%",
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600}>
                                            Student Enrollment
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                                            Month-wise student admissions & growth trend
                                        </Typography>
                                        <Box sx={{ height: { xs: 250, md: 300 } }}>
                                            <LineChart
                                                xAxis={[
                                                    {
                                                        scaleType: "point",
                                                        data: [
                                                            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                                                        ],
                                                    },
                                                ]}
                                                series={[
                                                    {
                                                        data: [120, 150, 180, 220, 260, 300, 350, 400, 450, 520, 600, 680],
                                                        label: "Students",
                                                        color: "#4ade80",
                                                        area: true,
                                                    },
                                                ]}
                                                grid={{ horizontal: true }}
                                                sx={{
                                                    "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                                                    "& .MuiChartsAxis-line": { stroke: "#334155" },
                                                    "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Placement Status Card */}
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                                        bgcolor: "white",
                                        color: "black",
                                        height: "100%",
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600}>
                                            Placement Status
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                                            Student placement overview
                                        </Typography>
                                        <Box sx={{ height: { xs: 250, md: 300 } }}>
                                            <PieChart
                                                series={[
                                                    {
                                                        innerRadius: 70,
                                                        outerRadius: 120,
                                                        paddingAngle: 3,
                                                        data: [
                                                            { id: 0, value: 120, label: "Placed", color: "#22c55e" },
                                                            { id: 1, value: 60, label: "In Progress", color: "#facc15" },
                                                            { id: 2, value: 40, label: "Not Placed", color: "#ef4444" },
                                                        ],
                                                    },
                                                ]}
                                                slotProps={{
                                                    legend: {
                                                        labelStyle: { fill: "#e5e7eb" },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box
                            component="main"
                            sx={{
                                mt: 3,
                                ml: GAP,
                                mr: GAP,
                                p: 2,
                            }}
                        >
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

