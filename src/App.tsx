
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./components/About us";   // keep your current file location
import HomeV1 from "./components/Home v1";
import HomeV2 from "./components/Home v2";
import HomeV3 from "./components/Home v3";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";
import Latestpost from "./components/Latestpost";
import Categories from "./components/Categories";
import Botton from "./components/Botton";
import Icons from "./components/Icon";
import Buttons from "./components/Botton";
import Tshirts from "./components/Tshirts";
import Jackets from "./components/Jackets";
import Shoes from "./components/Shoes";
import Dresses from "./components/Dresses";
import Skirts from "./components/Skirts";
import Bags from "./components/Bags";
import Hats from "./components/Hats";
import Watches from "./components/Watches";
import Jewellery from "./components/Jewellery";
import Jeans from "./components/Jeans";
import Tops from "./components/Tops";
import Accessories from "./components/Accessories";
import BagsBackpacks from "./components/BagsBackpacks";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutUs />} />
          <Route path="home-v1" element={<HomeV1 />} />
          <Route path="home-v2" element={<HomeV2 />} />
          <Route path="home-v3" element={<HomeV3 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="banner" element={<Banner />} />
          <Route path="latest-post" element={<Latestpost />} />
          <Route path="categories" element={<Categories />} />
          <Route path ="buttons" element={<Buttons />} />
          <Route path ="icons" element={<Icons />} />
          <Route path ="tshirts" element={<Tshirts />} />
          <Route path ="jackets" element={<Jackets />} />
          <Route path="shoes" element={<Shoes />} />
<Route path="dresses" element={<Dresses />} />
<Route path="skirts" element={<Skirts />} />
<Route path="bags" element={<Bags />} />
<Route path="hats" element={<Hats />} />
<Route path="watches" element={<Watches />} />
<Route path="jewellery" element={<Jewellery />} />
<Route path="jeans" element={<Jeans />} />
<Route path="tops" element={<Tops />} />
<Route path="accessories" element={<Accessories />} />
<Route path="bags-backpacks" element={<BagsBackpacks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
