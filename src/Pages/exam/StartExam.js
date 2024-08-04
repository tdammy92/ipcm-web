import React from "react";

import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const StartExam = () => {
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
          StartExam
          <h1>Start Exam</h1>
          <Button
            mt={15}
            component={Link}
            to="/result"
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

export default StartExam;
