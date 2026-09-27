import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../frontend/pages/home";
import Signup from "../frontend/pages/signup";
import Login from "../frontend/pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;