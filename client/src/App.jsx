import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import './index.css';
import './axios';
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import EmlakPage from "./pages/EmlakPage";
import KonutPage from "./pages/KonutPage";
import IsyeriPage from "./pages/IsyeriPage";
import VasitaPage from "./pages/VasitaPage";
import OtomobilPage from "./pages/OtomobilPage";
import MotosikletPage from "./pages/MotosikletPage";




function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ilan/:id" element={<Detail />} />
        <Route path="/emlak" element={<EmlakPage />} />
        <Route path="/emlak/konut" element={<KonutPage />} />
        <Route path="/emlak/isyeri" element={<IsyeriPage />} />
        <Route path="/vasita" element = {<VasitaPage/>} /> 
        <Route path="/vasita/otomobil" element={<OtomobilPage />} />
        <Route path="/vasita/motorsiklet" element={<MotosikletPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
