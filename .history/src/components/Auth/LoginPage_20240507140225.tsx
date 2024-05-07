import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

interface LoginPageProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess, onFailure }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Login</h2>
        <div className="mt-6">
          <GoogleLogin
            clientId="578394304769-g83v21jv24n5lrp5cpl7fue8ueggctqr.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
