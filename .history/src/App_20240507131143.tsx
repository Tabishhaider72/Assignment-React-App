import React, { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';
import Header from './components/Layout/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<GoogleLoginResponse | GoogleLoginResponseOffline | null>(null);

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setUser(response);
  };

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/profile">
          {user ? (
            <ProfilePage name={user.profileObj.name} email={user.profileObj.email} />
          ) : (
            <div>Loading...</div>
          )}
        </Route>
      </div>
    </Router>
  );
};

export default App;
