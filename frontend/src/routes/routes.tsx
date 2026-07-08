import { Routes, Route, Navigate } from "react-router-dom";

import MainLayoutUser from "../layout/layoutUser/mainLayout/mainLayout";
import Home from "../features/home/pages/home";
import Login from "../features/auth/login/pages/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutUser />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  );
}