import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Button, Container, CssBaseline, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Professional blue color
    },
  },
});

interface LoginPageProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess, onFailure }) => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response: any) => {
    onSuccess(response);
    navigate('/profile');
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google login failed:', error);
    onFailure(error);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <div>
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Login
            </Typography>
          </div>
          <Box sx={{ mt: 4 }}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <GoogleLogin
                clientId="578394304769-g83v21jv24n5lrp5cpl7fue8ueggctqr.apps.googleusercontent.com"
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
                cookiePolicy={'single_host_origin'}
                render={(renderProps) => (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login with Google
                  </Button>
                )}
              />
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
