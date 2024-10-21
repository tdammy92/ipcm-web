import React, { useRef, useState } from "react";
import {
  // Redirect,
  useParams,
  useHistory,
} from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { FaUserCircle } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PrintForm from "../printForm";
// import Pdf from "react-to-pdf";
import { useStudent } from "../../Services/queries/student-query";
import { userAvater } from "../../constants";
import { useDeleteStudent } from "../../Services/mutations/student-mutation";
import { Icon } from "@material-ui/core";
import {
  useCreateCourse,
  useUpdateCourse,
} from "../../Services/mutations/course-mutation";
import { useExams } from "../../Services/queries/exam-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { getOneMonthFromNow } from "../../utils";
import moment from "moment";
import { useAddExamToStudent } from "../../Services/mutations/exam-mutation";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 30,
    marginBottom: 20,
  },
  divider: {
    backgroundColor: "#01996D",
  },
  gridContainer: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  subHeading: {
    textTransform: "uppercase",
  },

  passport: {
    borderRadius: 4,
    height: 180,
    width: 200,
    objectFit: "cover",
  },
  valueColum: {
    marginTop: 7,
  },
  title: {
    marginRight: 5,
  },
  value: {
    fontWeight: 500,
  },

  examContainer: {
    maxHeight: 400,
    minWidth: 800,
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
      minWidth: 400,
    },

    maxWidth: 500,
    minWidth: 400,
  },
  formItem: {
    width: "100%",
    marginTop: "15px",
    marginBottom: "15px",
    // backgroundColor:'blue'

    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },

  dialogoFooter: {
    marginBottom: 20,
    justifyContent: "space-around",
  },

  dialogueContainer: {
    width: "100%",
    // backgroundColor:'red',
  },

  btnCustom: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
      minWidth: "120px",
    },
    margin: theme.spacing(1),
    minWidth: "150px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { id: "exam", label: "EXAM", minWidth: 100 },
  { id: "Status", label: "STATUS", minWidth: 100 },
  {
    id: "score",
    label: "SCORE",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dateWritten",
    label: "DATE WRITTEN",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dueDate",
    label: "DUE DATE",
    minWidth: 40,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Action",
    label: "ACTION",
    minWidth: 40,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const InitialExam = {
  exam: {},
  status: "pending",
  dueDate: moment(getOneMonthFromNow()).format("YYYY-MM-DD"),
};

function Student() {
  const { id } = useParams();

  const history = useHistory();

  const classes = useStyles();
  const { details } = useSelector((state) => state.users);

  const { data: studentDetails, isLoading: isLoadingStudent } = useStudent({
    id,
    enabled: !!id,
  });

  console.log(JSON.stringify(studentDetails, null, 3));
  const { data: ExamList, isLoading: isLoadingExams } = useExams({});
  const { mutateAsync, isLoading: isDeleteing } = useDeleteStudent();

  const [openExamBox, setOpenExamBox] = useState(false);

  const [examDetails, setExamDetails] = useState(() => InitialExam);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isUpdating, setIsUpdating] = useState(false);

  const { mutateAsync: addExamToStudentMutation, isLoading: isAddingCourse } =
    useAddExamToStudent();

  const { mutateAsync: updateCourseMutation, isLoading: isUpdatingCourse } =
    useUpdateCourse();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //function to delete student
  const DeleteStudent = async () => {
    const documentIds = studentDetails?.documents?.map(
      (doc) => doc?.file?.public_id
    );

    const mongoStudentId = studentDetails?._id;
    const cloudinaryPublicIds = [
      ...(studentDetails?.passport?.public_id
        ? [studentDetails?.passport?.public_id]
        : []),
      ...(documentIds.length > 0 ? [...documentIds] : []),
    ];

    const payload = {
      mongoStudentId,
      cloudinaryPublicIds,
    };

    try {
      const res = await mutateAsync({ id, payload });

      if (res.status) {
        history.replace("/students");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const componentRef = useRef();

  const handleClose = () => {
    if (isUpdating) {
      setIsUpdating(false);
      setExamDetails(InitialExam);
    }
    setOpenExamBox(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });

  const handleAdd = async () => {
    // console.log("exam detailssss ===>", JSON.stringify(examDetails, null, 3));
    if (!examDetails?.exam?.examName) {
      toast.error(`Please select an Exam`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }
    const { exam, dueDate, ...rest } = examDetails;

    const payload = {
      ...rest,
      examId: examDetails?.exam?._id,
      studentId: id,
      dueDate: new Date(dueDate),
      // dueDate:moment(dueDate).format("DD/MM/YYYY"),
      AddedBy: details?._id,
    };

    console.log("exam payload ===>", JSON.stringify(payload, null, 3));

    try {
      const addExam = await addExamToStudentMutation({ payload });

      if (addExam.status === 201) {
        // setExamDetails(InitialExam);
        // setOpenExamBox(false);
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
  const handleUpdate = async () => {
    // if (examDetails.courseTitle === "") {
    //   toast.error(`Course title can not be empty`, {
    //     position: "bottom-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return;
    // }
    // const payload = {
    //   ...examDetails,
    // };
    // try {
    //   const postExam = await updateCourseMutation({ payload });
    //   if (postExam.status === 201) {
    //     setExamDetails(InitialExam);
    //     setOpenExamBox(false);
    //   }
    // } catch (error) {
    //   toast.error(`${typeof error === "string" ? error : error?.message}`, {
    //     position: "bottom-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     // pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  // console.log(JSON.stringify(studentDetails, null, 2));

  // console.log(examDetails);

  return (
    <>
      {!isLoadingStudent && (
        <div>
          <Container maxWidth="md" mx="auto">
            <Card className={classes.root} variant="outlined" elevation={3}>
              <CardContent ref={componentRef}>
                <Box style={{ marginBottom: 10 }}>
                  <Typography
                    color="primary"
                    align="center"
                    variant="subtitle1"
                  >
                    INSTITUTE OF GLOBAL PEACE AND CONFLICT MANAGEMENT
                  </Typography>
                  <Typography align="center">
                    Head office:Suite 311 a&b, 2nd floor, Beta foundation plaza
                    No:359, Ebitu Ukiwe str, Jabi, abuja
                  </Typography>
                  <Typography align="center">
                    igpcminfo@gmail.com || +2347033458730 || RC:1787595
                  </Typography>
                </Box>
                <Divider className={classes.divider} />
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="primary"
                  className={classes.subHeading}
                >
                  Basic details
                </Typography>
                <Grid container className={classes.gridContainer}>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Title:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.title}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Name:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.surname} {studentDetails?.firstName}{" "}
                        {studentDetails?.middleName}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Phone:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.phoneNumber}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Email:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.email}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Date of Birth:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {new Date(studentDetails?.dob).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Gender:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.gender}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Nationality:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.country}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        State/Province:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.state}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Qualification:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.eduQualification}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={6}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box roundeds style={{ maxWidth: 150 }}>
                      {studentDetails?.passport ? (
                        <img
                          alt={`${studentDetails.firstName} ${studentDetails.surname}`}
                          src={studentDetails?.passport?.url ?? userAvater}
                          className={classes.passport}
                        />
                      ) : (
                        <FaUserCircle size={180} color="#01996D" />
                      )}
                    </Box>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.subHeading}
                  variant="subtitle1"
                  align="center"
                  color="primary"
                >
                  Employment details
                </Typography>
                <Grid container className={classes.gridContainer}>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Organisation:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.currentEmploymet?.organization}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Role/Postion:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {" "}
                        {studentDetails?.currentEmploymet?.position}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Years of Experience:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.currentEmploymet?.yearsExperience}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Date Joined:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {new Date(
                          studentDetails?.currentEmploymet?.startDate
                        ).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Address:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.currentEmploymet?.location}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.subHeading}
                  variant="subtitle1"
                  align="center"
                  color="primary"
                >
                  Course Application Details
                </Typography>
                <Grid container className={classes.gridContainer}>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Application Fee:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.applicationFee}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Payment Method:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {" "}
                        Payment Method: {studentDetails?.paymentMethods}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        MemberShip Cader:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.membershipCadre}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Membership Route:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.membershipRoute}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        PGD Course:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.pgdCourses}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Membership Type:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.membershipType?.join()}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.valueColum}
                    >
                      <Typography variant="subtitle1" className={classes.title}>
                        Academic Programs:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.value}
                      >
                        {studentDetails?.academicPrograms?.join()}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                gutterBottom
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor:'red',
                    gap: 20,
                  }}
                >
                  <Button
                    onClick={handlePrint}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<PrintIcon />}
                  >
                    Print
                  </Button>

                  <PDFDownloadLink
                    document={<PrintForm studentDetails={studentDetails} />}
                    fileName={`IGPCM_FORM_REPRINT_${studentDetails?.surname}`}
                  >
                    {({ loading }) =>
                      loading ? (
                        <Button disabled={true} color="primary">
                          Getting Pdf
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.button}
                          startIcon={<PictureAsPdfIcon />}
                        >
                          Pdf
                        </Button>
                      )
                    }
                  </PDFDownloadLink>

                  {/* <Pdf
            targetRef={componentRef}
            filename={`${Details.surname}-${Details.firstName}`}
          >
            {({ toPdf }) => (
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={toPdf}
                className={classes.button}
                startIcon={<PictureAsPdfIcon />}
              >
                Pdf
              </Button>
            )}
          </Pdf> */}

                  <Button
                    variant="outlined"
                    size="small"
                    // color="error"
                    style={{ color: "red" }}
                    endIcon={<DeleteForeverIcon />}
                    onClick={DeleteStudent}
                  >
                    Remove
                  </Button>
                </Box>

                <Box mt={4}>
                  <Typography align="center" color="primary" variant="h6">
                    STUDENT EXAMINATION's
                  </Typography>

                  <Box
                    my={1}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      // disabled={true}
                      onClick={() => setOpenExamBox(true)}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<AddCircleIcon />}
                    >
                      Add Exam
                    </Button>
                  </Box>
                  <TableContainer className={classes.examContainer}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>

                      {studentDetails?.Exams?.length < 1 ? (
                        <TableRow>
                          <TableCell align="center" colSpan={6}>
                            No Exam Found
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableBody>
                          {studentDetails?.Exams.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )?.map((item, i) => {

                            const {}  = item
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                <TableCell
                             
                                ></TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      )}
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={studentDetails?.Exams?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Box>
              </CardActions>
            </Card>
          </Container>
        </div>
      )}

      <Dialog
        open={openExamBox}
        onClose={handleClose}
        className={classes.dialogueContainer}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color="primary" id="alert-dialog-title" align="center">
          {isUpdating ? "EDIT" : "ADD"} EXAM TO STUDENT PROFILE
        </DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <Box className={classes.formItem}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select Exam
                </InputLabel>
                <Select
                  disabled={isUpdating}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={examDetails?.exam?.examName}
                  onChange={(e) => {
                    const index = ExamList?.findIndex(
                      (x) => x?.examName === e?.target?.value
                    );
                    const examN = ExamList?.[index];
                    setExamDetails((prev) => ({
                      ...prev,
                      exam: { ...examN },
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

                  {ExamList?.map((exam) => {
                    return (
                      <MenuItem key={exam?._id} value={exam?.examName}>
                        {exam?.examName}
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
                label="Due Taken"
                type="date"
                format="dd/mm/yyyy"
                defaultValue={examDetails?.dueDate}
                value={examDetails?.dueDate}
                onChange={(e) =>
                  setExamDetails((prev) => ({
                    ...prev,
                    dueDate: e.target.value,
                  }))
                }
                style={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box className={classes.formItem}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Exam Status
                </InputLabel>
                <Select
                  disabled={!isUpdating}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={examDetails?.status}
                  onChange={(e) => {
                    console.log(e.target);
                    setExamDetails((prev) => ({
                      ...prev,
                      status: e.target.value,
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
                  <MenuItem value="pending">
                    <em>Pending</em>
                  </MenuItem>
                  <MenuItem value="completed">
                    <em>Completed</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogoFooter}>
          <Button
            onClick={handleClose}
            variant="outlined"
            className={classes.btnCustom}
            size="medium"
            color="primary"
          >
            Cancle
          </Button>
          {isUpdating ? (
            <Button
              disabled={isUpdatingCourse}
              onClick={handleUpdate}
              color="primary"
              size="medium"
              className={classes.btnCustom}
              variant="contained"
              autoFocus
            >
              {isUpdatingCourse ? "Updating.." : "Update"}
            </Button>
          ) : (
            <Button
              className={classes.btnCustom}
              disabled={isAddingCourse}
              onClick={handleAdd}
              color="primary"
              size="medium"
              variant="contained"
              autoFocus
            >
              {isAddingCourse ? "Adding.." : "Add"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Student;
