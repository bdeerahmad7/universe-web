/* App.jsx — route definitions */

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import UniversityDetails from "./pages/UniversityDetails";
import Guides from "./pages/Guides";
import Forum from "./pages/Forum";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* all pages share the Layout wrapper (Navbar) */}
      <Route element={<Layout />}>
        <Route path="/"                 element={<Home />} />
        <Route path="/universities"     element={<Universities />} />
        <Route path="/universities/:id" element={<UniversityDetails />} />
        <Route path="/guides"           element={<Guides />} />
        <Route path="/forum"            element={<Forum />} />
        <Route path="*"                 element={<NotFound />} />
      </Route>
    </Routes>
  );
}