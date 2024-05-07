import React, { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Routes, Route, BrowserRouter as Router, Navigate, useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import Header from './components/Layout/Header';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';

const App = () => {
  const [user, setUser] = useState<GoogleLoginResponse | null>(null);
  const navigate = useNavigate(); // <-- Add this line

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      setUser(response as GoogleLoginResponse);
      navigate('/profile'); // <-- Redirect to profile page on login success
    } else {
      console.error('Unexpected Google login response:', response);
    }
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google login failed:', error);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />} />
          <Route path="/profile" element={user ? <ProfilePage name={user.profileObj.name} email={user.profileObj.email} /> : <LoadingSpinner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
