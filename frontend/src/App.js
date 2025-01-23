import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Home = lazy(() => import('./pages/frontend/Home'));
const Course = lazy(() => import('./pages/frontend/Course'));
const KidsCourse = lazy(() => import('./pages/frontend/KidsCourse'));
const ProfessionalCourse = lazy(() => import('./pages/frontend/ProfessionalCourse'));
const CommunicationCourse = lazy(() => import('./pages/frontend/CommunicationCourse'));
const About = lazy(() => import('./pages/frontend/About'));
const Notice = lazy(() => import('./pages/frontend/Notice'));
const Job = lazy(() => import('./pages/frontend/Job'));
const FQA = lazy(() => import('./pages/frontend/FQA'));
const PrivacyPolicy = lazy(() => import('./pages/frontend/PrivacyPolicy'));
const Admissions = lazy(() => import('./pages/frontend/Admissions'));
const TermsofUse = lazy(() => import('./pages/frontend/TermsofUse'));
const ContactUs = lazy(() => import('./pages/frontend/ContactUs'));
const FreelancerProfile  = lazy(() => import('./pages/frontend/FreelancerProfile'));

const Register = lazy(() => import('./pages/authentication/Register'));
const Login = lazy(() => import('./pages/authentication/Login'));
const CheckEmailVerification = lazy(() => import('./pages/authentication/CheckEmailVerification'));
const EmailVerificationSuccess = lazy(() => import('./pages/authentication/EmailVerificationSuccess'));
const PasswordResetRequest = lazy(() => import('./pages/authentication/PasswordResetRequest'));
const PasswordResetConfirm = lazy(() => import('./pages/authentication/PasswordResetConfirm'));
const PasswordResetSuccess = lazy(() => import('./pages/authentication/PasswordResetSuccess'));

const StaffDashboard = lazy(() => import('./pages/dashboard/StaffDashboard'));
const EmployeeDashboard = lazy(() => import('./pages/dashboard/EmployeeDashboard'));
const StudentDashboard = lazy(() => import('./pages/dashboard/StudentDashboard'));

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  };

  const PrivateRoute = ({ element, userType }) => {
    const userData = getUserData();
    if (!userData) {
      return <Navigate to="/login" />;
    }
    if (userType && userData.userType !== userType) {
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Suspense fallback={<div className="loading-screen"><Spinner animation="border" /> Loading...</div>}>
          <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/kids-course" element={<KidsCourse />} />
            <Route path="/professional-course" element={<ProfessionalCourse />} />
            <Route path="/communication-course" element={<CommunicationCourse />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/job-details" element={<Job />} />
            <Route path="/fqa" element={<FQA />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/admission" element={<Admissions />} />
            <Route path="/terms-of-use" element={<TermsofUse />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/survey" element={<FreelancerProfile />} />
            {/* Authentication Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/check-email" element={<CheckEmailVerification />} />
            <Route path="/email-verification-success" element={<EmailVerificationSuccess />} />
            <Route path="/password-reset" element={<PasswordResetRequest />} />
            <Route path="/reset-password/:token" element={<PasswordResetConfirm />} />
            <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
            {/* Dashboard Routes */}
            <Route path="/dashboard/staff" element={<PrivateRoute element={<StaffDashboard />} userType="staff" />} />
            <Route path="/dashboard/employee" element={<PrivateRoute element={<EmployeeDashboard />} userType="employee" />} />
            <Route path="/dashboard/student" element={<PrivateRoute element={<StudentDashboard />} userType="student" />} />
            {/* Url End */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
