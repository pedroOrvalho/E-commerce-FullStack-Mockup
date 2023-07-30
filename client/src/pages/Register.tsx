import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../Api";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Terra Quente
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const user: User = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function Register() {
  const [userInfo, setUserInfo] = useState<User>(user);
  const navigate = useNavigate();

  function onClickHandler() {
    const endpoint = `${BASE_URL}/users`;

    axios
      .post(endpoint, userInfo)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Your email is already registered. Please log in.");
          navigate("/login");
        }
      });
    setUserInfo(user);
  }

  return (
    <Box>
      <Container
        component={Paper}
        elevation={1}
        maxWidth="xs"
        sx={{
          mt: 8,
          mb: 8,
          pt: 4,
          pb: 4,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: grey[900] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontFamily: "jost, sans-serif",
              letterSpacing: "0.2rem",
              fontWeight: 400,
              color: "hsla(0, 0%, 9%, 0.729)",
            }}
          >
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userInfo.firstName}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, firstName: event.target.value })
                  }
                  InputLabelProps={{
                    style: {
                      color: grey[600],
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={userInfo.lastName}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, lastName: event.target.value })
                  }
                  InputLabelProps={{
                    style: {
                      color: grey[600],
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userInfo.email}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, email: event.target.value })
                  }
                  InputLabelProps={{
                    style: {
                      color: grey[600],
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userInfo.password}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, password: event.target.value })
                  }
                  InputLabelProps={{
                    style: {
                      color: grey[600],
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "inherit",
                        borderWidth: 1,
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "0",
                textTransform: "capitalize",
                letterSpacing: "0.2rem",
                fontSize: "1rem",
                bgcolor: "hsla(0, 0%, 0%, 1)",
                "&:hover": {
                  bgcolor: "hsla(0, 0%, 0%, 0.8)",
                },
              }}
              onClick={onClickHandler}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ pt: 1, pb: 4 }} />
    </Box>
  );
}
