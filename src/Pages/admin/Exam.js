import {
  Box,
  Card,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import {
  // Redirect,
  useParams,
  useHistory,
} from "react-router-dom";
import { useExam } from "../../Services/queries/exam-query";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
    marginBottom: 50,
  },
  detailsContainer: {
    //   display:'flex'
    padding: 20,
  },
  examdetails: {
    display: "flex",
  },
});

const Exam = () => {
  const { id } = useParams();
  const history = useHistory();

  const [Edit, setEdit] = useState(false);

  const classes = useStyles();
  const { data: Exam, isLoading: isLoadingExam } = useExam({
    params: { id },
  });



  return (
    <Container maxWidth="md" mx="auto">
      <Card className={classes.root}  variant="outlined" elevation={3}>
        <Box className={classes.detailsContainer}>
          <Box my={2} position="relative">
            <Typography variant="h5" align="center" component="h2">
              Exam Details
            </Typography>

            <Box style={{position:'absolute',right:20,top:5}}>
              <IconButton onClick={()=>setEdit(!Edit)}>
                <EditIcon color="primary" />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Box className={classes.examdetails}>
              <Typography variant="h5" component="h2">
                Name :
              </Typography>
              <Typography variant="h5" component="h2" contenteditable={Edit ? "true" : "false"}>
                {Exam?.examName}
              </Typography>
            </Box>
            <Box className={classes.examdetails}>
              <Typography variant="h5" component="h2">
                code :
              </Typography>
              <Typography variant="h5" component="h2" contenteditable={Edit ? "true" : "false"}>
                {Exam?.examCode}
              </Typography>
            </Box>
            <Box className={classes.examdetails}>
              <Typography variant="h5" component="h2">
                Duration :
              </Typography>
              <Typography variant="h5" component="h2" contenteditable={Edit ? "true" : "false"}>
                {Exam?.duration} Mins
              </Typography>
            </Box>
            <Box className={classes.examdetails}>
              <Typography variant="h5" component="h2">
                Total Questions :
              </Typography>
              <Typography variant="h5" component="h2" >
                {Exam?.totalQuestions}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.detailsContainer}>
          <Box mb={2}>
            <Typography variant="h5" align="center" component="h2">
              Questions
            </Typography>
          </Box>
          <Box>
            {Exam?.questions?.map((question, index) => (
              <Box my={2} key={question?._id}>
                <Box display="flex" style={{ gap: 10, alignItems: "center" }}>
                  <Typography variant="subtitle1" component="h2">
                    {index + 1}:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="h2"
                    contenteditable={Edit ? "true" : "false"}
                  >
                    {question?.question}
                  </Typography>
                </Box>
                <ol type="a">
                  {question?.options?.map((option, index) => (
                    <li key={index} style={{}}>
                      <Typography contenteditable={Edit ? "true" : "false"}>{option}</Typography>

                      <Box my={1}>
                        <Typography variant="body1" color={question?.answer === option ? "primary":""}>
                          {question?.answer === option
                            ? "Correct"
                            : "Incorrect"}
                        </Typography>
                      </Box>
                    </li>
                  ))}
                </ol>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Exam;
