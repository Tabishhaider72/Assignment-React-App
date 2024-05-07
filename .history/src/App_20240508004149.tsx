import React, { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';

const App = () => {
  const [user, setUser] = useState<GoogleLoginResponse | null>(null);
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      setUser(response as GoogleLoginResponse);
      navigate('/profile');
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
          {user && <Route path="/profile" element={<ProfilePage name={user.profileObj.name} email={user.profileObj.email} />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
