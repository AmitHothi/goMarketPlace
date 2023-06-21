import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {auth,provider} from '../../firebase/firebaseConfig';
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";

import "../../styles/login.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const SignIn = () => {
  const initialValues = {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);
  const email = useRef();
  const password = useRef();
  const localLogin = localStorage.getItem("Login");

  const [showHome, setshowHome] = useState(false);

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async (e) => {
    return await signInWithPopup(auth,provider)
      .then((result) => {
        const user = result.user;
        console.log("user",user);
        setUser(user);
      navigate("/DashBoard");
 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localLogin) {
      setshowHome(true);
    }
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formValues)) console.log("emailll", email);
    setIsSubmit(false);
    localStorage.setItem("email", formValues.email);
    localStorage.setItem("password", formValues.password);
    localStorage.setItem("Login", email.current.value);
    navigate("/DashBoard");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && IsSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
      setFormErrors(errors);
      return false;
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      setFormErrors(errors);
      return false;
    }
    if (!values.password) {
      errors.password = "Password is required";
      setFormErrors(errors);
      return false;
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      setFormErrors(errors);
      return false;
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
      setFormErrors(errors);
      return false;
    }
    console.log("errors", errors);
    return true;
  };

  return (
    <div className="main-container">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "lavender",
              borderRadius: "10px",
              width: "400px",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
                color: "white",
                height: 50,
                width: 50,
              }}
            >
              <PersonOutlineTwoToneIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ m: "10px 50px 0px 50px" }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    ref={email}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sx={{ m: "-10px 50px 0 50px" }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formValues.password}
                    onChange={handleChange}
                    ref={password}
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, ml: 13, width: "52%" }}
                >
                  Sign up
                </Button>
              </Grid>
              <hr />
              <div className="g-btns">
                {/* <button onClick={handleGoogleSignIn}><GoogleButton  /></button> */}
                <GoogleButton onClick={handleGoogleSignIn}/>
                {/* <button onClick={handleGoogleSignIn}>Google </button> */}
              </div>
              <p className="p">
                you have already an account?
                <Link to="/register">SignUp Here!</Link>
              </p>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
