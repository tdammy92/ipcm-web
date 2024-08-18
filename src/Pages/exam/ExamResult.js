import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function ExamResult() {
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
          Exam Result
          <h1>Result</h1>
          <Button
            mt={15}
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
