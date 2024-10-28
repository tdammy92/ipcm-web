import React, { useCallback, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Link, useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AccessTime, AccessTimeRounded } from "@material-ui/icons";

import { ScreenSize } from "../../Config";
import { useMediaQuery } from "react-responsive";
import { useExam } from "../../Services/queries/exam-query";
import { useDispatch, useSelector } from "react-redux";
import { goToprevQuestion, goToNextQuestion, updateResult } from "../../Store/exam-feature";
import ExamTimer from "./ExamTimer";
import { useSubmitResult } from "../../Services/mutations/exam-mutation";

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
    position: "absolute",
    top: 0,
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
    width: "95%",
    // height: 40,
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
  btnCustom: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
      minWidth: "120px",
    },
    margin: theme.spacing(1),
    minWidth: "200px",
  },
}));

const OnlineExam = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // const selectedExam = location?.state;

  // const { data: Exam, isLoading: isLoadingExam } = useExam({
  //   params: { id :selectedExam?._id},
  // });

  const { mutateAsync: submitExamMutation, isLoading } = useSubmitResult();

  const { Exam, currentExamIndex,answers ,studentDetails} = useSelector((store) => store.exam);


  // console.log("selected exammmmm ===>",JSON.stringify(Exam,null,3))

  const handleChange = (event) => {
    // console.log(event?.target?.value)
    setValue(event.target.value);
  };

  // console.log(JSON.stringify(Exam,null,3))

  const handlePrev = () => {
    if (currentExamIndex > 0) {
      dispatch(goToprevQuestion());
    }
  };

  const handleNext = () => {
    if (currentExamIndex < Exam?.questions?.length - 1) {
      dispatch(goToNextQuestion(selectedAnswer));
    }

    if (currentExamIndex === Exam?.questions?.length - 1) {
      handleSubmitExam();
    }
    setSelectedAnswer(null);
  };

  const closeExam = () => {
    // history.push("/exam-result");

    history.replace("/exam-result");  
  };

  const handleValue = (selectedOption, question) => {
    setSelectedAnswer({
      ...question,
      selectedOption: !!selectedOption ? selectedOption : null,
    });
  };

  const handleQuitExam = useCallback(() => {}, []);

  const handleSubmitExam = async () => {

    const {questions,...rest}  = Exam;
    try {
      const payload = {
        studentDetails,
        Exam:{...rest},
        answers
      };
      const res = await submitExamMutation({ payload });
      if (res.data) {
dispatch(updateResult(res?.data))
        closeExam();
      }
    } catch (error) {}
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
          elevation={4}
          style={{
            width: "90%",
            height: "100%",
            position: "relative",
          }}
          className="paper__container"
        >
          <Box className={classes.header}>
            <Box>
              <Typography variant={isMobile ? "body1" : "h6"} component="h4">
                {Exam?.examName}
              </Typography>
            </Box>

            <Box>
              <Typography variant={isMobile ? "body1" : "h6"}>
                {currentExamIndex + 1}/{Exam?.questions?.length}
              </Typography>
            </Box>
            <Box>
              <Box className={classes.timerContainer}>
                <AccessTimeRounded />
                <ExamTimer examtime={Exam?.duration} closeExam={closeExam} />
              </Box>
            </Box>
          </Box>

          <Box pt={10} px={1}>
            <Typography variant="subtitle1" component="h5">
              {Exam?.questions?.[currentExamIndex]?.question}
            </Typography>
          </Box>

          <Box className={classes.optionContainer}>
            <RadioGroup
              value={value}
              onChange={handleChange}
              className={classes.optionWrapper}
            >
              {Exam?.questions?.[currentExamIndex]?.options?.map(
                (option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    onChange={(e) =>
                      handleValue(
                        e.target.value,
                        Exam?.questions?.[currentExamIndex]
                      )
                    }
                    className={classes.radioBtn}
                    control={
                      <Radio color="primary" className={classes.radio} />
                    }
                    label={option}
                  />
                )
              )}
            </RadioGroup>
          </Box>

          <Box my={2} className={classes.buttonContainer}>
            <Button
              className={classes.btnCustom}
              onClick={handlePrev}
              variant="contained"
              color="primary"
              size="small"
            >
              Previous
            </Button>
            <Button
              className={classes.btnCustom}
              onClick={handleNext}
              variant="contained"
              color="primary"
              size="small"
            >
              {currentExamIndex === Exam?.questions?.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </Box>

          <Box mb={5}>
            <Button
              onClick={handleQuitExam}
              className={classes.btnCustom}
              // component={Link}
              // to="/exam-info"
              variant="outlined"
              color="primary"
              size="small"
            >
              Quit
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default OnlineExam;
