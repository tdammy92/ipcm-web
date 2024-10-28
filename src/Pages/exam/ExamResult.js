import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { reset,clearExamDetails } from "../../Store/exam-feature";

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
    marginBottom: 20,
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
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { Exam, currentExamIndex, answers, studentDetails, result } =
    useSelector((store) => store.exam);
  // const [progress, setProgress] = useState(10);

  const closeExam = () => {
    dispatch(reset()); //clear all store content
    dispatch(clearExamDetails()); //clear only exam details

    history.replace("/exam-info");
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
                value={result?.percantage}
                text={`${result?.percantage}%`}
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
                  pathColor: result?.percantage < 50 ? "#FF0000" : "#01996D",
                  // pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                  textColor: result?.percantage < 50 ? "#FF0000" : "#01996D",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#01996D",
                })}
              />
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle1" component="h5">
                Exam :
              </Typography>
              <Typography vvariant="subtitle1" component="h5">
                {Exam?.examName} ({Exam?.examCode} )
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle1" component="h5">
                Total Score :
              </Typography>
              <Typography vvariant="subtitle1" component="h5">
                {result?.total_score}
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle2" component="h5">
                Total Question Answer :
              </Typography>
              <Typography variant="subtitle2" component="h5">
                {result?.total_answered}
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle2" component="h5">
                Total correct Answer :
              </Typography>
              <Typography variant="subtitle2" component="h5">
                {result?.total_correct}
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="subtitle2" component="h5">
                Total wrong Answer :
              </Typography>
              <Typography variant="subtitle2" component="h5">
                {result?.total_wrong}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" component="h5">
                {result?.pass ? "Passed" : "Fail"}
              </Typography>
            </Box>
          </Box>

          <Button
            // component={Link}
            // to="/exam-info"
            onClick={closeExam}
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
