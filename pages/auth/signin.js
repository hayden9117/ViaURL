import { getProviders, getSession, signIn, useSession } from "next-auth/react";
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
  ButtonBase,
} from "@mui/material";

import React, { useState } from "react";

import SignUp from "../../components/signup/SignUp";
import Router from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
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
export default function SignIn({ providers }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const { data: session, status } = useSession();

  if (session) Router.push("/");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const data = new FormData(event.currentTarget);
    console.log(data);
    let bodyObject = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (data.get("github")) bodyObject.github = data.get("github");

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
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  if (signUp) {
    return (
      <>
        <SignUp signUp={signUp} setSignUp={setSignUp} providers={providers} />
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
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Box sx={{ width: "50vh", height: "5vh" }}>
                  <ButtonBase
                    sx={{
                      pt: 1,
                      pb: 1,
                      bgcolor:
                        provider.id === "github" ? " #000000" : "#2340F7",
                      color: "#f1f1f1",
                      width: "inherit",
                    }}
                    id={provider.id}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                  >
                    {provider.id === "github" ? <GitHubIcon /> : <GoogleIcon />}
                    Sign in with {provider.name}
                  </ButtonBase>
                </Box>
              </div>
            ))}
            <br />
            <Divider width="150%" />
            <br />
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

export async function getServerSideProps(context) {
  const providers = await getProviders();

  console.log(providers);
  return {
    props: { providers },
  };
}
