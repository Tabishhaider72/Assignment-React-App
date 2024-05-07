import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ email: string; name: string } | null>(null);

  const handleLoginSuccess = (response: any) => {
    setLoggedIn(true);
    setUserData({ email: response.profileObj.email, name: response.profileObj.name });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onSuccess={handleLoginSuccess} onFailure={() => {}} />} />
        <Route path="/profile" element={loggedIn ? <ProfilePage email={userData?.email || ''} name={userData?.name || ''} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
