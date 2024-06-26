import Home from "../Pages/Home";
import Header from "./Header/Header";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
