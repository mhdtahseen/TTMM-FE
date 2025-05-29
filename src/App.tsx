import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResponsiveLayout from "./layout/ResponsiveLayout";

// Example placeholder Dashboard page
const Dashboard = () => (
  <div className="text-center text-2xl font-bold p-8">Welcome to the Dashboard!</div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* Login and Signup are standalone */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* All other routes use ResponsiveLayout */}
        <Route
          path="/*"
          element={
            <ResponsiveLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                {/* Add more protected or main app routes here */}
              </Routes>
            </ResponsiveLayout>
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
