import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { BaseUrl } from "../../Services/api/BaseUrl";

import { FaBookReader } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { LiaBarcodeSolid } from "react-icons/lia";
import VisibilityIcon from "@material-ui/icons/Visibility";

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


import DashItem from "../../components/partials/dashcardItem";

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

  cardsInfoBox: {
    marginLeft: "10px",
  },

  cardsInfoIcon: {
    fontSize: "35px",
    color: "#01996D",
  },
}));

function Admin() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.users);

  const [recentStudents, setrecentStudents] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [studentCount, setStudentCount] = useState(0);
  const [serialNumberCount, setSerialNumberCount] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function getRecentStudents() {
    // dispatch(iSLoading(true));
    try {
      const res = await axios.get(`${BaseUrl}student/recent`, {
        headers: {
          "Content-Type": "apllication/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      setrecentStudents(res?.data);
      // dispatch(iSLoading(false));
    } catch (error) {
      console.log(error);
      // dispatch(iSLoading(false));
    }
  }

  async function getStudentsCount() {
    // dispatch(iSLoading(true));
    try {
      const res = await axios.get(`${BaseUrl}student/count`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      if (typeof res?.data?.count === "number") {
        setStudentCount(res.data?.count);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(iSLoading(false));
    }
  }
  async function getSerialNumbersCount() {
    // dispatch(iSLoading(true));
    try {
      const res = await axios.get(`${BaseUrl}serial/count`, {
        headers: {
          "Content-Type": "apllication/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      if (typeof res?.data?.count === "number") {
        setSerialNumberCount(res.data?.count);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(iSLoading(false));
    }
  }

  useEffect(() => {
    getRecentStudents();
    getStudentsCount();
    getSerialNumbersCount();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" mx="auto">
        <Container maxWidth="md" mx="auto" className={classes.dashContainer}>
          <Grid container spacing={2}>
            <DashItem
              title="STUDENTS"
              description="Total Students: "
              count={studentCount ?? 0}
              Icon={() => <HiUserGroup className={classes.cardsInfoIcon} />}
              url={"/students"}
            />
            <DashItem
              title="EXAMS"
              description=" Exam Dashboard"
              Icon={() => <FaBookReader className={classes.cardsInfoIcon} />}
              url={"/exam-board"}
            />
            <DashItem
              title="SERIAL NUMBER"
              description="Total Generated serial: "
              count={serialNumberCount ?? 0}
              Icon={() => <LiaBarcodeSolid className={classes.cardsInfoIcon} />}
              url={"/serial-number"}
            />
            <DashItem
              title="GALLERY"
              description="Upload and remove images"
              // count={serialNumberCount ?? 0}
              Icon={() => <GrGallery className={classes.cardsInfoIcon} />}
              url={"/gallery-settings"}
            />
          </Grid>
        </Container>

        <Box>
          <Typography variant="h6" color="primary">
            Recently Registered Student(s)
          </Typography>
          <Box>
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
                        FULL NAME
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        PHONE
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        EMAIL
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        COUNTRY
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        STATE
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 70,
                        }}
                      >
                        DATE
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
                  </TableBody>
                </Table>
              </TableContainer>

              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={recentStudents?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Admin;
