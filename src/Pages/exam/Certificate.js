import { Container, Paper } from "@material-ui/core";
import React from "react";
import certificate from "../../assets/images/IGPCM_Certificate.jpeg";

const Certificate = () => {
  return (
    <Container>
      <Paper mt={10} elevation={3} style={{ padding: "20px",marginTop:25 }}>
      <img src={certificate} height="100%" width="100%" />
      </Paper>
    </Container>
  );
};

export default Certificate;
