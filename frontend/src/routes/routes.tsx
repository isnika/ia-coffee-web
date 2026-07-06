import { Routes, Route, Navigate } from "react-router-dom";

import MainLayoutUser from "../layout/layoutUser/mainLayout/mainLayout";
import Home from "../features/home/pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutUser />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}