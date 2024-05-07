import React, { useState } from 'react';
import { GoogleLoginResponse } from 'react-google-login';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';
import Header from './components/Layout/Header';
import LoadingSpinner from './components/Layout/LoadingSpinner';

const App: React.FC = () => {
  const [user, setUser] = useState<GoogleLoginResponse | null>(null);

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setUser(response as GoogleLoginResponse);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google login failed:', error);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />} />
        <Route path="/profile" element={user && 'profileObj' in user ? <ProfilePage name={user.profileObj.name} email={user.profileObj.email} /> : <LoadingSpinner />} />
      </Routes>
    </div>
  );
};

export default App;
