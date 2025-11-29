import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ApplicationsPage from "./pages/ApplicationsPage.jsx";
import ScholarshipsPage from "./pages/ScholarshipsPage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import PaymentsPage from "./pages/PaymentsPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import "./App.css";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo">FinAid</h2>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/scholarships">Scholarships</Link>
          <Link to="/students">Students</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <Layout>
            <AdminDashboard />
          </Layout>
        }
      />
      <Route
        path="/applications"
        element={
          <Layout>
            <ApplicationsPage />
          </Layout>
        }
      />
      <Route
        path="/scholarships"
        element={
          <Layout>
            <ScholarshipsPage />
          </Layout>
        }
      />
      <Route
        path="/students"
        element={
          <Layout>
            <StudentsPage />
          </Layout>
        }
      />
      <Route
        path="/payments"
        element={
          <Layout>
            <PaymentsPage />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <SettingsPage />
          </Layout>
        }
      />
      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;