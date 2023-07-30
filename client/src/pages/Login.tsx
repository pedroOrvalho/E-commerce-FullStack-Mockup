import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { getUserInfo } from "../redux/slices/user";
import { BASE_URL } from "../Api";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

type User = {
  email: string;
  password: string;
};

const user: User = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [userInfo, setUserInfo] = useState<User>(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickHandler() {
    const endpoint = `${BASE_URL}/users/login`;
    axios
      .post(endpoint, userInfo)
      .then((res) => {
        if (res.status === 200) {
          dispatch(getUserInfo(res.data.userData));
          localStorage.setItem("userToken", res.data.token);
          localStorage.setItem("_id", res.data.userData._id);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Account not found. Please register, before login in.");
          navigate("/register");
          return;
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
          pt: 9,
          pb: 9,
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
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
