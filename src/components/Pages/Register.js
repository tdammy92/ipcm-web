import React, { useState, forwardRef, useEffect } from "react";

import { Button, Paper, Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import Footer from "../partials/Footer/Footer";
import InputLabel from "@material-ui/core/InputLabel";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import BarLoader from "react-spinners/BarLoader";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { BaseUrl } from "../../Services/api/BaseUrl";
import PdfForm from "../../assets/document/IGPCM__REGForm.pdf";

import { getState, getCountry } from "../../Services/api/countryService";

// const stateArray = [
// 	{
// 		code: "FC",
// 		name: "Abuja",
// 	},
// 	{
// 		code: "AB",
// 		name: "Abia",
// 	},
// 	{
// 		code: "AD",
// 		name: "Adamawa",
// 	},
// 	{
// 		code: "AK",
// 		name: "AkwaIbom",
// 	},
// 	{
// 		code: "AN",
// 		name: "Anambra",
// 	},
// 	{
// 		code: "BA",
// 		name: "Bauchi",
// 	},
// 	{
// 		code: "BY",
// 		name: "Bayelsa",
// 	},
// 	{
// 		code: "BE",
// 		name: "Benue",
// 	},
// 	{
// 		code: "BO",
// 		name: "Borno",
// 	},
// 	{
// 		code: "CR",
// 		name: "CrossRiver",
// 	},
// 	{
// 		code: "DE",
// 		name: "Delta",
// 	},
// 	{
// 		code: "EB",
// 		name: "Ebonyi",
// 	},
// 	{
// 		code: "ED",
// 		name: "Edo",
// 	},
// 	{
// 		code: "EK",
// 		name: "Ekiti",
// 	},
// 	{
// 		code: "EN",
// 		name: "Enugu",
// 	},
// 	{
// 		code: "GO",
// 		name: "Gombe",
// 	},
// 	{
// 		code: "IM",
// 		name: "Imo",
// 	},
// 	{
// 		code: "JI",
// 		name: "Jigawa",
// 	},
// 	{
// 		code: "KD",
// 		name: "Kaduna",
// 	},
// 	{
// 		code: "KN",
// 		name: "Kano",
// 	},
// 	{
// 		code: "KT",
// 		name: "Katsina",
// 	},
// 	{
// 		code: "KE",
// 		name: "Kebbi",
// 	},
// 	{
// 		code: "KO",
// 		name: "Kogi",
// 	},
// 	{
// 		code: "KW",
// 		name: "Kwara",
// 	},
// 	{
// 		code: "LA",
// 		name: "Lagos",
// 	},
// 	{
// 		code: "NA",
// 		name: "Nassarawa",
// 	},
// 	{
// 		code: "NI",
// 		name: "Niger",
// 	},
// 	{
// 		code: "OG",
// 		name: "Ogun",
// 	},
// 	{
// 		code: "ON",
// 		name: "Ondo",
// 	},
// 	{
// 		code: "OS",
// 		name: "Osun",
// 	},
// 	{
// 		code: "OY",
// 		name: "Oyo",
// 	},
// 	{
// 		code: "PL",
// 		name: "Plateau",
// 	},
// 	{
// 		code: "RI",
// 		name: "Rivers",
// 	},
// 	{
// 		code: "SO",
// 		name: "Sokoto",
// 	},
// 	{
// 		code: "TA",
// 		name: "Taraba",
// 	},
// 	{
// 		code: "YO",
// 		name: "Yobe",
// 	},
// 	{
// 		code: "ZA",
// 		name: "Zamfara",
// 	},
// ];
const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
	// formControl: {
	//   margin: theme.spacing(1),
	//   minWidth: 120,
	// },

	// inputStyle:{
	//     width:300,
	// }

	paper: {
		padding: 10,
		margin: 20,
	},
	dividerFullWidth: {
		margin: `5px 0 0 ${theme.spacing(2)}px`,
	},
	dividerInset: {
		margin: `5px 0 0 ${theme.spacing(9)}px`,
	},
	input: {
		display: "none",
	},
}));

function Register() {
	document.title = "IGPCM | Register";

	const [basicDetails, setBasicDetails] = useState({
		title: "",
		surname: "",
		firstName: "",
		middleName: "",
		email: "",
		dob: "",
		phoneNo: "",
		eduQualification: "",
		// country: "",
		// state: "",
	});

	const [AllCountry, setAllCountry] = useState([]);
	const [selectedCountry, setselectedCountry] = useState("");
	const [AllState, setSAlltate] = useState([]);

	//passed pyaload
	const [myCountry, setmyCountry] = useState("");
	const [slectedState, setslectedState] = useState("");

	const [Loading, setLoading] = useState(false);

	const [employmentDetails, setemploymentDetails] = useState({
		organization: "",
		startDate: "",
		position: "",
		location: "",
	});

	const [membership, setmembership] = useState({
		memberCdr: "",
		applicationFee: "",
	});

	const [Program, setProgram] = useState([]);
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function HandleModalCheckBox(e) {
		const option = e.target.name;

		if (Program.includes(option)) {
			const temp = Program.filter((selctecd) => option !== selctecd);
			setProgram(temp);
		} else {
			setProgram((prev) => [...prev, option]);
		}
	}

	//   useEffect(() => {
	//     setTimeout(() => {
	//         setOpen(false);
	//     }, 7000);

	//   }, [open])

	// console.log(basicDetails, employmentDetails, membership);

	async function handleSubmit(e) {
		e.preventDefault();

		const payload = JSON.stringify({
			title: basicDetails.title,
			surname: basicDetails.surname,
			firstName: basicDetails.firstName,
			middleName: basicDetails.middleName,
			dob: basicDetails.dob,
			phoneNumber: basicDetails.phoneNo,
			email: basicDetails.email,
			country: basicDetails.country,
			state: basicDetails.state,
			eduQualification: basicDetails.eduQualification,
			currentEmploymet: employmentDetails,
			membershipCadre: membership.memberCdr,
			applicationFee: membership.applicationFee,
			membershipType: Program,
		});

		// console.log(payload);

		axios
			.post(`${BaseUrl}student/register`, payload)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	async function Country() {
		setLoading(true);
		try {
			const res = await getCountry();
			setAllCountry(res?.data);
			// console.log(res?.data)
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}

	async function State() {
		setLoading(true);

		try {
			const res = await getState(selectedCountry);
			setSAlltate(res?.data);
			// console.log(res?.data)
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}

	useEffect(() => {
		Country();
	}, []);

	useEffect(() => {
		selectedCountry !== "" && State();
	}, [selectedCountry]);

	console.log(myCountry, slectedState);

	return (
		<>
			<div className='Loader'>
				<BarLoader
					loading={Loading}
					speedMultiplier={2}
					color={"#01996D"}
					size={"100%"}
					cssOverride={{ width: "100%" }}
				/>
			</div>

			<div className='base__page'>
				<div className='About__container'>
					<h3 className='page__title'>Registration Portal</h3>

					<div className='about__body'>
						<div className='form__container'>
							<Paper style={{ padding: "15px" }}>
								<form action='' className='regForm' onSubmit={handleSubmit}>
									<div className='form__list'>
										<Divider variant='middle' />
										<h3>Personal Details</h3>

										<div className='form__inener__section'>
											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Title
												</InputLabel>

												<Select
													native
													value={basicDetails.title}
													onChange={(e) =>
														setBasicDetails((prev) => ({
															...prev,
															title: e.target.value,
														}))
													}
													label='Title'
													autoWidth='false'
												>
													<option aria-label='None' value='' />

													<option value='Mr'>Mr</option>
													<option value='Mrs'>Mrs</option>
													<option value='Miss'>Miss</option>
													<option value='Dr'>Dr</option>
													<option value='Chief'>Chief</option>
													<option value='Pst'>Pst</option>
													<option value='Prof'>Prof</option>
													<option value='Engr'>Hon</option>
													<option value='Amb'>Amb</option>
												</Select>
											</FormControl>

											<TextField
												id='outlined-text-input'
												label='Surname'
												type='text'
												style={{ width: "300px", margin: "10px" }}
												value={basicDetails.surname}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														surname: e.target.value,
													}))
												}
												variant='outlined'
												placeholder='Jane'
											/>

											<TextField
												id='outlined-text-input'
												label='Firstname'
												type='text'
												style={{ width: "300px", margin: "10px" }}
												value={basicDetails.firstName}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														firstName: e.target.value,
													}))
												}
												variant='outlined'
												placeholder='Jane'
											/>

											<TextField
												id='outlined-helperText'
												label='Middle Name'
												type='text'
												style={{ width: "300px", margin: "10px" }}
												value={basicDetails.middleName}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														middleName: e.target.value,
													}))
												}
												variant='outlined'
												placeholder='Doe'
											/>

											<TextField
												id='date'
												label='Date of birth'
												type='date'
												variant='outlined'
												defaultValue={Date.now()}
												style={{ width: "300px", margin: "10px" }}
												// className={classes.textField}
												InputLabelProps={{
													shrink: true,
												}}
												value={basicDetails.dob}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														dob: e.target.value,
													}))
												}
											/>

											<TextField
												id='outlined-helperText'
												label='Email'
												type='email'
												style={{ width: "300px", margin: "10px" }}
												value={basicDetails.email}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														email: e.target.value,
													}))
												}
												variant='outlined'
												placeholder='User@you.com'
											/>

											<TextField
												id='outlined-helperText'
												label='Mobile No:'
												type='phone'
												style={{ width: "300px", margin: "10px" }}
												value={basicDetails.phoneNo}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														phoneNo: e.target.value,
													}))
												}
												variant='outlined'
												placeholder='+234-080000IGPCM'
											/>

											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Highest Qualification
												</InputLabel>

												<Select
													native
													value={basicDetails.eduQualification}
													onChange={(e) =>
														setBasicDetails((prev) => ({
															...prev,
															eduQualification: e.target.value,
														}))
													}
													label='Education'
													autoWidth='false'
												>
													<option aria-label='None' value='' />

													<option value='NCE'>NCE</option>
													<option value='ND'>ND</option>
													<option value='HND'>HND</option>
													<option value='Degree'>Degree</option>
													<option value='PGD'>PGD</option>
													<option value='MSC'>MSC</option>
													<option value='PHD'>PHD</option>
												</Select>
											</FormControl>

											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Country
												</InputLabel>

												<Select
													native
													value={basicDetails.country}
													// onChange={(e) =>
													// 	setBasicDetails((prev) => ({
													// 		...prev,
													// 		country: e.target.value,
													// 	}))
													// }
													onChange={(e) => {
														const code = e.target.value.split(/[,.\s]/)[0];
														const country = e.target.value.split(/[,.\s]/)[1];
														setselectedCountry(code);
														setmyCountry(country);
													}}
													label='Country'
													autoWidth='false'
												>
													<option aria-label='None' value='' />
													{AllCountry.map((ctry) => (
														<option
															value={[ctry?.iso2, ctry?.name]}
															key={ctry?.id}
														>
															{ctry?.name}
														</option>
													))}
												</Select>
											</FormControl>

											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													State/Province
												</InputLabel>

												<Select
													native
													value={basicDetails.state}
													onChange={(e) => setslectedState(e.target.value)}
													// onChange={(e) =>
													// 	setBasicDetails((prev) => ({
													// 		...prev,
													// 		state: e.target.value,
													// 	}))
													// }
													label='state'
													autoWidth='false'
													disabled={selectedCountry === ""}
												>
													<option aria-label='None' value='' />

													{AllState.map((state) => (
														<option value={state.name} key={state?.id}>
															{state?.name}
														</option>
													))}
												</Select>
											</FormControl>
											<Divider variant='middle' />
										</div>
										<h3>Current Employment Details</h3>

										<div className='form__inener__section'>
											<Divider variant='middle' />
											<TextField
												id='outlined-multiline-static'
												label='Organisation'
												style={{ width: "300px", margin: "10px" }}
												placeholder='Xyz corprations'
												variant='outlined'
												value={employmentDetails.organization}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														organization: e.target.value,
													}))
												}
											/>

											<TextField
												id='date'
												label='Date Joined'
												type='date'
												variant='outlined'
												defaultValue={Date.now()}
												style={{ width: "300px", margin: "10px" }}
												// className={classes.textField}
												InputLabelProps={{
													shrink: true,
												}}
												value={employmentDetails.startDate}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														startDate: e.target.value,
													}))
												}
											/>
											<TextField
												id='outlined-multiline-static'
												label='Postion'
												type='text'
												style={{ width: "300px", margin: "10px" }}
												placeholder='Accountant'
												variant='outlined'
												value={employmentDetails.position}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														position: e.target.value,
													}))
												}
											/>

											<TextField
												id='outlined-multiline-static'
												label='Location'
												style={{ width: "300px", margin: "10px" }}
												multiline
												rows={3}
												placeholder='Plot 2, Obafemi Awolowo way Lagos'
												variant='outlined'
												value={employmentDetails.location}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														location: e.target.value,
													}))
												}
											/>
											<Divider variant='middle' />
										</div>
										<h3>Membership</h3>

										<div className='form__inener__section'>
											<Divider variant='middle' />
											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Membership
												</InputLabel>

												<Select
													native
													value={membership.memberCdr}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															memberCdr: e.target.value,
														}))
													}
													label='Membership'
													autoWidth='false'
													color='primary'
												>
													<option aria-label='None' value='' />

													<option value='Student Member'>Student Member</option>
													<option value='Affiliate Member'>
														Affiliate Member
													</option>
													<option value='Associate Member'>
														Associate Member
													</option>
													<option value='Full Member'>Full Member</option>
													<option value='Senior Member'>Senior Member</option>
													<option value='Fellowship Member'>
														Fellowship Member
													</option>
													<option value='Research Fellow'>
														Research Fellow
													</option>
													<option value='Doctoral Fellow'>
														Doctoral Fellow
													</option>
													<option value='Distinguished Fellow'>
														Distinguished Fellow
													</option>
													<option value='Fellow Member'>Fellow Member</option>
												</Select>
											</FormControl>

											<FormControl
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Membership Routes
												</InputLabel>

												<Select
													native
													value={membership.memberCdr}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															memberCdr: e.target.value,
														}))
													}
													label='Membership'
													autoWidth='false'
													color='primary'
												>
													<option aria-label='None' value='' />

													<option value='Direct Membership Admission'>
														Direct Membership Admission
													</option>
													<option value='Executive Professional PGD course'>
														Executive Professional PGD course
													</option>
													<option value='Academic Programs '>
														Academic Programs{" "}
													</option>
													<option value='NYSC Scheme'>NYSC Scheme</option>
												</Select>
											</FormControl>

											<FormControl
												color='primary'
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Application Fee
												</InputLabel>

												<Select
													native
													value={membership.applicationFee}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															applicationFee: e.target.value,
														}))
													}
													label='Membership'
													autoWidth='false'
													color='primary'
												>
													<option aria-label='None' value='' />

													<option value='Direct Membership (N5000, $15)'>
														Direct Membership (N5000, $15)
													</option>
													<option value='Professional PGD course (N5000, $15)'>
														Professional PGD course (N5000, $15)
													</option>
													<option value='Academic Programs (N10000, $29)'>
														Academic Programs (N10000, $29)
													</option>
													<option value='Academic Programs (N10000, ($29)'>
														Academic Programs (N10000, ($29)
													</option>
													<option value='NYSC Scheme (N1000)'>
														NYSC Scheme (N1000)
													</option>
												</Select>
											</FormControl>
											<FormControl
												color='primary'
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													PGD Courses
												</InputLabel>

												<Select
													native
													value={membership.applicationFee}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															applicationFee: e.target.value,
														}))
													}
													label='Membership'
													autoWidth='false'
													color='primary'
												>
													<option aria-label='None' value='' />

													<option value='PGD in Peace and Conflict Management'>
														PGD in Peace and Conflict Management
													</option>
													<option value='PGD in Peace, Security Studies and Criminology'>
														PGD in Peace, Security Studies and Criminology
													</option>
													<option value='	PGD in Peace, Security and Strategic Leadership'>
														PGD in Peace, Security and Strategic Leadership
													</option>
													<option value='	PGD in Global Peace-Keeping and Diplomacy'>
														PGD in Global Peace-Keeping and Diplomacy
													</option>
													<option value='	PGD in Peace Education'>
														PGD in Peace Education
													</option>
													<option value='PGD in Peace and Conflict Journalism'>
														PGD in Peace and Conflict Journalism
													</option>
													<option value='PGD in Peace-building and Environmental Sustainability'>
														PGD in Peace-building and Environmental
														Sustainability
													</option>
													<option value='PGD in Workplace Conflict Management'>
														PGD in Workplace Conflict Management
													</option>
													<option value='	PGD in Sports Conflict Management and Mediation '>
														PGD in Sports Conflict Management and Mediation
													</option>
												</Select>
											</FormControl>
											<FormControl
												color='primary'
												variant='outlined'
												style={{ width: "300px", margin: "10px" }}
											>
												<InputLabel htmlFor='outlined-age-native-simple'>
													Payment Methods
												</InputLabel>

												<Select
													native
													value={membership.applicationFee}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															applicationFee: e.target.value,
														}))
													}
													label='Membership'
													autoWidth='false'
													color='primary'
												>
													<option aria-label='None' value='' />

													<option value='Direct Bank Deposit'>
														Direct Bank Deposit
													</option>

													<option value='Western Union'>Western Union</option>
													<option value='PayPal'>PayPal</option>
													<option value='USSD '>USSD</option>
													<option value='Others'>Others</option>
												</Select>
											</FormControl>

											<div className={classes.root}>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions1-content'
														id='additional-actions1-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='DIRECT MEMBERSHIP ADMISSION'
																/>
															}
															label='DIRECT MEMBERSHIP ADMISSION '
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															Direct Membership Admission is membership based on
															your years of work experience and academic
															qualification. Here, you are not require to
															undergo through our Executive Training Course or
															academic Program but your years of work experience
															and academic standing qualifies you into Various
															Membership Cadres available.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions2-content'
														id='additional-actions2-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='EXECUTIVE PROFESSIONAL PGD TRAINING COURSE'
																/>
															}
															label='EXECUTIVE PROFESSIONAL PGD TRAINING COURSE'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															This is a maximum of 10-12 weeks training course
															that empowers the working Professionals to gain
															new skills, diversify knowledge and improve
															performance. This PGD training is to help you
															secure employment, gain promotion, provide
															consultancy services and achieve professionalism.
															It's open to graduates from all fields from NCE or
															Diploma and above. Candidates will be admitted
															into Various Membership Cadres according to their
															working experiences after passing the Professional
															Examination and paying the Induction and
															Certification fees. (9 PGDs are available)
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='ACADEMIC PROGRAMS'
																/>
															}
															label='ACADEMIC PROGRAMS'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															We offer academic programs that runs for a minimum
															of 6 months to a maximum of 3 years. We have
															Diploma courses, HND courses, PGD courses, Masters
															and PhD programs available. The Academic Programs
															are done in Partnership with US-Interglobal
															University Somalia/USA and other accreditated
															Universities around the globe. We have more than
															15 areas of specialty to specialize in.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox color='primary' name='NYSC SCHEME' />
															}
															label='NYSC SCHEME'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															This is a one-year short PGD training, both
															Professional and academic, that afford the serving
															Youth Corps Members the opportunity to earn a PGD
															during their service year to enable them gain
															employment or proceed for master programs after
															service.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='INTERNATIONAL DIPLOMA'
																/>
															}
															label='INTERNATIONAL DIPLOMA'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															The International Diploma is a maximum of 9 months
															course with Project thesis requirement inclusive
															for the completion of the program. Offer in
															Partnership with Polytechnics service.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='HIGHER NATIONAL DIPLOMA'
																/>
															}
															label='HIGHER NATIONAL DIPLOMA'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															It's a minimum of 14- Maximum of 20 Months with
															Project thesis requirement for completion of the
															program. It's runs in Partnership with renown
															Polytechnics.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={
																<Checkbox
																	color='primary'
																	name='POSTGRADUATE DIPLOMA'
																/>
															}
															label='POSTGRADUATE DIPLOMA'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															This program is run in Partnership with
															US-Interglobal University, Somalia/USA. The
															duration is between 6-9 months maximum. Project
															work included.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={<Checkbox color='primary' name='M.SC' />}
															label='M.SC'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															This is done in Partnership with reputable
															Universities. It can last for a period of 14-18
															months only. Project thesis requirement included.
														</Typography>
													</AccordionDetails>
												</Accordion>
												<Accordion>
													<AccordionSummary
														expandIcon={<ExpandMoreIcon />}
														aria-label='Expand'
														aria-controls='additional-actions3-content'
														id='additional-actions3-header'
													>
														<FormControlLabel
															aria-label='Acknowledge'
															onClick={(event) => event.stopPropagation()}
															onFocus={(event) => event.stopPropagation()}
															onChange={HandleModalCheckBox}
															control={<Checkbox color='primary' name='Ph.D' />}
															label='Ph.D'
														/>
													</AccordionSummary>
													<AccordionDetails>
														<Typography color='textSecondary'>
															This is a 44-56 month course. It's done in
															Partnership with reputable Universities and has
															thesis requirement for completion.
														</Typography>
													</AccordionDetails>
												</Accordion>
											</div>
											<Divider variant='middle' />
											<h3 style={{ textAlign: "center" }}>Payment Details</h3>
											<Divider variant='middle' />
											<div
												className='form__inener__section'
												// style={{ marginTop: 20, marginBottom: 20 }}
											>
												<Divider variant='middle' />
												<Card className={classes.root}>
													<CardContent>
														<Typography
															className={classes.title}
															color='textSecondary'
															gutterBottom
															variant='h5'
														>
															Bank Details
														</Typography>
														<Typography variant='h6' component='h4'>
															Account Name : Institute of Global Peace and
															Conflict Management
														</Typography>
														<Typography variant='h6' component='h4'>
															Bank : Guaranty Trust Bank
														</Typography>
														<Typography variant='h6' component='h4'>
															Account Number : 0645754697
														</Typography>
													</CardContent>
													<CardActions style={{marginBottom:10}}>
												

														<input
															accept='image/*'
															className={classes.input}
															id='contained-button-file'
														
															type='file'
														/>
														<label htmlFor='contained-button-file'>
															<Button
																variant='contained'
																color='primary'
																component="span"
																className={classes.button}
																startIcon={<CloudUploadIcon />}
															>
																Upload Payment
															</Button>
														</label>
													</CardActions>
												</Card>
											</div>
										</div>
									</div>

									<div className='form__Btn'>
										<Button
											variant='contained'
											disabled={
												basicDetails.firstName === "" ||
												basicDetails.surname === ""
											}
											// onClick={handleClickOpen}
											type='submit'
											endIcon={<ArrowForwardIosIcon />}
											color='primary'
										>
											Register
										</Button>
									</div>
								</form>
							</Paper>
						</div>

						<Dialog
							open={open}
							TransitionComponent={Transition}
							keepMounted
							onClose={handleClose}
						>
							<DialogTitle id='alert-dialog-slide-title'>
								{"IGPCM  Portal"}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id='alert-dialog-slide-description'>
									Dear {basicDetails.firstName} you will be contacted when your
									application has been duly reviewed.
									<hr />
									see you soon..
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								{/* <Button onClick={handleClose} color="primary">
                Disagree
            </Button> */}
								<Button onClick={handleClose} color='primary'>
									Close
								</Button>
							</DialogActions>
						</Dialog>

						<hr className='Hr__style' />

						{/* <Container>
							<div className='contact__item'>
								<EditLocationIcon fontSize='large' color='primary' />
								<h3>Steps to Register Offline</h3>
							</div>

							<Paper className={classes.paper}>
								Click here to
								<a
									className='Adownload'
									href={PdfForm}
									download='IGPCM__REGForm.pdf'
								>
									<Button color='primary' endIcon={<CloudDownloadIcon />}>
										Download
									</Button>
								</a>
								form
							</Paper>

							<ol className='offline__reg__list'>
								<li>
									{" "}
									Pay Application fee into IGPCM Account details below/to State
									Coordinator.
								</li>
								<li>
									Download or Fill the online Application Form/Obtain the Form
									from our office in your state
								</li>
								<li>
									{" "}
									Fill the Form, attached 1 passport photograph & a copy of your
									CV.
								</li>
								<li>
									{" "}
									Scan the items in 3 to igpcminfo@gmail.com/submit to our
									office in your state.
								</li>
								<li>
									{" "}
									) Application status shall be communicated to you within 42hrs
									during working days.
								</li>
								<li>
									{" "}
									Account information:
									<ul>
										<li>
											Acct Name:
											<strong>
												{" "}
												Institute of Global Peace and Conflict Management
											</strong>
										</li>
										<li>
											Acct Number:<strong> 0645754697</strong>
										</li>
										<li>
											Bank:<strong> Guaranty Trust Bank Plc</strong>
										</li>
									</ul>
								</li>
							</ol>
						</Container> */}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Register;
