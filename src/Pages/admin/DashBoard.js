import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { HiUserGroup } from "react-icons/hi2";
import { LiaBarcodeSolid } from "react-icons/lia";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


import { Link } from "react-router-dom";

import {  useSelector } from "react-redux";

import DashItem from "../../components/partials/dashcardItem";

import {
  useRecentStudents,
  useSerialNumberCounts,
  useStudentsCounts,
} from "../../Services/queries/user-query";
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around',
    flexWrap:'wrap',
    marginTop: 20,
    marginBottom: 30,
    // backgroundColor:'red'
  },


  cardsInfoBox: {
    marginLeft: "10px",
  },

  cardsInfoIcon: {
    fontSize: "20px",
    color: theme.palette.secondary.main,
  },
}));

function DashBoard() {
  const classes = useStyles();


  const { details } = useSelector((state) => state.users);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data: recentStudentsData, isLoading: isLoadingRecentStudents } =
    useRecentStudents();
  const { data: studentsCountData, isLoading: isLoadingStudentsCounts } =
    useStudentsCounts();
  const {
    data: serialNumberCountData,
    isLoading: isLoadingSerialNumberCounts,
  } = useSerialNumberCounts();

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
          <Typography align="center" capitalize color="primary" variant="h5" component="h3" gutterBottom>DASHBOARD</Typography>
        <Container maxWidth="md" mx="auto" className={classes.dashContainer}>
      

            <DashItem
              title="STUDENTS"
              description="Total Students"
              count={studentsCountData?.count ?? 0}
              Icon={() => <HiUserGroup className={classes.cardsInfoIcon} />}
              // url={`/admin/students`}
            />
       
            <DashItem
              title="SERIAL NUMBER"
              description="Total Generated serial"
              count={serialNumberCountData?.count ?? 0}
              Icon={() => <LiaBarcodeSolid className={classes.cardsInfoIcon} />}
              // url={"/admin/serial-number"}
            />
    
  
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
               
                    </TableRow>
                  </TableHead>
                  {isLoadingRecentStudents ? (
                    <TableLoader rows={5} colums={6} />
                  ) : (
                    <TableBody>
                      {recentStudentsData?.length < 1 ? (
                        <TableRow>
                          <TableCell>No Result Found</TableCell>
                        </TableRow>
                      ) : (
                        recentStudentsData?.map((item) => {
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
                              to={`/admin/students/${_id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <TableCell align="center">
                                {surname} {firstName}
                              </TableCell>
                              <TableCell align="center">
                                {phoneNumber}
                              </TableCell>
                              <TableCell align="center">{email}</TableCell>
                              <TableCell align="center">{country}</TableCell>
                              <TableCell align="center">{state}</TableCell>
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

              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={recentStudentsData?.length}
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

export default DashBoard;
