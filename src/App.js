import './App.css';

import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Employee from "./pages/employee";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
