import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Propos from "../pages/about";
import Fiche from "../pages/logement";
import Error from "../pages/error";
import Header from "../components/header";
import Footer from "../components/footer";

const base = import.meta.env.BASE_URL;

export function Routers() {
  return (
    <Router basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<Propos />} />
        <Route path="/logement/:ficheNumber" element={<Fiche />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routers;
