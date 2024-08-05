import React, { useMemo, useState } from "react";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import {  makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";



import { useSerialNumber } from "../../Services/queries/serialNumber-query";
import { useGenerateSerial } from "../../Services/mutations/serialNumber-mutation";
import TableLoader from "../../components/Loaders/TableLoader";


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

function SerialNumber() {
  const classes = useStyles();


  const {data:serialData,isLoading:isLoadingAllSerial} = useSerialNumber({currentPage:1});
 const {mutateAsync,isLoading:isGeneratingSerial} = useGenerateSerial()



  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [Serial, setSerial] = useState("XXXX-XXXX-XXXX-XXXX");


  const [openToolTip, setOpenToolTip] = useState(false);



  const AllSerial = useMemo(() => serialData?.pages?.flatMap(serial => serial?.page) || [], [serialData])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  //generate serial number

  async function generateSerial() {

    try {
      const response = await mutateAsync();

      if (response.status===201) {
        setSerial(response?.data?.serial)
      }

    } catch (error) {
      console.log(error);

    }
  }



  function copySerial(serial) {
    navigator.clipboard.writeText(serial);
  }



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
              // placeholder="Search"
              disabled
              value={Serial}
              // onChange={(e)=>setSerial(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <div>
              <Button

              disabled={isGeneratingSerial}
                onClick={generateSerial}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<PlaylistAddIcon />}
              >
               {isGeneratingSerial ? 'Generating...': 'Generate Serial'}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<FileCopyIcon />}
              >
                copy
              </Button>
            </div>
          </Paper>
        </div>

        <div>
          <Box mt={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Serial Number
            </Typography>
          </Box>
          <div>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 440 }}
                // ref={componentRef}
              >
                <Table stickyHeader aria-label="sticky table" id="table-to-xls">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 10,
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
                        SERIAL NUMBER
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 20,
                        }}
                      >
                        VALID
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 50,
                        }}
                      >
                        DATE GENERATED
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: 50,
                        }}
                      >
                        DATE USED
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
                  {isLoadingAllSerial ?   <TableLoader rows={5} colums={6} />  : <TableBody>
                    {AllSerial?.length < 1 ? (
                      <TableRow>
                        <TableCell>No Result Found</TableCell>
                      </TableRow>
                    ) : (
                      AllSerial?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )?.map((item, i) => {
                        const { id, serial, dateGenerated, isValid, dateUsed } =
                          item;
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={serial}
                            // component={Link}
                            // to={`/portal/${id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <TableCell align="center">{i + 1}</TableCell>
                            <TableCell
                              align="center"
                              style={{ color: isValid ? "#01996D" : "red" }}
                            >
                              {serial}
                            </TableCell>
                            <TableCell align="center">
                              {isValid ? "yes" : "No"}
                            </TableCell>
                            {/* <TableCell align='center'>{country}</TableCell>
															<TableCell align='center'>{state}</TableCell> */}
                            <TableCell align="center">
                              {dateGenerated !== null
                                ? new Date(dateGenerated).toLocaleDateString()
                                : "NIl"}
                            </TableCell>
                            <TableCell align="center">
                              {dateUsed !== null
                                ? new Date(dateUsed).toLocaleDateString()
                                : "Not Used"}
                            </TableCell>
                            <TableCell align="center">
                              {/* <Button
																	variant='outlined'
																	color='primary'
																	size='small'
																	className={classes.button}
																	endIcon={<FileCopyIcon />}
                                  onClick={()=>copySerial(serial)}
																>
																	copy
																</Button> */}

                              <ClickAwayListener
                                onClickAway={() => setOpenToolTip(false)}
                              >
                                <div>
                                  <Tooltip
                                    PopperProps={{
                                      disablePortal: true,
                                    }}
                                    onClose={() => setOpenToolTip(false)}
                                    open={openToolTip}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="Copied"
                                  >
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      size="small"
                                      disabled={!isValid}
                                      className={classes.button}
                                      endIcon={<FileCopyIcon />}
                                      onClick={() => {
                                        copySerial(serial);
                                        setOpenToolTip(true);
                                      }}
                                    >
                                      Copy
                                    </Button>
                                  </Tooltip>
                                </div>
                              </ClickAwayListener>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>}
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={AllSerial?.length || 0}
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

export default SerialNumber;
