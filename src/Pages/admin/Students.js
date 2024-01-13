import React, { useState, useEffect, useRef } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import { DownloadTableExcel } from "react-export-table-to-excel";
import { useDownloadExcel, downloadExcel } from "react-export-table-to-excel";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BlurLinearIcon from "@material-ui/icons/BlurLinear";

import GridOnIcon from "@material-ui/icons/GridOn";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";

import axios from "axios";
import { BaseUrl } from "../../Services/api/BaseUrl";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { useReactToPrint } from "react-to-print";
import { useSelector, useDispatch } from "react-redux";
import { iSLoading } from "../../Store/feature";

import Pdf from "react-to-pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(3),
      // margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(7),
    },
  },
  root2: {
    width: "100%",
  },

  tableContainer: {
    maxHeight: 550,
  },

  cards: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    margin: theme.spacing(1),
  },

  searchBar: {
    width: "40%",

    height: "30px",
    fontSize: "12px",
  },
}));

function Students() {
  const date = Date.now();
  const fileName = new Date(date).toLocaleDateString().toString();

  const classes = useStyles();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.users);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [Search, setSearch] = useState("");
  const [Students, setStudents] = useState([]);

  const componentRef = useRef();
  // const ExcelRef = useRef(null);

  function handleDownloadExcel() {
    const header = [
      "S/N",
      "Title",
      "FULL NAME",
      "PHONE",
      "DateOfBirth",
      "EMAIL",
      "COUNTRY",
      "STATE",
      "DATE  Registered",
      "PAYMENT METHOD",
      "Application Fee",
    ];

    downloadExcel({
      fileName: `All students ${fileName}`,
      sheet: `All students ${fileName}`,
      tablePayload: {
        header,
        // accept two different data structures
        body: Students?.map((item, index) => {
          return {
            index: `${index + 1}`,
            Title: `${item?.title}`,
            name: `${item?.surname} ${item?.firstName} ${item?.middleName}`,
            Phone: `${item?.phoneNumber}`,
            DOB: `${new Date(item?.dob).toLocaleDateString()}`,
            email: `${item?.email}`,
            country: `${item?.country}`,
            state: `${item?.state}`,
            date: `${new Date(item?.createdAt).toLocaleDateString()}`,
            PaymentType: `${item?.paymentMethods}`,
            ApplicationFee: `${item?.applicationFee}`,
          };
        }),
      },
    });
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  function handleSearch(e) {
    e.preventDefault();

    const serachValue = e.target.value.toLowerCase();

    setSearch(serachValue);
  }

  async function getAllStudents() {
    dispatch(iSLoading(true));
    try {
      const res = await axios.get(`${BaseUrl}student`, {
        headers: {
          "Content-Type": "apllication/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      setStudents(res?.data);
      dispatch(iSLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(iSLoading(false));
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Paper elevation={3} className={classes.cards}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              // label="Search"
              placeholder="Search"
              value={Search}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <div>
              <Button
                onClick={handlePrint}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<PrintIcon />}
              >
                Print
              </Button>

              <Pdf
                targetRef={componentRef}
                filename={`All student ${new Date().toLocaleDateString()}`}
              >
                {({ toPdf }) => (
                  <Button
                    color="primary"
                    onClick={toPdf}
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    startIcon={<PictureAsPdfIcon />}
                  >
                    Pdf
                  </Button>
                )}
              </Pdf>

              {/* <DownloadTableExcel
								filename={`All student ${new Date().toLocaleDateString()}`}
								sheet={`All student ${new Date().toLocaleDateString()}`}
								currentTableRef={ExcelRef.current}
							> */}
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<GridOnIcon />}
                onClick={handleDownloadExcel}
                // onClick={onDownload}
              >
                Excel
              </Button>
              {/* </DownloadTableExcel> */}
            </div>
          </Paper>
        </div>

        <div ref={componentRef}>
          <Typography variant="h6" color="primary">
            All student
          </Typography>
          <div>
            <Paper className={classes.root2}>
              <TableContainer
                className={classes.container}
                // ref={componentRef}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  id="table-to-xls"
                  // ref={ExcelRef}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 20,
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
                          minWidth: 40,
                        }}
                      >
                        ACTION
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Students?.length < 1 ? (
                      <TableRow>
                        <TableCell>No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      Students?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                        .filter(
                          (stu) =>
                            stu.firstName.toLowerCase().includes(Search) ||
                            stu.surname.toLowerCase().includes(Search) ||
                            stu.state.toLowerCase().includes(Search) ||
                            stu.country.toLowerCase().includes(Search) ||
                            stu.email.toLowerCase().includes(Search) ||
                            stu.phoneNumber.toLowerCase().includes(Search)
                        )
                        ?.map((item, i) => {
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
                              <TableCell align="center">{i + 1}</TableCell>
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

              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={Students?.length}
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

export default Students;
