import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    height: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: 0,
  },

  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom:20
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  progressBox: {
    height: 150,
    width: 150,
  },
}));

function ExamResult() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);
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
            position: "relative",
          }}
          className="paper__container"
        >
          <Box className={classes.header}>
            <Box>
              <Typography variant="h5" component="h5">
                EXAM RESULT
              </Typography>
            </Box>
          </Box>

          <Box className={classes.mainContainer}>
            <Box className={classes.progressBox} mb={5}>
              <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                // circleRatio={40}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "1.5rem",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: "#01996D",
                  // pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                  textColor: "#01996D",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#01996D",
                })}
              />
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle1" component="h5">
                Total Score :
              </Typography>
              <Typography vvariant="subtitle1" component="h5">
                80
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle2" component="h5">
                Total Question Answer :
              </Typography>
              <Typography variant="subtitle2" component="h5">
                40
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" component="h5">
               {progress > 50 ? 'Passed' : 'Fail'}
              </Typography>
            </Box>
          </Box>

          <Button
            component={Link}
            to="/certificate"
            variant="contained"
            color="primary"
            size="small"
          >
            Back To Take an Exam !
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default ExamResult;
