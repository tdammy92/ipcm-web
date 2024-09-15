import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { ScreenSize } from "../../Config";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field } from "formik";
import "../auth/style.css";
import { BaseUrl } from "../../Services/api/BaseUrl";

const startExamValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("email is required"),

  SerialNumber: yup
    .string()
    .required("SerialNumber is required")
    .min(19, "SerialNumber must be 19 charaters")
    .max(19, "SerialNumber must be 19 charaters"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },

  paper: {
    padding: 10,
    margin: 20,
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    height: 70,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: 0,
  },

  button: {},
}));

function StartExam() {
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();

  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });
  const { from } = location.state || { from: { pathname: "/" } };

  const dispatch = useDispatch();

  async function HandleExamLogin(values) {
    console.log({ BaseUrl });

    history.push("/online-exam");
    // dispatch(iSLoading(true));
    // axios
    //   .post(`${BaseUrl}auth/login`, values, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     const admin = { token: res?.data?.token, admin: res?.data?.data?._doc };

    //     // dispatch(saveUser(admin));
    //     // history.replace(from);
    //   })
    //   .catch((err) => {
    //     console.log(err);

    //     dispatch(iSLoading(false));
    //   });
  }
  return (
    <div className="login__page">
      <Container
        mx="auto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: isMobile ? "90%" : "80%",
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: isMobile ? "100%" : "75%",
            height: isMobile ? "100%" : "90%",
            position: "relative",
          }}
          className="paper__container"
        >
          <Box className={classes.header}>
            <Typography variant="h4" component="h4">
              IGPCM EXAM PORTAL
            </Typography>
          </Box>
          <div className="login__container">
            <Formik
              validationSchema={startExamValidation}
              initialValues={{ email: "", SerialNumber: "" }}
              onSubmit={(values) => HandleExamLogin(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="input__wrapper">
                    <TextField
                      id="outlined-email-input"
                      label="email"
                      type="email"
                      placeholder="Enter Email"
                      variant="outlined"
                      style={{ width: "100%", margin: "10px" }}
                      name="email"
                      onChange={handleChange}
                    />

                    {errors.email && touched.email && (
                      <span style={{ color: "red" }}>{errors.email}</span>
                    )}
                    <TextField
                      id="outlined-password-input"
                      label="Serial"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      name="SerialNumber"
                      placeholder="Enter Serial number"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    />
                    {errors.SerialNumber && touched.SerialNumber && (
                      <span style={{ color: "red" }}>
                        {errors.SerialNumber}
                      </span>
                    )}
                  </div>
                  <div className="form__Btn">
                    <Button
                      variant="contained"
                      component={Link}
                      disabled={true}
                      to="/select-exam"
                      type="submit"
                      color="primary"
                      className={classes.button}
                      endIcon={<SendIcon />}
                      // disabled={isSubmitting}
                    >
                      Proceed
                    </Button>
                  </div>
                  <div className="form__Btn">
                    <Button
                      mt={5}
                      component={Link}
                      to="/exam-info"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Back
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default StartExam;
