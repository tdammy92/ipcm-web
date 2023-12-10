import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { BaseUrl } from "../../Services/api/BaseUrl";

import { MdDownloadForOffline } from "react-icons/md";
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
    flexDirection: "column",
    justifyContent: "center",
    maxHeightheight: "150px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    // padding: theme.spacing(2),
    // flexWrap: "wrap",

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
    fontSize: "80px",
    color: "#01996D",
    cursor: "pointer",
  },

  noticeUl: {
    fontFamily: "8px",
    margin: 0,
    padding: 0,
    color: "#01996D",
    listStyle: "none",
    marginTop: "3px",
    marginBottom: "5px",
  },
}));

function UploadExam() {
  const classes = useStyles();
  const { details } = useSelector((state) => state.users);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const HandleExcelUpload = () => {
    console.log("Upload excel sheet");
  };
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

        <Paper elevation={2} className={classes.headerCard}>
          <MdDownloadForOffline
            className={classes.cardsInfoIcon}
            onClick={HandleExcelUpload}
          />
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
              Click on the download button above to download an excel template.
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
    </div>
  );
}

export default UploadExam;
