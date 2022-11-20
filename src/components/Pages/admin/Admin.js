import React,{useEffect,useState} from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { BaseUrl } from "../../../Services/api/BaseUrl";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BlurLinearIcon from "@material-ui/icons/BlurLinear";
import VisibilityIcon from "@material-ui/icons/Visibility";


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Button from '@material-ui/core/Button';
import { Link, Redirect,useHistory } from "react-router-dom";

import {useSelector,useDispatch}  from 'react-redux'
import { iSLoading } from "../../../Store/feature";



const useStyles = makeStyles((theme) => ({
  headerCard:{
display:'flex',
width:'100%',
// width: theme.spacing(50),
alignItems:'center',
justifyContent:'space-evenly',
height:'80px',
marginTop: theme.spacing(3),
flexWrap:'wrap'
  },
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
    width: '100%',
	},

  tableContainer: {
    maxHeight: 550,
  },

  cards:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'75%', width:'40%',minWidth:'150px',textDecoration:'none'}
}));




function Admin() {
	const classes = useStyles();


const dispatch = useDispatch();
const {details}  = useSelector((state)=>state.users);


const [recentStudents, setrecentStudents] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function getRecentStudents() {

	dispatch(iSLoading(true))
		try {
			const res = await axios.get(`${BaseUrl}student/recent`, {
				headers: {
					"Content-Type": "apllication/json",
					Authorization: `Bearer ${details?.token}`,
				},
			});

			setrecentStudents(res?.data);
			dispatch(iSLoading(false))
		} catch (error) {
			console.log(error);
			dispatch(iSLoading(false))
		}
	}



useEffect(() => {
  getRecentStudents()
}, [])



	return (
		<>
			<CssBaseline />
			<Container maxWidth='md'>
			

        <Paper   elevation={3} className={classes.headerCard}>
					<Paper elevation={1}  className={classes.cards}  component={Link}  to="/students">
						<GroupAddIcon  color="primary"  fontSize="large"/>
            <h5  style={{margin:0,padding:0,color:'#01996D' }}>Students</h5>
					</Paper>
					<Paper elevation={1}    className={classes.cards}   component={Link}  to="/serial-number">
						<BlurLinearIcon color="primary"  fontSize="large"/>
            <h5 style={{margin:0,padding:0,color:'#01996D' }}>Serial Number</h5>
					
					</Paper>

        </Paper>
		

				<div>
					<h3 style={{color:'#01996D'}} >Recently Registered Student(s)</h3>
					<div>
      		<Paper className={classes.root2}>
								<TableContainer
									className={classes.container}
									// ref={componentRef}
								>
									<Table
										stickyHeader
										aria-label='sticky table'
										id='table-to-xls'
									>
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
															<TableCell align='center'>
																{phoneNumber}
															</TableCell>
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
									count={recentStudents?.length}
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

export default Admin;
