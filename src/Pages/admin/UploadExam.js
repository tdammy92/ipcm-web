import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { BaseUrl } from "../../Services/api/BaseUrl";
import { toast } from "react-toastify";
import { ImUpload } from "react-icons/im";
import { MdDownloadForOffline } from "react-icons/md";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";
import { Link, Redirect, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { iSLoading } from "../../Store/feature";
import { read, utils } from "xlsx";
import QUESTION_TEMPLATE from "../../assets/document/QUESTION_TEMPLATE.xlsx";

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
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
    color: "#01996D",
    cursor: "pointer",
    marginLeft: "20px",
  },
  cardsInfoIcon2: {
    fontSize: "40px",
    color: "#01996D",
    cursor: "pointer",
    marginLeft: "10px",
  },

  formItem: {
    width: "80%",
    minWidth: "300px",
    marginTop: "10px",
    marginBottom: "15px",
    marginLeft: "15px",

    // backgroundColor:"#f45"
  },

  noticeUl: {
    fontFamily: "8px",
    margin: 0,
    padding: 0,
    color: "#01996D",
    wordWrap: "wrap",
    // listStyle: "none",
    // marginTop: "3px",
    // marginBottom: "5px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InitialExam = {
  examName: "",
  duration: 0,
  questions: [],
};

function UploadExam() {
  const classes = useStyles();

  const docRef = useRef(null);
  const { details } = useSelector((state) => state.users);

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
              position: "top-center",
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
              position: "top-center",
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
        position: "top-center",
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
        position: "top-center",
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
        position: "top-center",
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

    const payload = { ...Exam, uploadedBy: details?.admin?._id };

    // console.log(payload);

    try {
      const postExam = await axios.post(`${BaseUrl}exams/upload`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      if (postExam.status === 201) {
        setExam({ ...InitialExam });
        setOpen(false);
      }
    } catch (error) {
      toast.error(`${typeof error === "string" ? error : error?.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // setOpen(false);
  };

  // console.log(JSON.stringify(details, null, 2));
  // console.log(JSON.stringify(Exam, null, 2));

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg" mx="auto">
        {/* <Paper elevation={2} className={classes.headerCard}> */}

        <Typography
          variant="h6"
          component="h4"
          mt={20}
          align="center"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Exam Upload
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
            variant="body2"
            component="h3"
            align="center"
            style={{ color: "#01996D" }}
          >
            Please take note of the following steps before uploading an exam
          </Typography>

          <ul className={classes.noticeUl}>
            <li>
              Click on the download button on the right to download an excel
              template.
            </li>
            <li>
              fill the space ment for answer and questions, without modifing the
              excel sheet in any way.
            </li>
            <li>When your done and has verified it, upload the form </li>
          </ul>
        </Paper>

        <div>
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
                        Exam Title
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
                        Uploaded On
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
                        ACTION
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                    {recentStudents.length < 1 ? (
                      <TableRow>
                        <TableCell>No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      recentStudents?.map((item) => {
                        const {
                          _id,
                          surname,
                          firstName,

                          state,
                          phoneNumber,
                          email,
                          country,
                          createdAt,
                        } = item;
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={_id}
                            component={Link}
                            to={`/students/${_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">
                              {surname} {firstName}
                            </TableCell>
                            <TableCell align="center">{phoneNumber}</TableCell>
                            <TableCell align="center">{email}</TableCell>
                            <TableCell align="center">{country}</TableCell>
                            <TableCell align="center">{state}</TableCell>
                            <TableCell align="center">
                              {new Date(createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell align="center">
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                endIcon={<VisibilityIcon />}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody> */}
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                // count={recentStudents?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ height: "70%" }}
      >
        <DialogTitle id="alert-dialog-title" align="center">
          Upload
        </DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.formItem}>
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
            </div>
            <div className={classes.formItem}>
              <TextField
                id="outlined-basic"
                size="small"
                style={{ width: "100%" }}
                InputProps={{ inputProps: { min: 0, max: 10 } }}
                required
                min="1"
                max="5"
                type="number"
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
            </div>
            <div className={classes.formItem}>
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
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
              >
                Upload xlx sheet
              </Button>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleUpload} color="primary" autoFocus>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UploadExam;
