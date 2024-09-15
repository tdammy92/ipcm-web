import React, { useEffect, useMemo, useState } from "react";
import certificate from "../../src/assets/images/IGPCM_Certificate.jpeg";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import { pdfOptions } from "../utils";
import { usePDF } from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";
import { useCreateCertificate } from "../Services/mutations/exam-mutation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(3),
      margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  dialogueContainer: {
    // width: "100%",
    // height: "100%",
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
      minWidth: 750,
    },
  },
  button: {
    margin: theme.spacing(1),
  },

  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    minWidth: 700,
  },

  previewBox: {
    maxWidth: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    minWidth: 750,
  },
  studentName: {
    position: "absolute",
    top: 300,
    left: "18%",
    right: "10%",
    // width:'100%'
    // backgroundColor:'red'
  },
  studentCourse: {
    position: "absolute",
    top: 415,
    left: "20%",
    right: "18%",
    // backgroundColor:'yellow'
  },
  dateTaken: {
    position: "absolute",
    top: 472,
    left: "20%",
    right: "20%",
    // backgroundColor:'orange'
  },
}));

// const settings = {
//   // filename: `${studentDetail?.studentName?.split(" ")[0]} certificate`,
//   filename: `certificate`,
//   ...pdfOptions,
// };

// const options = {
//   filename: "using-function.pdf",
//   page: {
//     margin: 20,
//   },
// };

// const getTargetElement = () => document.getElementById("container");
// const printCertificate = () => generatePDF(getTargetElement, options);

const PrintCertificate = () => {
  const history = useHistory();
  const location = useLocation();
  const studentDetail = location?.state;

  const classes = useStyles();
  const componentRef = useRef();
  const {mutate:createCertificate,isLoading:isCreating} = useCreateCertificate()

  const reactPrint = useReactToPrint({
    content: () => componentRef.current,
    // onAfterPrint: () => createCertificate({studentDetail}),
  });

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const handlePrint = ()=>{

    const payload = {
      ...studentDetail,
      genrated:'manual',
      selectedCourse:studentDetail?.selectedCourse?.id
    }
    createCertificate({payload})
    reactPrint()
  }

  useEffect(() => {
    if (!studentDetail?.serialNumber) {
      history.goBack();
    }

    return () => {};
  }, [studentDetail]);

  return (
    <Container>
      <Box className={classes.previewBox}>
        <Paper
          ref={componentRef}
          className="certificate"
          mt={10}
          elevation={3}
          style={{
            marginTop: 25,
            height: 600,
            width: 800,
            minWidth: 750,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={certificate} height="100%" width="100%" />
          </div>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            className={classes.studentName}
          >
            {studentDetail?.studentName?.trim()}
          </Typography>
          <Typography
            align="center"
            variant="h6"
            className={classes.studentCourse}
          >
            {studentDetail?.selectedCourse?.courseTitle}
          </Typography>
          <Typography align="center" variant="h6" className={classes.dateTaken}>
            {studentDetail?.dateGenerated}
          </Typography>
        </Paper>
      </Box>

      <Box mt={2} style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Typography color="primary"  align="center" variant="h6">
          Ensure you print a copy of your Certificate before leaving this page
        </Typography>
      </Box>
      <Box mt={4} className={classes.btnContainer}>
        <Button
            onClick={()=> history.goBack()}
          variant="outlined"
          color="primary"
        >
          Go Back
        </Button>
        <Button
          // disabled={isUploadingExams}
          onClick={handlePrint}
          color="primary"
          variant="contained"
          autoFocus
        >
          Print Certificate
        </Button>
      </Box>
    </Container>
  );
};

export default PrintCertificate;
