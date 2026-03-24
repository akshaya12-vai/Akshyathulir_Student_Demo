import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  Chip,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { BarChart, LineChart } from "@mui/x-charts";

// Icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";

// ---------------- STYLES ----------------
const iconStyle = {
  bgcolor: "#c8e6c9",
  color: "#1b5e20",
  width: 40,
  height: 40,
};

const badgeStyle = {
  ml: 1.5,
  px: 1.5,
  py: 0.3,
  borderRadius: 10,
  bgcolor: "#e8f5e9",
  color: "#2e7d32",
  fontSize: 12,
  fontWeight: 600,
};

// ---------------- STAT CARD ----------------
const StatCard = ({ title, value, subtext, today, percent, icon }) => (
  <Card
    sx={{
      borderRadius: 2,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      bgcolor: "#f1f8e9",
      height: "100%",
    }}
  >
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={iconStyle}>{icon}</Avatar>
          <Typography fontWeight={600}>{title}</Typography>
        </Box>
        <Avatar sx={{ ...iconStyle, width: 32, height: 32 }}>
          <TrendingUpIcon fontSize="small" />
        </Avatar>
      </Box>

      <Typography
        sx={{ mt: 2, fontWeight: 700, color: "#2e7d32", fontSize: "2rem" }}
      >
        {value}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {subtext}
      </Typography>

      <Box display="flex" alignItems="center" mt={2}>
        <Typography fontSize={13} fontWeight={600} color="#2e7d32">
          +{today} today
        </Typography>
        <Box sx={badgeStyle}>↑ {percent}%</Box>
      </Box>
    </CardContent>
  </Card>
);

// ---------------- MAIN COMPONENT ----------------
const StatsDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Chart Data
  const pData = [2400, 1800, 3200, 3900, 4200, 4600, 5100];
  const bData = [45, 55, 40, 60, 52, 68, 75];
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const tabs = [
    { label: "TOTAL", path: "/" },
    { label: "TODAY", path: "/today" },
    { label: "THIS WEEK", path: "/week" },
    { label: "THIS MONTH", path: "/month" },
    { label: "6 MONTHS", path: "/six-months" },
  ];

  // More Recent Enrollments
  const rows = [
    { id: 1, studentName: "Arun Kumar", course: "Full Stack", attendance: 92, status: "Active" },
    { id: 2, studentName: "Divya S", course: "Python", attendance: 78, status: "Active" },
    { id: 3, studentName: "Rahul M", course: "Data Science", attendance: 65, status: "Inactive" },
    { id: 4, studentName: "Sneha R", course: "AI & ML", attendance: 88, status: "Active" },
    { id: 5, studentName: "Karthik P", course: "React JS", attendance: 74, status: "Active" },
    { id: 6, studentName: "Meena L", course: "Cyber Security", attendance: 81, status: "Active" },
  ];

  const columns = [
    { field: "studentName", headerName: "Student Name", flex: 1 },
    { field: "course", headerName: "Course", flex: 1 },
    {
      field: "attendance",
      headerName: "Attendance",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={`${params.value}%`}
          color={params.value >= 75 ? "success" : "warning"}
          size="small"
        />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Active" ? "success" : "default"}
          size="small"
        />
      ),
    },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#fbfdfb", minHeight: "100vh" }}>
      {/* Tabs */}
      <Box sx={{ bgcolor: "#EAF3EF", borderRadius: 2, mb: 3 }}>
        <List sx={{ display: "flex", justifyContent: "center", p: 0 }}>
          {tabs.map((tab) => (
            <ListItem
              key={tab.label}
              onClick={() => navigate(tab.path)}
              sx={{
                width: "auto",
                cursor: "pointer",
                px: 3,
                py: 1.5,
                color: location.pathname === tab.path ? "#2E7D32" : "#5F6F68",
                borderBottom:
                  location.pathname === tab.path
                    ? "3px solid #2E7D32"
                    : "3px solid transparent",
                fontWeight: location.pathname === tab.path ? 700 : 500,
              }}
            >
              {tab.label}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Stat Cards */}
      <Grid container spacing={3}>
        <Grid size={4}>
          <StatCard title="Total Users" value="200" subtext="All users" today={15} percent={80} icon={<PersonIcon />} />
        </Grid>
        <Grid size={4}>
          <StatCard title="Placements" value="150" subtext="Successful" today={20} percent={90} icon={<BusinessIcon />} />
        </Grid>
        <Grid size={4}>
          <StatCard title="Active Courses" value="160" subtext="Ongoing" today={12} percent={85} icon={<SchoolIcon />} />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={5}>
          <Card>
            <CardContent>
              <Typography fontWeight={700} mb={2}>
                Performance Growth
              </Typography>
              <LineChart
                height={300}
                series={[
                  {
                    data: pData,
                    label: "Revenue",
                    area: true,
                    color: "#2e7d32",
                  },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                sx={{ ".MuiAreaElement-root": { fillOpacity: 0.15 } }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={5}>
          <Card>
            <CardContent>
              <Typography fontWeight={700} mb={2}>
                Student Enrollment
              </Typography>
              <BarChart
                height={300}
                series={[
                  {
                    data: bData,
                    label: "Students",
                    color: "#17a758",
                  },
                ]}
                xAxis={[{ scaleType: "band", data: xLabels }]}
                borderRadius={8}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Data Grid */}
      <Paper sx={{ mt: 4, borderRadius: 2 }}>
        <Typography sx={{ p: 2, fontWeight: 700 }}>
          Recent Enrollments
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          hideFooter
          sx={{ border: "none" }}
        />
      </Paper>
    </Box>
  );
};

export default StatsDashboard;
