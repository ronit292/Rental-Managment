import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../frontend/pages/home";
import Login from "../frontend/pages/login";
import Register from "../frontend/pages/register";
import VerifyEmail from "./VerifyEmail";
import Dashboard from "../frontend/pages/dashboard";
import ForgotPassword from "../frontend/pages/forgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;