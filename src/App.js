import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import All from "./Components/All";
import SingleAll from "./Components/SingleAll";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="all" element={<All />} />
        <Route path="single-all/:id/:category" element={<SingleAll />} />
      </Routes>
    </>
  );
}

export default App;
