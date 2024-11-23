import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import SiemThreatDetectionResponse from "./pages/Services/SiemThreatDetectionResponse";
import PenetrationTesting from "./pages/Services/PenetrationTesting";
import IncidentResponse from "./pages/Services/IncidentResponse";
import NetworkSecurity from "./pages/Services/NetworkSecurity";
import SecurityAwarenessTraining from "./pages/Services/SecurityAwarenessTraining";
import Industries from "./pages/Industries/Industries";
import Partnership from "./pages/Parnerships/Parnerships";
import ContactUs from "./pages/ContactUs/ContactUs";
import Jobs from "./pages/Jobs/Jobs";
import Newsletter from "./pages/Newsletter/Newsletter";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/services/siem-threat-detection-response"
            element={<SiemThreatDetectionResponse />}
          />
          <Route
            path="/services/penetration-testing"
            element={<PenetrationTesting />}
          />
          <Route
            path="/services/incident-response"
            element={<IncidentResponse />}
          />
          <Route
            path="/services/network-security"
            element={<NetworkSecurity />}
          />
          <Route
            path="/services/security-awareness-training"
            element={<SecurityAwarenessTraining />}
          />
          <Route path="/industries" element={<Industries />} />
          <Route path="/parnerships" element={<Partnership />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
