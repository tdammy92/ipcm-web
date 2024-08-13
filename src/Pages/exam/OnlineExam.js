import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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
}));

const OnlineExam = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

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

          <Typography variant="h5" component="h5">
            What is the gender of Isaac newton ?
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />

              <FormControlLabel
                value="option"
                control={<Radio />}
                label="Option"
              />
            </RadioGroup>
          </FormControl>

          <Box>
            <Button
              style={{ marginRight: "60px" }}
              variant="contained"
              color="primary"
            >
              Prevous
            </Button>

            <Button variant="contained" color="primary">
              Next
            </Button>
          </Box>

          <Button
            mt={15}
            component={Link}
            to="/exam-result"
            variant="contained"
            color="primary"
            size="small"
          >
            Next To Result !
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default OnlineExam;
