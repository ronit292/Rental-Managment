import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../frontend/pages/dashboard";
import Signup from "../frontend/pages/signup";
import Login from "../frontend/pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;