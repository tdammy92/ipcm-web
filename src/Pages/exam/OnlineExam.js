import React, { useCallback, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Link,useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AccessTime, AccessTimeRounded } from "@material-ui/icons";

import { ScreenSize } from "../../Config";
import { useMediaQuery } from "react-responsive";
import { useExam } from "../../Services/queries/exam-query";

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
}));

const OnlineExam = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });
  const location = useLocation();

  const selectedExam = location?.state;


  const { data: Exam, isLoading: isLoadingExam } = useExam({
    params: { id :selectedExam?._id},
  });




  const [currentQuestion, setCurrentQuestion] = useState(0)

  // console.log("selected exammmmm ===>",JSON.stringify(selectedExam,null,3))

  const handleChange = (event) => {

    // console.log(event?.target?.value)
    setValue(event.target.value);
  };


// console.log(JSON.stringify(Exam,null,3))

  const handlePrev = ()=>{
    let prev = currentQuestion > 0 
    if (prev) {
      setCurrentQuestion(currentQuestion-1)
      
    }
    
  }


  const handleNext = useCallback(()=>{

    let next = currentQuestion < Exam?.questions?.length-1;

    if (next) {
      setCurrentQuestion(currentQuestion+1)
      
    }
  },[currentQuestion,Exam])

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
              <Typography variant={isMobile ? "body1": "h6"} component="h4">
                {selectedExam?.examName}
              </Typography>
            </Box>

            <Box>
     
                <Typography variant={isMobile ? "body1": "h6"}>{currentQuestion+1}/{Exam?.questions?.length}</Typography>
        
            </Box>
            <Box>
              <Box className={classes.timerContainer}>
                <AccessTimeRounded />
                <Typography variant={isMobile ? "body1": "h6"}>5:30</Typography>
              </Box>
            </Box>
          </Box>

          <Box pt={10} px={1}>
            <Typography variant="subtitle1" component="h5">
            { Exam?.questions?.[currentQuestion]?.question }
            </Typography>
          </Box>

          <Box className={classes.optionContainer}>
            <RadioGroup
              value={value}
              onChange={handleChange}
              className={classes.optionWrapper}
            >

              {
                Exam?.questions?.[currentQuestion]?.options?.map((option,index)=>(
                  <FormControlLabel
                  key={index}
                  value={option}
                  className={classes.radioBtn}
                  control={<Radio color="primary" className={classes.radio} />}
                  label={option}
                />
                ))
              }
            </RadioGroup>
          </Box>

          <Box  my={5} className={classes.buttonContainer}>
            <Button
            onClick={handlePrev}
              variant="contained"
              color="primary"
              size="small"
            >
              Previous
            </Button>
            <Button
            onClick={handleNext}
              variant="contained"
              color="primary"
              size="small"
            >
              Next
            </Button>
          </Box>

          <Box mb={5}>
          <Button
              component={Link}
              to="/exam-info"
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
