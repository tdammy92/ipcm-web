import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Container } from "@material-ui/core";
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
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SelectExam = () => {
  const classes = useStyles();
  return (
    <div className="startExam">
      <Container
        mx="auto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          //   height: "100%, 90%",
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: "90%",
            // height: "80%, 90%",
          }}
          className="paper__container"
        >
             <h4  style={{color:'primary'}} className="">Select Exam</h4>
          <Box>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ListAltIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="HSE 201" secondary="120mins" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <Checkbox
                      checked={false}
                      onChange={() => {}}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ListAltIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="PCE 201" secondary="80mins" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <Checkbox
                      checked={false}
                      onChange={() => {}}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Box>

          <Button
            mt={15}
            component={Link}
            to="/exam-result"
            variant="contained"
            color="primary"
            size="small"
          >
            Proceed !
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default SelectExam;
