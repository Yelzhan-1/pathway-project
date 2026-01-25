import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


import HomePage from "./pages/HomePage.jsx";
import UniversitiesPage from "./pages/UniversitiesPage.jsx";
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CareersPage from "./pages/CareersPage";
import PlannerPage from "./pages/PlannerPage";
import PathPage from "./pages/PathPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import UniversityDetailsPage from "./pages/UniversityDetailsPage";



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
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/path" element={<PathPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/universities/:id" element={<UniversityDetailsPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
