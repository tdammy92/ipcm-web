import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AccessTime, AccessTimeRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    height: 70,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  radio: {
    "&$checked": {},

    color: theme.palette.primary.main,
  },
  radioBtn: {
    "&$checked": {
      color: "green",
    },
    "&:hover": {
      backgroundColor: "#E6E6E6",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 280,
      justifySelf: "center",
    },
    width: "90%",
    height: 40,
    color: theme.palette.primary.main,
    backgroundColor: "#f6f6f6",
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    maxWidth: 550,
  },
  optionContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
  },
  optionWrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
}));

const OnlineExam = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="startExam">
      <Container
        mx="auto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: "100%, 90%",
        }}
      >
        <Paper
          elevation={4}
          style={{
            width: "90%",
            height: "80, 90%",
          }}
          className="paper__container"
        >
          <Box className={classes.header}>
            <Box>EXAMINATION COURSE</Box>

            <Box>
              <Box>
                <Typography>3/20</Typography>
              </Box>
            </Box>
            <Box>
              <Box className={classes.timerContainer}>
                <AccessTimeRounded />
                <Typography>5:30</Typography>
              </Box>
            </Box>
          </Box>

          <Box pt={10}>
            <Typography variant="subtitle1" component="h5">
              What is the gender of Isaac newton ?
            </Typography>
          </Box>

          <Box className={classes.optionContainer}>
            <RadioGroup
              value={value}
              onChange={handleChange}
              className={classes.optionWrapper}
            >
              <FormControlLabel
                value="female"
                color="primary"
                className={classes.radioBtn}
                control={<Radio color="primary" className={classes.radio} />}
                label="Female"
              />

              <FormControlLabel
                value="male"
                className={classes.radioBtn}
                control={<Radio color="primary" className={classes.radio} />}
                label="Male"
              />

              <FormControlLabel
                value="other"
                className={classes.radioBtn}
                control={<Radio color="primary" className={classes.radio} />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                className={classes.radioBtn}
                control={<Radio color="primary" className={classes.radio} />}
                label="Amaphrodite"
              />
            </RadioGroup>
          </Box>

          <Box mb={8} className={classes.buttonContainer}>
            <Button
              mt={15}
              component={Link}
              to="/exam-result"
              variant="contained"
              color="primary"
              size="small"
            >
              Previous
            </Button>
            <Button
              mt={15}
              component={Link}
              to="/exam-result"
              variant="contained"
              color="primary"
              size="small"
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default OnlineExam;
