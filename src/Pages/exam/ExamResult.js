import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
              <Typography variant="h4" component="h4">
                EXAM RESULT
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="h5" component="h5">
                Total Score
              </Typography>
              <Typography variant="h5" component="h5">
                80
              </Typography>
            </Box>
            <Box className={classes.scoreContainer}>
              <Typography variant="h5" component="h5">
                Total Question Answer
              </Typography>
              <Typography variant="h5" component="h5">
                40
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
