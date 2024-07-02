import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
