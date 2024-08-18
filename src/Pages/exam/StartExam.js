import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { iSLoading, saveUser, LogOutUser } from "../../Store/feature";
import { ScreenSize } from "../../Config";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { AppBar, Toolbar } from "@material-ui/core";

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
          }}
          className="paper__container"
        >
          <div className="login__container">
            <h3 className="form__header">IGPCM EXAM PORTAL</h3>
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
                      to="/select-exam"
                      type="submit"
                      color="primary"
                      className={classes.button}
                      endIcon={<SendIcon />}
                      disabled={isSubmitting}
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
                      Back To Examination !
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
