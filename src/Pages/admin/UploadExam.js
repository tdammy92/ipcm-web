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
import { ImUpload } from "react-icons/im";
import { MdDownloadForOffline } from "react-icons/md";
import { toast } from "react-toastify";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { read, utils } from "xlsx";
import QUESTION_TEMPLATE from "../../assets/document/QUESTION_TEMPLATE.xlsx";
import TableLoader from "../../components/Loaders/TableLoader";
import { useUploadExam } from "../../Services/mutations/exam-mutation";
import { useExams } from "../../Services/queries/exam-query";


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


      maxWidth:500
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

  dialogueContainer:{
    width: "100%",
    // backgroundColor:'red',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InitialExam = {
  examName: "",
  examCode: "",
  duration: 0,
  questions: [],
};

function UploadExam() {
  const classes = useStyles();

  const docRef = useRef(null);
  const { details } = useSelector((state) => state.users);

  const { data: ExamList, isLoading: isLoadingExams } = useExams({
    params: { type: "full" },
  });
  const { mutateAsync: uploadMutation, isLoading: isUploadingExams } =
    useUploadExam();

  const [Exam, setExam] = useState(() => InitialExam);

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
  const OpenFilePicker = (e) => {
    e.preventDefault();
    if (docRef?.current) {
      docRef?.current?.click();
    }
  };

  const extractSheet = (e) => {
    //get file from input
    const file = e?.target?.files[0];

    //instantiate a new file reader
    const fileReader = new FileReader();

    //conver file to binary
    fileReader.readAsBinaryString(file);

    //red file
    fileReader.onload = (e) => {
      const data = e.target.result;
      const workbook = read(data, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      /* get first worksheet */
      const raw_data = utils.sheet_to_json(worksheet);
      // const raw_data = utils.sheet_to_json(worksheet, {
      //   header: 1,
      // });

      const transformedData = raw_data
        ?.map((exam) => {
          const { qstNumber, question, answer, ...rest } = exam;
          const options = Object.values(rest);

          if (!question) {
            toast.error(`Qst ${qstNumber} is not filled`, {
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

          if (!answer) {
            toast.error(`Qst ${qstNumber} has no answer`, {
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
          return {
            qstNumber,
            question,
            answer,
            options,
          };
        })
        ?.filter(Boolean);

      if (!!raw_data) {
        setExam((prev) => ({
          ...prev,
          questions: transformedData,
        }));
      }
    };
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async () => {
    if (Exam.examName === "") {
      toast.error(`Exam title can not be empty`, {
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
    if (Exam.duration === "") {
      toast.error(`Exam duration can not be empty`, {
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

    if (Exam.questions?.length === 0) {
      toast.error(`Questions not uploaded`, {
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
      ...Exam,
      totalQuestions: Exam.questions?.length,
      uploadedBy: details?._id,
    };

    try {
      const postExam = await uploadMutation({ payload });

      if (postExam.status === 201) {
        setExam({ ...InitialExam });
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


  // console.log(JSON.stringify(ExamList,null,3))

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Typography variant="h5" component="h3" align="center" color="primary">
          EXAM UPLOAD
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
            <ImUpload
              className={classes.cardsInfoIcon}
              onClick={handleClickOpen}
            />

            <Link
              to={QUESTION_TEMPLATE}
              download="Exam_question_template"
              target="_blank"
              rel="noreferrer"
              style={{ alignSelf: "flex-end" }}
            >
              <MdDownloadForOffline className={classes.cardsInfoIcon2} />
            </Link>
          </Box>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            color="primary"
          >
            Please take note of the following steps before uploading an exam
          </Typography>

          <ol className={classes.noticeUl}>
            <li>
              <Typography>
                Click on the download button on the right to download an excel
                template.
              </Typography>
            </li>
            <li>
              <Typography>
                fill the space ment for answer and questions, without modifing
                the excel sheet in any way.
              </Typography>
            </li>
            <li>
              <Typography>
                When your done and has verified it, upload the form
              </Typography>
            </li>
          </ol>
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
                      Exam Code
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Duration
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Total Questions
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Uploaded by
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        minWidth: 70,
                      }}
                    >
                      Uploaded On
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
                      ExamList?.map((item) => {
                        const {
                          _id,
                          examCode,
                          duration,
                          totalQuestions,
                          uploadedBy,
                          createdAt,
                        } = item;
                        return (
                          <TableRow
                            hover                  
                            tabIndex={-1}
                            key={_id}
                            component={Link}
                            to={`exams/${_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">{examCode}</TableCell>
                            <TableCell align="center">{duration} Min</TableCell>
                            <TableCell align="center">
                              {totalQuestions}
                            </TableCell>
                            <TableCell align="center">
                              {uploadedBy?.username}
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
          UPLOAD
        </DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <Box className={classes.formItem}>
              <TextField
                id="outlined-basic"
                size="small"
                style={{ width: "100%" }}
                required
                label="Exam Code"
                variant="outlined"
                value={Exam.examCode}
                onChange={(e) =>
                  setExam((prev) => ({ ...prev, examCode: e.target.value }))
                }
              />
            </Box>
            <Box className={classes.formItem}>
              <TextField
                id="outlined-basic"
                size="small"
                style={{ width: "100%" }}
                required
                label="Exam title"
                variant="outlined"
                value={Exam.examName}
                onChange={(e) =>
                  setExam((prev) => ({ ...prev, examName: e.target.value }))
                }
              />
            </Box>
            <Box className={classes.formItem}>
              <TextField
                id="outlined-basic"
                size="small"
                style={{ width: "100%" }}
                InputProps={{ inputProps: { min: 30, max: 120 } }}
                required
                min="1"
                max="5"
                type="number"
                helperText="The duration field is based on minutes e.g 30mins"
                label="Exam duration"
                variant="outlined"
                value={Exam.duration}
                onChange={(e) =>
                  setExam((prev) => ({
                    ...prev,
                    duration: +e.target.value,
                  }))
                }
              />
            </Box>
            <Box className={classes.formItem}>
              <input
                type="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                style={{ display: "none" }}
                ref={docRef}
                onChange={extractSheet}
              />

              <Button
                onClick={OpenFilePicker}
                style={{ width: "100%" }}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
              >
                Upload xlx sheet
              </Button>
            </Box>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogoFooter}>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancle
          </Button>
          <Button
          disabled={isUploadingExams}
            onClick={handleUpload}
            color="primary"
            variant="contained"
            autoFocus
          >
            {isUploadingExams ? "Uploading.." : "Upload" }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UploadExam;
