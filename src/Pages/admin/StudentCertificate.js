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
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Slide from "@material-ui/core/Slide";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TableLoader from "../../components/Loaders/TableLoader";
import { useUploadExam } from "../../Services/mutations/exam-mutation";
import { useExams } from "../../Services/queries/exam-query";
import certificate from "../../assets/images/IGPCM_Certificate.jpeg";
import { useAllCertificate } from "../../Services/queries/student-query";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDeleteCertificate } from "../../Services/mutations/student-mutation";

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

  //   form: {
  //     [theme.breakpoints.down("sm")]: {
  //       // backgroundColor:'red'
  //     },

  //     maxWidth: 500,
  //   },
  form: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor:'red'
      minWidth: 750,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    // backgroundColor: "red",
  },

  formItem: {
    maxWidth: 600,
    minWidth: 500,
    marginTop: "15px",
    marginBottom: "15px",
    justifySelf: "center",
    // backgroundColor:'blue'
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
    fontSize: "70px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    marginLeft: "20px",
  },
  cardsInfoIcon2: {
    fontSize: "40px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    marginLeft: "10px",
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
  },

  previewBox: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    // alignItems:'center'
  },
  studentName: {
    position: "absolute",
    top: 300,
    left: "20%",
    right: "20%",
    // backgroundColor:'red'
  },
  studentCourse: {
    position: "absolute",
    top: 412,
    left: "20%",
    right: "20%",
    // backgroundColor:'yellow'
  },
  dateTaken: {
    position: "absolute",
    top: 475,
    left: "20%",
    right: "20%",
    // backgroundColor:'orange'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const studentDetails = {
  studentName: "",
  courseTitle: "",
  dateGenerated: "",
};

const StudentCertificate = () => {
  const classes = useStyles();

  const { details } = useSelector((state) => state.users);

  const [openDeleteBox, setOpenDeleteBox] = useState(false);
  const [certificateToDelete, setCertificateToDelete] = useState(null);

  const { data: CertificateList, isLoading: isLoadingExams } =
    useAllCertificate({
      params: { type: "full" },
    });

  const { mutateAsync: deleteCertificate, isLoading: deletingCertficate } =
    useDeleteCertificate();

  const [studentDetail, setStudentDetails] = useState(() => studentDetails);

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

  const OpenDeleteBox = (deleteItem) => {
    setCertificateToDelete(deleteItem);
    setOpenDeleteBox(true);
  };

  const closeDeleteBox = () => {
    setCertificateToDelete(null);
    setOpenDeleteBox(false);
  };

  //handle Uploads

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteCertificate = async () => {
    // console.log("before api call +++"  ,courseToDelete)
    let payload = {
      profileId: details?._id,
    };
    const res = await deleteCertificate({
      id: certificateToDelete?._id,
      payload,
    });
    if (res) {
      closeDeleteBox();
    }
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Typography variant="h5" component="h3" align="center" color="primary">
          STUDENT CERTIFICATE
        </Typography>
        {/* 
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
            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<CreateIcon />}
            >
              Create Certificate
            </Button>
          </Box>
        </Paper> */}

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
                      align="left"
                      style={{
                        maxWidth: 30,
                      }}
                    >
                      S/N
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 120,
                      }}
                    >
                      Name
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Course
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Date
                    </TableCell>

                    {details?.role === "SUPER_ADMIN" && (
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        Action
                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>
                {isLoadingExams ? (
                  <TableLoader
                    rows={ 5}
                    colums={details?.role === "SUPER_ADMIN" ? 5 : 6}
                  />
                ) : (
                  <TableBody>
                    {CertificateList?.length < 1 ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          No Result Found
                        </TableCell>
                      </TableRow>
                    ) : (
                      CertificateList?.map((item, index) => {
                        const { _id, studentName, selectedCourse, createdAt } =
                          item;
                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={_id}
                            // component={Link}
                            // to={`exams/${_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">{studentName}</TableCell>
                            <TableCell align="center">
                              {selectedCourse?.courseTitle}
                            </TableCell>
                            <TableCell align="center">
                              {new Date(createdAt).toLocaleDateString()}
                            </TableCell>
                            {details?.role === "SUPER_ADMIN" && (
                              <TableCell align="center">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => OpenDeleteBox(item)}
                                  color="primary"
                                >
                                  <DeleteIcon color="error" />
                                </IconButton>
                              </TableCell>
                            )}
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
              count={CertificateList?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </Container>

      <Dialog
        open={openDeleteBox}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDeleteBox}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Delete Certificate
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to delete a certificate ment for{" "}
            <b>{certificateToDelete?.studentName}</b>, this can not be undone,
            do you want to proceed ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteBox}>No</Button>
          <Button
            disabled={deletingCertficate}
            onClick={handleDeleteCertificate}
            color="primary"
          >
            {deletingCertficate ? "Deleting..." : "Yes"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentCertificate;
