

import { Routes, Route } from "react-router-dom";
import TraningDashboard from "./pages/TraningDashboard";
import Registerform from "./pages/Registerform";
import Course from "./pages/Course";
import Trainer from "./pages/Trainer";
import Industry from "./pages/Industry";
import Certification from "./pages/Certification";
import Placement from "./pages/Placement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TraningDashboard />} />
      <Route path="/Registerform" element={<Registerform />} />
      <Route path="/Course" element={<Course />} />
      <Route path="/Trainer" element={<Trainer />} />
      <Route path="/Placement" element={<Placement />} />
      <Route path="/Industry" element={<Industry />} />
      <Route path="/certification" element={<Certification />} />
    </Routes>
  );
}

export default App;