import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useCourses } from "../Services/queries/exam-query";
import { useValidateSerial } from "../Services/mutations/serialNumber-mutation";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("sm")]: {
      minWidth: 750,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,

    // backgroundColor: "red",
  },

  formItem: {
    maxWidth: 600,
    minWidth: 500,
    height: 60,
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
  selectedCourse: { id: "", courseTitle: "" },
  dateGenerated: "",
  serialNumber: "",
};

const CertificateForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [studentDetail, setStudentDetails] = useState(() => studentDetails);
  const { data: CoursesList, isLoading: isLoadingCourses } = useCourses({});

  const {
    mutateAsync: validateSerial,
    isPending,
    isLoading: validatingSerial,
  } = useValidateSerial();

  const handleGenerate = async () => {
    if (
      studentDetail?.studentName === "" ||
      studentDetail?.selectedCourse === "" ||
      studentDetail?.serialNumber === "" ||
      studentDetail?.dateGenerated === ""
    ) {
      toast.error(`Complete details`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });

      return;
    }
    try {
      let resp = await validateSerial({ serial: studentDetail?.serialNumber });
      if (resp?.data?.isValid) {
        history.push({ pathname: "/print-certificate", state: studentDetail });
      } else {
        toast.error(`Invalid serial number `, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "light",
        });
      }
    } catch (error) {}
  };

  // console.log(JSON.stringify(CoursesList,null,3));
  // console.log(JSON.stringify(studentDetail,null,3));

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
            inputProps={{ maxLength: 28 }}
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
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Course
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={studentDetail?.selectedCourse?.courseTitle}
              onChange={(e) => {
                const index = CoursesList?.findIndex(
                  (x) => x?.courseTitle === e?.target?.value
                );
                const { courseTitle, _id } = CoursesList?.[index];
                setStudentDetails((prev) => ({
                  ...prev,
                  selectedCourse: { id: _id, courseTitle },
                }));
              }}
              label="Exam"
              inputProps={{
                name: "Exam",
                id: "outlined-age-native-simple",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {CoursesList?.map((course) => {
                return (
                  <MenuItem key={course?._id} value={course?.courseTitle}>
                    {" "}
                    {course?.courseTitle}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box className={classes.formItem}>
          <TextField
            id="outlined-basic"
            size="small"
            style={{ width: "100%" }}
            required
            inputProps={{ maxLength: 20 }}
            label="Serial Number"
            placeholder="####-####-####-####-####"
            variant="outlined"
            value={studentDetail?.serialNumber}
            onChange={(e) =>
              setStudentDetails((prev) => ({
                ...prev,
                serialNumber: e.target.value,
              }))
            }
          />
        </Box>
      </form>

      <Box className={classes.btnContainer}>
        <Button
     onClick={()=> history.goBack()}
          variant="outlined"
          color="primary"
          size="large"
        >
          Cancle
        </Button>
        <Button
          disabled={validatingSerial}
          onClick={handleGenerate}
          size="large"
          color="primary"
          variant="contained"
          autoFocus
        >
          {!validatingSerial ? "Proceed" : "Processing"}
        </Button>
      </Box>
    </Container>
  );
};

export default CertificateForm;
