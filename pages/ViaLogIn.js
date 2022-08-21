import {
  Box,
  TextField,
  Typography,
  CardContent,
  Card,
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
  Avatar,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
// import SignUp from "../../components/signup/SignUp";
import Router from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://ViaUrl.com/">
        https://ViaUrl.com/
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
export default function ViaLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const { data: session, status } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let bodyObject = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(data);
    if (data.get("email")) {
      return fetch("http://localhost:3000/api/Users/getUser", {
        credentials: "include",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          charset: "UTF-8",
        },
        body: JSON.stringify(bodyObject),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  const handleGitHub = async (e) => {
    let test = signIn();
    console.log(test);
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  if (signUp) {
    return (
      <>
        <SignUp signUp={signUp} setSignUp={setSignUp} />
      </>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Button
              className="loginSubmit"
              type="submit"
              onClick={handleGitHub}
            >
              Sign In With GitHub
            </Button>
            <Divider />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button
                    className="loginSubmit"
                    type="submit"
                    onClick={handleGitHub}
                  >
                    Sign In With GitHub
                  </Button>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Button onClick={() => handleSignUp("/priceTracker/signup")}>
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

// ViaLogin.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
