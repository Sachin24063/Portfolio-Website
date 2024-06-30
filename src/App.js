import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Certifications from "./pages/Certifications";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/certifications" element={<Certifications />} />
        <Route exact path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default SplashScreen(App);  
