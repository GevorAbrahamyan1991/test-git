import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import All from "./Components/All";
import SingleAll from "./Components/SingleAll";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import More from "./Components/More";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="all" element={<All />} />
        <Route path="single-all/:id/:category" element={<SingleAll />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="more" element={<More />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
