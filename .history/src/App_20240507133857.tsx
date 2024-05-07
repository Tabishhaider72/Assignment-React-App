import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';
import Header from './components/Layout/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const App: React.FC = () => {
  const [user, setUser] = useState<GoogleLoginResponse | GoogleLoginResponseOffline | null>(null);

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setUser(response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google login failed:', error);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
          </Route>
          <Route path="/profile">
            {user && 'profileObj' in user ? (
              <ProfilePage name={user.profileObj.name} email={user.profileObj.email} />
            ) : (
              <LoadingSpinner />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
