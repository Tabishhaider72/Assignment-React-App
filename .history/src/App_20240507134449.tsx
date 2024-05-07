import React, { useState } from 'react';
import { GoogleLoginResponse } from 'react-google-login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';
import Header from './components/Layout/Header';
import LoadingSpinner from './components/Layout/LoadingSpinner';

function App() {
  const [user, setUser] = useState<GoogleLoginResponse | null>(null);

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse) => {
    setUser(response);
  };

  const handleGoogleLoginFailure = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />} />
          <Route path="/profile" element={user && 'profileObj' in user ? <ProfilePage name={user.profileObj.name} email={user.profileObj.email} /> : <LoadingSpinner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
