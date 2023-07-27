import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { fetchUserById } from "../redux/thunk/user";
import { getUserInfo } from "../redux/slices/user";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { User } from "../types/type";
import IsLoading from "../components/IsLoading";

export default function UserProfile() {
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const userInfo = useSelector((state: RootState) => state.user.user);
  const [userNewInfo, setUserNewInfo] = useState<User>(userInfo);

  const dispatchThunk = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("_id");
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    dispatchThunk(fetchUserById(userId, navigate));
  }, [dispatchThunk, userId, navigate]);

  useEffect(() => {
    setUserNewInfo(userInfo);
  }, [userInfo]);

  function handleFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserNewInfo({
      ...userNewInfo,
      firstName: event.target.value,
    });
  }
  function handleLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserNewInfo({
      ...userNewInfo,
      lastName: event.target.value,
    });
  }
  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserNewInfo({
      ...userNewInfo,
      email: event.target.value,
    });
  }

  function onClickHandler() {
    const endpoint = `http://localhost:4000/users/${userInfo._id}`;

    axios
      .put(endpoint, userNewInfo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(getUserInfo(res.data));
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in ");
          navigate("/login");
          return;
        }
      });
  }

  if (isLoading) {
    return <IsLoading isLoading={isLoading} />;
  }
  return (
    <div>
      <Container
        component={Paper}
        elevation={1}
        maxWidth="xs"
        sx={{
          mt: 13,
          mb: 13,
          pt: 1,
          pb: 1,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "jost, sans-serif",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontFamily: "jost, sans-serif",
              letterSpacing: "0.2rem",
              fontWeight: 400,
              color: "hsla(0, 0%, 9%, 0.729)",
            }}
          >
            My Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <p>First Name:</p>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  value={userNewInfo.firstName}
                  onChange={handleFirstName}
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
                <p>Last Name:</p>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  value={userNewInfo.lastName}
                  onChange={handleLastName}
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
                <p>Email:</p>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  value={userNewInfo.email}
                  onChange={handleEmail}
                  disabled
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
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
