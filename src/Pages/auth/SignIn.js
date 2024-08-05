import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { saveUser } from "../../Store/feature";
import { ScreenSize } from "../../Config";
import Paper from "@material-ui/core/Paper";
import * as yup from "yup";
import { Formik} from "formik";

import "./style.css";
import { useLogin } from "../../Services/mutations/auth-mutation";

const signInValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("email is required"),

  password: yup.string().required("Password is required"),
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

function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();

  const { from } = location.state ?? { from: { pathname: "/" } };

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

  const { mutateAsync, isLoading } = useLogin();


  async function HandleLogin(values) {
    try {
      const response = await mutateAsync(values);

      if (response?.status === 200) {
        dispatch(saveUser(response?.data));
        history.replace(from?.pathname);
      }
    } catch (error) {}
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
            <h3 className="form__header">Login</h3>
            <Formik
              validationSchema={signInValidation}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => HandleLogin(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="input__wrapper">
                    <TextField
                      id="outlined-email-input"
                      label="email"
                      type="email"
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
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      name="password"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    />
                    {errors.password && touched.password && (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    )}
                  </div>
                  <div className="form__Btn">
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      className={classes.button}
                      endIcon={<SendIcon />}
                      disabled={isLoading}
                    >
                      Sign In
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

export default SignIn;
