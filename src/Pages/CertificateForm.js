import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("sm")]: {
      minWidth: 750,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom:12,

    // backgroundColor: "red",
  },

  formItem: {
    maxWidth: 600,
    minWidth: 500,
    height:60,
    marginTop: "15px",
    marginBottom: "15px",
    justifySelf: "center",
    // backgroundColor:'red'
  },

  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
}));

const studentDetails = {
  studentName: "",
  courseTitle: "",
  dateGenerated: "",
};

const CertificateForm = () => {
  const classes = useStyles();

  const [studentDetail, setStudentDetails] = useState(() => studentDetails);

  return (
    <Container mx="auto">
      <Box my={5}>
        <Typography variant="h5" color="primary" align="center">
          Certificate Details
        </Typography>
        <Typography variant="subtitle1" color="primary" align="center">
          Ensure all details are corect before clicking on proceed
        </Typography>
      </Box>
      <form className={classes.form} noValidate autoComplete="off">
        <Box className={classes.formItem}>
          <TextField
            id="outlined-basic"
            size="small"
            style={{ width: "100%" }}
            required
            label="Student Name"
            variant="outlined"
            value={studentDetail?.studentName}
            onChange={(e) =>
              setStudentDetails((prev) => ({
                ...prev,
                studentName: e.target.value,
              }))
            }
          />
        </Box>
        <Box className={classes.formItem}>
          <TextField
            id="outlined-basic"
            size="small"
            style={{ width: "100%" }}
            required
            label="Course Taken"
            variant="outlined"
            value={studentDetail?.courseTitle}
            onChange={(e) =>
              setStudentDetails((prev) => ({
                ...prev,
                courseTitle: e.target.value,
              }))
            }
          />
        </Box>
        <Box className={classes.formItem}>
          <TextField
            id="date"
            variant="outlined"
            label="Date Taken"
            type="date"
            defaultValue="2024-05-24"
            value={studentDetail?.dateGenerated}
            onChange={(e) =>
              setStudentDetails((prev) => ({
                ...prev,
                dateGenerated: e.target.value,
              }))
            }
            style={{ width: "100%" }}
            //  margin="normal"
            // className={classes.textField}
            InputLabelProps={
              {
                shrink: true,
              }
            }
          />
        </Box>
    
      </form>

      <Box className={classes.btnContainer}>
        <Button
          //   onClick={handleClose}
          variant="outlined"
          color="primary"
          size="large"
        >
          Cancle
        </Button>
        <Button
          // disabled={isUploadingExams}
          // onClick={handleUpload}
              size="large"
          color="primary"
          variant="contained"
          autoFocus
        >
          Generate
        </Button>
      </Box>
    </Container>
  );
};

export default CertificateForm;
