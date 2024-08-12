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

const useStyles = makeStyles((theme) => ({
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
          elevation={3}
          style={{
            width: "90%",
            height: "80%, 90%",
          }}
          className="paper__container"
        >
          <Typography variant="subtitle1" component="h5">
            What is the gender of Isaac newton ?
          </Typography>

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
