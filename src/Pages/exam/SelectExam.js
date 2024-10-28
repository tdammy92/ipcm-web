import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Container, Radio, Typography } from "@material-ui/core";
import { Link, useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { ScreenSize } from "../../Config";
import { useMediaQuery } from "react-responsive";
import {
  useExam,
  useExams,
  useStudentExams,
} from "../../Services/queries/exam-query";
import Divider from "@material-ui/core/Divider";
import { useDispatch } from "react-redux";
import { addExam, addStudent } from "../../Store/exam-feature";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      minWidth: 280,
      maxHeight: 500,
    },
    minWidth: 360,
    maxWidth: 500,
    maxHeight: 500,
    paddingTop: 50,
    backgroundColor: theme.palette.background.paper,
  },
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SelectExam = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();

  const studentDetails = location?.state;

  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });
  // const { data: ExamList, isLoading } = useExams({ params: {} });
  const { data: ExamList, isLoading } = useStudentExams({
    id: studentDetails?._id,
    enabled: !!studentDetails?._id,
  });
  const [selectExam, setSelectExam] = useState({});

  const { data: Exam, isLoading: isLoadingExam } = useExam({
    params: { id: selectExam?.exam?._id },
  });

  const [openProceedBox, setOpenProceedBox] = useState(false);

  // console.log("exam list", JSON.stringify(Exam, null, 3));
  // console.log("student details", JSON.stringify(studentDetails, null, 3));
  // console.log("selected exam", JSON.stringify(selectExam, null, 3));

  const handleChange = (event, index) => {
    // console.log("eventtt",{event},{index})

    const value = ExamList[index];

    let selectExam = value?.exam?.examCode === event.target.value ? value : {};
    setSelectExam(selectExam);
  };

  const closeProceedBox = () => {
    setOpenProceedBox(false);
  };

  const ProceedToExam = () => {
    dispatch(addStudent(studentDetails));
    dispatch(addExam(Exam));

    if (Exam?.questions) {
      history.push("/online-exam");
    }
    // console.log(JSON.stringify(Exam,null,3))
  };
  //add a useEffect that takes the user back if student details is not available

  console.log(JSON.stringify(ExamList, null, 3));
  return (
    <>
      <div className="startExam">
        <Container
          mx="auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90%",
          }}
        >
          <Box
            mt={5}
            style={{
              width: "100%",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <Paper
              mt={20}
              elevation={3}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                position: "relative",
              }}
            >
              <Box className={classes.header}>
                <Typography variant={isMobile ? "h6" : "h5"} component="h4">
                  SELECT EXAM
                </Typography>
              </Box>

              <Box className={classes.root}>
                <List>
                  {ExamList?.map((exam, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar>
                            <ListAltIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={exam?.exam?.examCode}
                          secondary={exam?.exam?.examName}
                        />

                        {exam?.status !== "completed" && (
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <Radio
                                color="primary"
                                disabled={exam?.status === "completed"}
                                checked={
                                  selectExam.exam?.examCode ===
                                  exam?.exam?.examCode
                                }
                                onChange={(e) => handleChange(e, index)}
                                value={exam?.exam?.examCode}
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": exam?.exam?.examCode,
                                }}
                              />
                            </IconButton>
                          </ListItemSecondaryAction>
                        )}
                      </ListItem>
                    );
                  })}
                </List>
              </Box>

              <Box p={5} mx="auto">
                <Button
                  // component={Link}
                  // to={{ pathname: "/online-exam", state: selectExam }}
                  onClick={() => setOpenProceedBox(true)}
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={!selectExam.exam?.examCode}
                >
                  Proceed
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
      <Dialog
        open={openProceedBox}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeProceedBox}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Hi 👋🏽{" "}
          <b>
            {studentDetails?.surname} {studentDetails?.firstName}
          </b>{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to take <b>{selectExam?.exam?.examName}</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Exam Code <b>{selectExam?.exam?.examCode}</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Exam duration <b>{selectExam?.exam?.duration} Minutes 🕒</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Total Questions <b>{selectExam?.exam?.totalQuestions}</b>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-slide-description">
            <b>Instructions</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            1. The Exam Auto submits after the 60mins duration
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            2. Ensure you dont reload the exam screen
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            3. Abandoning the exam when the exam has started, will trigger an
            auto submit
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closeProceedBox} color="primary">
            Take later
          </Button>
          <Button onClick={ProceedToExam} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SelectExam;
