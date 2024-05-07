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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className="mt-6">
          <Typography variant="h5" align="center">
            Profile
          </Typography>
        </div>
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="body1">Name: {name}</Typography>
          <Typography variant="body1">Email: {email}</Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;
