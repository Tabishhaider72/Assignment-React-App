import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ email: string; name: string } | null>(null);

  const handleLoginSuccess = (response: any) => {
    setLoggedIn(true);
    setUserData({ email: response.profileObj.email, name: response.profileObj.name });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!loggedIn ? (
            <LoginPage onSuccess={handleLoginSuccess} onFailure={() => {}} />
          ) : (
            <Redirect to="/profile" />
          )}
        </Route>
        <Route path="/profile">
          {loggedIn ? (
            <ProfilePage email={userData?.email || ''} name={userData?.name || ''} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
