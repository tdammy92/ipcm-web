import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BaseUrl } from "../../Services/api/BaseUrl";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";

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

function StudentResults() {
  const classes = useStyles();
  const { details } = useSelector((state) => state.users);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [studentResults, setStudentResults] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getStudentResults = async () => {
    try {
      const responds = await axios.get(
        `${BaseUrl}result`,
        // { params: { type: "full" } },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${details?.token}`,
          },
        }
      );

      if (responds.status === 200) {
        setStudentResults(responds?.data);
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
    getStudentResults();
    return () => {};
  }, []);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Typography variant="h5" component="h3" align="center" color="primary">
          STUDENTS RESULTS
        </Typography>

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
                        Student
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
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
                        Passed
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        Total Score
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        Date Taken
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentResults?.length < 1 ? (
                      <TableRow>
                        <TableCell colSpan={6} align="center">No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      studentResults
                        ?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((item) => {
                          const {
                            _id,
                            total_score,
                            pass,
                            createdAt,
                            exam: { examName },
                            student: { surname, firstName, middleName, gender },
                          } = item;
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={_id}
                              // component={Link}
                              // to={`/students/${_id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <TableCell align="center">
                                {surname} {firstName}
                              </TableCell>
                              <TableCell align="center">{examName}</TableCell>
                              <TableCell
                                align="center"
                                style={{ color: pass ? "green" : "red" }}
                              >
                                {pass ? "Pass" : "Fail"}
                              </TableCell>
                              <TableCell align="center">
                                {total_score}
                              </TableCell>

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
                  </TableBody>{" "}
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={studentResults?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StudentResults;
