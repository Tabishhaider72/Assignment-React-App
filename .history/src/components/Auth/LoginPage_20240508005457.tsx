import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Button, Container, CssBaseline, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
