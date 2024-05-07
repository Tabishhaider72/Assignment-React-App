// LoginPage.tsx
import React from 'react';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import Button from '../UI/Button';

const LoginPage: React.FC = () => {
  const handleGoogleLoginSuccess = (response: GoogleLoginResponse) => {
    // Handle successful login
    console.log('Login Success:', response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    // Handle login failure
    console.error('Login Error:', error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <GoogleLogin
          clientId="578394304769-g83v21jv24n5lrp5cpl7fue8ueggctqr.apps.googleusercontent.com"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          render={(renderProps) => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Sign in with Google
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export default LoginPage;
