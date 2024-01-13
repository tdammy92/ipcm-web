import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { BaseUrl } from "../../Services/api/BaseUrl";
import { toast } from "react-toastify";
import { GrScorecard } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import DashItem from "../../components/partials/dashcardItem";
import { makeStyles } from "@material-ui/core/styles";
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

  dashContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  cardsInfoIcon: {
    fontSize: "35px",
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
      <Container maxWidth="md" mx="auto">
        {/* <Paper elevation={2} className={classes.headerCard}> */}

        <Typography
          variant="h5"
          component="h4"
          align="center"
          color="primary"
          style={{ marginTop: 10 }}
        >
          Exam Dashboard
        </Typography>

        <Container maxWidth="md" mx="auto" className={classes.dashContainer}>
          <Grid container spacing={2}>
            <DashItem
              title="UPLOAD EXAMS"
              Icon={() => (
                <FaCloudUploadAlt className={classes.cardsInfoIcon} />
              )}
              url={"/exam-upload"}
            />
            <DashItem
              title="RESULTS"
              Icon={() => <GrScorecard className={classes.cardsInfoIcon} />}
              url={"/student-result"}
            />
          </Grid>
        </Container>

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
                      ExamList?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ).map((item) => {
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
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ExamBoard;
