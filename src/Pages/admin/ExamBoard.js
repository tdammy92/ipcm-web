import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { BaseUrl } from "../../Services/api/BaseUrl";
import { toast } from "react-toastify";
import { GrScorecard } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

import Button from "@material-ui/core/Button";
import { Link, Redirect, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { iSLoading } from "../../Store/feature";

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

  tableContainer: {
    maxHeight: 550,
  },

  headerCard: {
    display: "flex",
    width: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    // height: "100px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    flexWrap: "wrap",

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

  cardsInfoBox: {},

  cardsInfoIcon: {
    fontSize: "50px",
  },

  cardsInfoDetails: {
    fontFamily: "10px",
    margin: 0,
    padding: 0,
    color: "#01996D",
  },
}));

function ExamBoard() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.users);
  const [ExamList, setExamList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getExams = async () => {
    try {
      const responds = await axios.get(
        `${BaseUrl}exams`,
        { params: { type: "full" } },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${details?.token}`,
          },
        }
      );

      if (responds.status === 200) {
        setExamList(responds?.data);
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
  };

  useEffect(() => {
    getExams();
    return () => {};
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" mx="auto">
        {/* <Paper elevation={2} className={classes.headerCard}> */}

        <Typography
          variant="h5"
          component="h4"
          mt={20}
          align="center"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Exam Dashboard
        </Typography>

        <Box spacing={3} className={classes.headerCard} mx="auto">
          <Paper
            elevation={1}
            className={classes.cards}
            component={Link}
            to="/exam-upload"
          >
            <FaCloudUploadAlt style={{ fontSize: "30px", color: "#01996D" }} />
            <Box className={classes.cardsInfoBox}>
              <h4 style={{ margin: 0, padding: 0, color: "#01996D" }}>
                Upload Exam
              </h4>
              {/* <Typography
                variant="body2"
                component="P"
                className={classes.cardsInfoDetails}
              >
                Total Students: {studentCount ?? 0}
              </Typography> */}
            </Box>
          </Paper>
          <Paper
            elevation={1}
            className={classes.cards}
            component={Link}
            to="/student-result"
          >
            <GrScorecard style={{ fontSize: "30px", color: "#01996D" }} />
            <Box className={classes.cardsInfoBox}>
              <h4 style={{ margin: 0, padding: 0, color: "#01996D" }}>
                Results
              </h4>
              {/* <Typography
                variant="body2"
                component="P"
                className={classes.cardsInfoDetails}
              >
                Exam Management
              </Typography> */}
            </Box>
          </Paper>
        </Box>
        {/* </Paper> */}

        <div>
          <h3 style={{ color: "#01996D" }}>Available Exams</h3>
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
                  <TableBody>
                    {ExamList?.length < 1 ? (
                      <TableRow>
                        <TableCell>No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      ExamList?.map((item) => {
                        const {
                          exam_uuid,
                          name,
                          duration,
                          uploadedBy: { username },
                          questions,
                          createdAt,
                        } = item;
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={exam_uuid}
                            // component={Link}
                            // to={`/students/${_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">{name}</TableCell>
                            <TableCell align="center">{duration} Min</TableCell>
                            <TableCell align="center">
                              {questions?.length}
                            </TableCell>
                            <TableCell align="center">{username}</TableCell>

                            <TableCell align="center">
                              {new Date(createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell align="center">
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                // endIcon={<VisibilityIcon />}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
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
        </div>
      </Container>
    </>
  );
}

export default ExamBoard;
