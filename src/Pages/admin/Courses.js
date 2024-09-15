import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { useSelector } from "react-redux";
import TableLoader from "../../components/Loaders/TableLoader";
import { useCreateCourse } from "../../Services/mutations/exam-mutation";
import { useCourses, useExams } from "../../Services/queries/exam-query";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

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
  root2: {
    width: "100%",
  },

  form: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
    },

    maxWidth: 500,
    minWidth: 400,
  },

  tableContainer: {
    maxHeight: 550,
  },

  headerCard: {
    display: "flex",
    width: "auto",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    maxHeightheight: "150px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    // flexWrap: "wrap",

    // backgroundColor: "yellow",
    // border: "1px solid  red",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
    width: "45%",
    // minWidth: "80px",
    textDecoration: "none",
    borderRadius: 2,
    margin: "8px",

    // border: "1px solid  blue",
  },

  cardsInfoIcon: {
    fontSize: "40px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    marginLeft: "20px",
  },

  formItem: {
    width: "100%",
    marginTop: "15px",
    marginBottom: "15px",
    // backgroundColor:'blue'
  },

  dialogoFooter: {
    marginBottom: 20,
    justifyContent: "space-around",
  },

  dialogueContainer: {
    width: "100%",
    // backgroundColor:'red',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InitialCourse = {
  courseTitle: "",
  courseDescription: "",
  exam: {},
};

function Courses() {
  const classes = useStyles();
  const { details } = useSelector((state) => state.users);

  const { data: ExamList, isLoading: isLoadingExams } = useExams({});
  const { data: CoursesList, isLoading: isLoadingCourses } = useCourses({});

  const { mutateAsync: createCourseMutation, isLoading: isCreatingCourse } =
    useCreateCourse();

  const [courseDetails, setCourseDetails] = useState(() => InitialCourse);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = React.useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //handle Uploads

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async () => {
    if (courseDetails.courseTitle === "") {
      toast.error(`Course title can not be empty`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }

    const payload = {
      ...courseDetails,
      exam:courseDetails?.exam?.id,
      createdBy: details?._id,
    };



    try {
      const postExam = await createCourseMutation({ payload });

      if (postExam.status === 201) {
        setCourseDetails(InitialCourse);
        setOpen(false);
      }
    } catch (error) {
      toast.error(`${typeof error === "string" ? error : error?.message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };



  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Typography variant="h5" component="h3" align="center" color="primary">
          Courses
        </Typography>

        <Paper elevation={2} p={2} className={classes.headerCard}>
          <Box
            m={3}
            mx="auto"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FaBook
              className={classes.cardsInfoIcon}
              onClick={handleClickOpen}
            />
          </Box>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            color="primary"
          >
            Create new course
          </Typography>
        </Paper>

        <div>
          <Paper className={classes.root2}>
            <TableContainer
              className={classes.container}
              // ref={componentRef}
            >
              <Table stickyHeader aria-label="sticky table" id="table-to-xls">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 120,
                      }}
                    >
                      Course
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 80,
                      }}
                    >
                      Description
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Exam
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Created by
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Created On
                    </TableCell>
                  </TableRow>
                </TableHead>
                {isLoadingExams ? (
                  <TableLoader rows={5} colums={6} />
                ) : (
                  <TableBody>
                    {ExamList?.length < 1 ? (
                      <TableRow>
                        <TableCell>No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      CoursesList?.map((item) => {
                        const {
                          _id,
                          courseTitle,
                          courseDescription,
                          exam,
                          createdBy,
                          createdAt,
                        } = item;
                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={_id}
                            // component={Link}
                            // to={`exams/${_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">{courseTitle}</TableCell>
                            <TableCell align="center">{courseDescription}</TableCell>
                            <TableCell align="center">{exam?.examCode}</TableCell>

                            <TableCell align="center">
                              {createdBy?.username}
                            </TableCell>

                            <TableCell align="center">
                              {new Date(createdAt).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={ExamList?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialogueContainer}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color="primary" id="alert-dialog-title" align="center">
          Create Course
        </DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <Box className={classes.formItem}>
              <TextField
                id="outlined-basic"
                size="small"
                style={{ width: "100%" }}
                required
                label="Course Title"
                variant="outlined"
                value={courseDetails?.courseTitle}
                onChange={(e) =>
                  setCourseDetails((prev) => ({
                    ...prev,
                    courseTitle: e.target.value,
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
                label="Course Description"
                variant="outlined"
                value={courseDetails.courseDescription}
                onChange={(e) =>
                  setCourseDetails((prev) => ({
                    ...prev,
                    courseDescription: e.target.value,
                  }))
                }
              />
            </Box>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">Exam</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
                value={courseDetails?.exam?.examName}
                onChange={(e) => {
                  const index = ExamList?.findIndex(x=>x?.examName===e?.target?.value)
                  const {examName,_id} = ExamList?.[index];
                  setCourseDetails((prev) => ({
                    ...prev,
                    exam: {examName,id:_id},
                  }))
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

                {ExamList?.map((exam) => {
                  return (
                    <MenuItem
                     key={exam?._id} 
                    value={exam?.examName}
                    >
                      {exam?.examName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogoFooter}>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancle
          </Button>
          <Button
            disabled={isCreatingCourse}
            onClick={handleUpload}
            color="primary"
            variant="contained"
            autoFocus
          >
            {isCreatingCourse ? "Uploading.." : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Courses;
