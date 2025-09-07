// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./components/About us";   // keep your current file location
import HomeV1 from "./components/Home v1";
import HomeV2 from "./components/Home v1";
import HomeV3 from "./components/Home v3";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutUs />} />
          <Route path="home" element={<HomeV1 />} />
          <Route path="home-v2" element={<HomeV2 />} />
          <Route path="home-v3" element={<HomeV3 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="banner" element={<Banner />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
