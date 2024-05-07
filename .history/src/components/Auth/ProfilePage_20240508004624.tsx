import React from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';

interface ProfilePageProps {
  email: string;
  name: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ email, name }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="mt-6">
        <Typography component="h1" variant="h5" align="center">
          Profile Page
        </Typography>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Name:</strong> {name}
        </Typography>
      </div>
    </Container>
  );
};

export default ProfilePage;
