import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


import HomePage from "./pages/HomePage.jsx";
import UniversitiesPage from "./pages/UniversitiesPage.jsx";
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const authorized = Boolean(localStorage.getItem("accessToken"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universities" element={<UniversitiesPage/>} />
        {!authorized && (<Route path="/login" element={<LoginPage />} />)}
        {!authorized && (<Route path="/register" element={<RegisterPage />} />)}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
