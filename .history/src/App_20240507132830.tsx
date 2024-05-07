import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [user, setUser] = React.useState(null);

  const handleGoogleLoginSuccess = (response) => {
    setUser(response);
  };

  const handleGoogleLoginFailure = (response) => {
    console.log('Login failed:', response);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
          </Route>
          <Route path="/profile">
            {user && user.profileObj ? (
              <ProfilePage name={user.profileObj.name} email={user.profileObj.email} />
            ) : (
              <LoadingSpinner />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
