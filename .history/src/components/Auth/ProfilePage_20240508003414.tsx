import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Professional blue color
    },
  },
});

interface ProfilePageProps {
  name: string;
  email: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ name, email }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Profile</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
