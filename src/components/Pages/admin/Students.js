import React, { useState, useEffect, useRef } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";

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
import VisibilityIcon from "@material-ui/icons/Visibility";

import axios from "axios";
import { BaseUrl } from "../../../Services/api/BaseUrl";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

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

import { useReactToPrint } from "react-to-print";

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
	const store = JSON.parse(localStorage.getItem("admin"));
	const classes = useStyles();
	const history = useHistory();

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [Search, setSearch] = useState("");
	const [Students, setStudents] = useState([]);

	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	async function getAllStudents() {
		try {
			const res = await axios.get(`${BaseUrl}student`, {
				headers: {
					"Content-Type": "apllication/json",
					Authorization: `Bearer ${store?.token}`,
				},
			});

			setStudents(res?.data);
		} catch (error) {
			console.log(error);
		}
	}

	// useEffect(() => {

	//   if (store?.admin?.token === undefined) {
	//     history.push('/signin')
	//   }
	// }, [])

	useEffect(() => {
		getAllStudents();
	}, []);

	return (
		<>
			<CssBaseline />
			<Container maxWidth='sm'>
				<div className={classes.root}>
					<Paper elevation={3} className={classes.cards}>
						<TextField
							className={classes.margin}
							id='input-with-icon-textfield'
							// label="Search"
							placeholder='Search'
							value={Search}
							onChange={(e) => setSearch(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon color='primary' />
									</InputAdornment>
								),
							}}
						/>

						<div>
							<Button
								onClick={handlePrint}
								variant='contained'
								color='primary'
								size='small'
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
										color='primary'
										onClick={toPdf}
										variant='outlined'
										size='small'
										className={classes.button}
										startIcon={<PictureAsPdfIcon />}
									>
										Pdf
									</Button>
								)}
							</Pdf>

							<Button
								variant='contained'
								color='primary'
								size='small'
								className={classes.button}
								startIcon={<GridOnIcon />}
							>
								Excel
							</Button>
						</div>
					</Paper>
				</div>

				<div ref={componentRef}>
					<h3 style={{ color: "#01996D" }}>All student</h3>
					<div>
						<Paper className={classes.root2}>
							<TableContainer
								className={classes.container}
								// ref={componentRef}
							>
								<Table stickyHeader aria-label='sticky table' id='table-to-xls'>
									<TableHead>
										<TableRow>
											<TableCell
												align='center'
												style={{
													minWidth: 120,
												}}
											>
												FULL NAME
											</TableCell>
											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												PHONE
											</TableCell>

											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												EMAIL
											</TableCell>

											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												COUNTRY
											</TableCell>
											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												STATE
											</TableCell>
											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												DATE
											</TableCell>
											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												ACTION
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{Students.length < 1 ? (
											<TableRow>
												<TableCell>No Result Found</TableCell>
											</TableRow>
										) : (
											Students?.map((item) => {
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
														role='checkbox'
														tabIndex={-1}
														key={_id}
														component={Link}
														to={`/students/${_id}`}
														style={{ textDecoration: "none" }}
													>
														<TableCell align='center'>
															{surname} {firstName}
														</TableCell>
														<TableCell align='center'>{phoneNumber}</TableCell>
														<TableCell align='center'>{email}</TableCell>
														<TableCell align='center'>{country}</TableCell>
														<TableCell align='center'>{state}</TableCell>
														<TableCell align='center'>
															{new Date(createdAt).toLocaleDateString()}
														</TableCell>
														<TableCell align='center'>
															<Button
																variant='contained'
																color='primary'
																size='small'
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
								component='div'
								count={Students?.length}
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

export default Students;
