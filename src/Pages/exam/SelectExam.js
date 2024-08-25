import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Container, Radio, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
import { useExams } from "../../Services/queries/exam-query";

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

const SelectExam = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });
  const { data: ExamList, isLoading } = useExams({ params: {} });
  const [selectExam, setSelectExam] = useState({})

  const handleChange = (event,index) => {

    // console.log("eventtt",{event},{index})

    const value = ExamList[index]

   let  selectExam = value?.examCode === event.target.value ? value :{}
    setSelectExam(selectExam);
  };

  return (
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
                        primary={exam?.examCode}
                        secondary={exam?.examName}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <Radio
                          color="primary"
                            checked={selectExam.examCode === exam?.examCode}
                            onChange={(e)=>handleChange(e,index)}
                            value={exam?.examCode}
                            name="radio-button-demo"
                            inputProps={{ "aria-label": exam?.examCode }}
                          />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </Box>

            <Box p={5} mx="auto">
              <Button
                component={Link}
                to={{pathname: "/online-exam",state:selectExam}}
                variant="contained"
                color="primary"
                size="small"
                disabled={!selectExam.examCode}
              >
                Proceed !
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default SelectExam;
