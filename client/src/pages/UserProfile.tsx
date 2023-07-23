import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { fetchUserById } from "../redux/thunk/user";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { User } from "../types/type";
import { getUserInfo } from "../redux/slices/user";

export default function UserProfile() {
  const userInfo = useSelector((state: RootState) => state.user.user);
  const [userNewInfo, setUserNewInfo] = useState<User>(userInfo);
  const dispatchThunk = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("_id");
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  console.log(userInfo);

  useEffect(() => {
    dispatchThunk(fetchUserById(userId));
  }, [dispatchThunk, userId]);

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
        console.log(error);
      });
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            User Details
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
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "0" }}
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
