import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../styles/register.css";
import Avatar from "@mui/material/Avatar";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

// import {auth,provider} from '../../firebase';
// import GoogleButton from "react-google-button";
// import { signInWithPopup } from "firebase/auth";

const Register = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [error, setError] = useState(false);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setshowHome] = useState(true);
  const localSubmit = localStorage.getItem("submit");

  // const [user,setUser] = useState(null)

  // const hsandleGoogleSignIn =()=>{
  //   signInWithPopup(auth,provider).then((result)=>{
  //     const user = result.user;
  //     console.log(user)
  //     setUser(user);
  //   }).catch((err)=> {
  //     console.log(err)
  //   })
  // }

  useEffect(() => {
    if (localSubmit) {
      setshowHome(true);
    }
  });

  const navigate = useNavigate();

  console.log("formErrors", formErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //let flag=(true);
    if (validate(formValues)) {
      console.log("first");
      setIsSubmit(false);
      localStorage.setItem("username", username.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("submit", email.current.value);
      //   let flag=true;{
      navigate("/");
    }
  };

  const validate = (values) => {
    console.log("validate");
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
      setFormErrors(errors);
      return false;
    }
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
    // setFormErrors(errors)
    console.log("errors", errors);
    return true;
  };
  return (
    <div className="form-content" >
      <Card
        sx={{
          width: "25%",
          margin: "5%",
          height: "auto",
          backgroundColor: "#33006F",
          boxShadow: "8px 8px lavender ",
          border: "1px solid #33006F ",
          borderRadius: "10px",
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <Avatar sx={{ ml: 22, mt: 1, bgcolor: "white", color: "#33006F" }}>
              <PersonOutlineTwoToneIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Sign up
            </Typography>

            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ m: "10px 50px 0px 50px" }}>
                  <input
                    className="input-container"
                    placeholder="Full Name"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    ref={username}
                  />
                </Grid>

                <Grid item xs={12} sx={{ m: "0 50px 0 50px" }}>
                  <input
                    className="input-container"
                    placeholder="Email Address"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    ref={email}
                  />
                </Grid>

                <Grid item xs={12} sx={{ m: "0 50px 0 50px" }}>
                  <input
                    className="input-container"
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    ref={password}
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 13, width: "52%" }}
                >
                  Sign up
                </Button>
              </Grid>
              <hr />
              {/* <div className="g-btn">
                <GoogleButton  />
              </div> */}
              <p className="link">
                you have already an account?
                 <Link to="/Login">SignIn Here!</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
