import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { Layout } from './components/Layout/Layout';
import { LoginForm } from './components/Auth/LoginForm';
import { Dashboard } from './pages/Dashboard';
import { Schedule } from './pages/Schedule';
import { PerformanceReporting } from './pages/PerformanceReporting';
import { Leads } from './pages/Leads';
import { Jobs } from './pages/Jobs';
import { Customers } from './pages/Customers';
import { Estimates } from './pages/Estimates';
import { Invoices } from './pages/Invoices';
import { Tasks } from './pages/Tasks';
import { Messages } from './pages/Messages';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';
import { GeneralContacts } from './pages/GeneralContacts';

function App() {
  const { user, token } = useAuthStore();

  // Protected route wrapper
  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!user || !token) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  // Public route wrapper (redirect to dashboard if already logged in)
  const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (user && token) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                <Layout>
                  <Schedule />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/performance-reporting"
            element={
              <ProtectedRoute>
                <Layout>
                  <PerformanceReporting />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <Layout>
                  <Customers />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/leads"
            element={
              <ProtectedRoute>
                <Layout>
                  <Leads />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <Layout>
                  <Jobs />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Layout>
                  <Tasks />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/estimates"
            element={
              <ProtectedRoute>
                <Layout>
                  <Estimates />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/invoices"
            element={
              <ProtectedRoute>
                <Layout>
                  <Invoices />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Layout>
                  <Messages />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/general-contacts"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeneralContacts />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Layout>
                  <Users />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;