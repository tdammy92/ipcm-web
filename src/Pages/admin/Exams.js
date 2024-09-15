import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { useExams } from "../../Services/queries/exam-query";
import TableLoader from "../../components/Loaders/TableLoader";


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

function Exams() {
  const classes = useStyles();
  let { url } = useRouteMatch();
  const { data: ExamList, isLoading } = useExams({ params: { type: "full" } });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Typography variant="h5" component="h3" align="center" color="primary">
          EXAMS
        </Typography>

        <div>
          <h3 style={{ color: "#01996D" }}>All Available Exams</h3>
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

                 
                    </TableRow>
                  </TableHead>
                  {isLoading ? (
                    <TableLoader rows={5} colums={6} />
                  ) : (
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
                            _id,
                            examCode,
                            duration,
                            totalQuestions,
                            uploadedBy: { username },
                            createdAt,
                          } = item;
                          return (
                            <TableRow
                              hover
                              // role="checkbox"
                              tabIndex={-1}
                              key={_id}
                              component={Link}
                              to={`${url}/${_id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <TableCell align="center">{examCode}</TableCell>
                              <TableCell align="center">
                                {duration} Min
                              </TableCell>
                              <TableCell align="center">
                                {totalQuestions}
                              </TableCell>
                              <TableCell align="center">{username}</TableCell>

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

export default Exams;
