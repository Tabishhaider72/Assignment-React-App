// App.tsx
import React, { useState } from 'react';
import { GoogleLoginResponse } from 'react-google-login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/Auth/ProfilePage';
import Header from './components/Layout/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';

const App: React.FC = () => {
  const [user, setUser] = useState<GoogleLoginResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse) => {
    setUser(response);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/profile">
            {user ? (
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
