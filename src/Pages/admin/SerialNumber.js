import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BlurLinearIcon from "@material-ui/icons/BlurLinear";

import GridOnIcon from "@material-ui/icons/GridOn";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import SearchIcon from "@material-ui/icons/Search";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import { withStyles, makeStyles } from "@material-ui/core/styles";
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

import { BaseUrl } from "../../Services/api/BaseUrl";
import { useSelector, useDispatch } from "react-redux";
import { iSLoading } from "../../Store/feature";

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

	const dispatch = useDispatch();
	const { details } = useSelector((state) => state.users);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [Serial, setSerial] = useState("XXXX-XXXX-XXXX-XXXX");
	const [AllSerial, setAllSerial] = useState([]);

	const [openToolTip, setOpenToolTip] = useState(false);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	//generate serial number

	async function generateSerial() {
		dispatch(iSLoading(true));
		try {
			const res = await axios.post(
				`${BaseUrl}serial/generate`,
				{},
				{
					headers: {
						"Content-Type": "aplication/json",
						Authorization: `Bearer ${details?.token}`,
					},
				}
			);

			// console.log(res?.data?.data?.serial);

			setSerial(res?.data?.data?.serial);
			dispatch(iSLoading(false));
		} catch (error) {
			console.log(error);
			dispatch(iSLoading(false));
		}
	}

	//get all serial number
	async function getAllSerial() {
		dispatch(iSLoading(true));
		try {
			const res = await axios.get(`${BaseUrl}serial`, {
				headers: {
					"Content-Type": "aplication/json",
					Authorization: `Bearer ${details?.token}`,
				},
			});
			// console.log(res?.data);
			setAllSerial(res?.data);
			dispatch(iSLoading(false));
		} catch (error) {
			console.log(error);
			dispatch(iSLoading(false));
		}
	}

	function copySerial(serial) {
		navigator.clipboard.writeText(serial);
	}

	useEffect(() => {
		getAllSerial();

		return () => {
			//  setSerial('')
		};
	}, [Serial]);

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
								onClick={generateSerial}
								variant="contained"
								color="primary"
								size="small"
								className={classes.button}
								startIcon={<PlaylistAddIcon />}
							>
								Generate Serial
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
					<h3 style={{ color: "#01996D" }}>Serial Number</h3>
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
									<TableBody>
										{AllSerial.length < 1 ? (
											<TableRow>
												<TableCell>No Result Found</TableCell>
											</TableRow>
										) : (
											AllSerial?.map((item, i) => {
												const { id, serial, dateGenerated, isValid, dateUsed } =
													item;
												return (
													<TableRow
														hover
														role="checkbox"
														tabIndex={-1}
														key={id}
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
									</TableBody>
								</Table>
							</TableContainer>

							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={AllSerial?.length}
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

export default SerialNumber;
