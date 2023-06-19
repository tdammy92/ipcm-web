import React, { useState, forwardRef, useEffect, useRef } from "react";

import { Button, Paper, Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/partials/Footer/Footer";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FilledInput from "@material-ui/core/FilledInput";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from "@material-ui/core/FormGroup";
import Avatar from "@material-ui/core/Avatar";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import Input from "@material-ui/core/Input";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import BarLoader from "react-spinners/BarLoader";

import { BaseUrl } from "../Services/api/BaseUrl";
// import PdfForm from "../assets/document/IGPCM__REGForm.pdf";
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

import {
	accordionData,
	titleArray,
	genderArray,
	qualificationArray,
	yearsExperienceArray,
	membershipArray,
	memberShipRouteArray,
	AcademicProgramsArray,
	applicationFeeArray,
	paymentArray,
} from "../components/Data/formData";
import { getState, getCountry } from "../Services/api/countryService";
import { avatar } from "../components/Data/common";

import Documents from "../components/partials/uploadDocuments";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const fontControlStyles = {
	width: "350px",
	marginTop: "10px",
	marginBottom: "10px",
	marginLeft: "15px",
};
const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},

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
	formControl: {
		marginLeft: "20px",
	},

	serialContainer: {
		width: `50%`,

		// maxHeight:'30px'
	},
	passport: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		justifySelf: "center",
		alignItems: "center",
		alignSelf: "center",
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2),
		cursor: "pointer",
	},
}));

function Register() {
	const [imageFile, setImageFile] = useState(null);
	const [higestQulificationFile, setHigestQulificationFile] = useState(null);
	const [jambFile, setJambFile] = useState(null);

	const [passport, setPassport] = useState("");
	const [documents, setDocuments] = useState({});

	const [basicDetails, setBasicDetails] = useState({
		title: "",
		surname: "",
		firstName: "",
		middleName: "",
		gender: "",
		email: "",
		dob: `${new Date()?.toLocaleDateString()}`,
		phoneNo: "",
		eduQualification: "",
		// country: "",
		// state: "",
	});

	//all  refs
	const imgRef = useRef(null);

	const jambDocRef = useRef(null);
	const AnyDocRef = useRef(null);

	const [AllCountry, setAllCountry] = useState([]);
	const [selectedCountry, setselectedCountry] = useState("");
	const [AllState, setSAlltate] = useState([]);

	const [acccordionDaata, setacccordionDaata] = useState(() => accordionData);

	// const [academicProgramList, setacademicProgramList] = useState([]);

	//passed pyaload
	const [myCountry, setmyCountry] = useState("");
	const [selectedState, setslectedState] = useState("");

	const [Loading, setLoading] = useState(false);
	const [FormLoading, setFormLoading] = useState(false);

	const [employmentDetails, setemploymentDetails] = useState({
		organization: "",
		startDate: `${new Date()?.toLocaleDateString()}`,
		yearsExperience: "",
		position: "",
		location: "",
	});

	const [membership, setmembership] = useState({
		memberCdr: "",
		memberRoutes: "",
		applicationFee: "",
		paymentMethods: "",
		pgdCourses: "",
		academicProgram: "",
	});

	const [serialNumber, setserialNumber] = useState("");

	const [openModal, setOpenModal] = useState(false);

	const [documentType, setDocumentType] = useState("");

	const [programs, setPrograms] = useState([]);

	const classes = useStyles();

	const handleClose = () => {
		setOpenModal(false);
	};

	function ResetForm() {
		setBasicDetails({
			title: "",
			surname: "",
			firstName: "",
			middleName: "",
			gender: "",
			email: "",
			dob: `${new Date()?.toLocaleDateString()}`,
			phoneNo: "",
			eduQualification: "",
		});

		// setacademicProgramList([]);
		setmyCountry("");
		setslectedState("");
		setemploymentDetails({
			organization: "",
			startDate: `${new Date()?.toLocaleDateString()}`,
			position: "",
			yearsExperience: "",
			location: "",
		});
		setmembership({
			memberCdr: "",
			memberRoutes: "",
			applicationFee: "",
			paymentMethods: "",
			pgdCourses: "",
			academicProgram: "",
		});
		setPrograms([]);
		setserialNumber("");
		setDocuments([]);
	}

	function handleProgramOptions(e, name) {
		const selectedOption = e?.target?.name;

		const IsProgramAdded = programs?.find((program) => program?.name === name);

		if (IsProgramAdded === undefined) {
			//if program is not added added program
			const temp = {
				name,
				options: [selectedOption],
			};
			setPrograms((prev) => [...prev, temp]);
		} else {
			//if program  is added check if options are adedd
			const addedOptions = IsProgramAdded?.options;

			const checkIfAddedOption = addedOptions?.includes(selectedOption);

			//if its added then remove it
			if (checkIfAddedOption) {
				//excluded the selected options from the Program
				const remainingOptions = addedOptions?.filter(
					(option) => option !== selectedOption
				);

				//filter the array and exclude  the  program out of the array
				const remainingPrograms = programs?.filter(
					(program) => program?.name !== name
				);
				//create a temproary program and rebuild the object
				const temprogram = {
					name,
					options: [...remainingOptions],
				};

				setPrograms([temprogram, ...remainingPrograms]);
			} else {
				//filter the array and exclude  the  program out of the array
				const remainingPrograms = programs?.filter(
					(program) => program?.name !== name
				);
				//create a new object for that program and add the option
				const temprogram = {
					name,
					options: [selectedOption, ...addedOptions],
				};

				setPrograms([temprogram, ...remainingPrograms]);
			}
		}
	}

	async function handleSubmit(e) {
		setFormLoading(true);
		e.preventDefault();

		const payload = JSON.stringify({
			image_data: passport,
			title: basicDetails?.title,
			surname: basicDetails?.surname,
			firstName: basicDetails?.firstName,
			middleName: basicDetails?.middleName,
			gender: basicDetails?.gender,
			dob: basicDetails?.dob,
			phoneNumber: basicDetails?.phoneNo,
			email: basicDetails?.email,
			country: myCountry,

			// country: basicDetails.country,
			// state: basicDetails.state,
			state: selectedState,
			eduQualification: basicDetails.eduQualification,
			currentEmploymet: employmentDetails,
			membershipCadre: membership.memberCdr,
			membershipRoute: membership.memberRoutes,
			applicationFee: membership.applicationFee,
			// membershipType: Program,
			// pgdCourses: membership?.pgdCourses,
			paymentMethods: membership?.paymentMethods,
			academicPrograms: programs,
			serialNumber: serialNumber,
			documents: documents,
		});

		console.log("======= Form Payload =======\n", JSON.parse(payload, null, 2));
		// console.log(payload);
		axios
			.post(`${BaseUrl}student/register`, payload, {
				headers: { "Content-Type": "application/json" },
			})
			.then((res) => {
				console.log(res);
				ResetForm();
				setOpenModal(true);
			})
			.catch((err) => {
				console.log(err?.response?.data?.message);
			})
			.finally(() => {
				setFormLoading(false);
			});
	}

	// get country api call
	async function Country() {
		setLoading(true);
		try {
			const res = await getCountry();
			setAllCountry(res?.data);
			// console.log(res?.data)
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	//get state api call
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

	//handle Uploads
	const UploadPassport = (e) => {
		e.preventDefault();
		if (imgRef?.current) {
			imgRef?.current?.click();
		}
	};

	const handleJambUpload = () => {
		if (jambDocRef?.current) {
			jambDocRef?.current?.click();
		}
	};
	const handleHighestUpload = () => {
		if (AnyDocRef?.current) {
			AnyDocRef?.current?.click();
		}
	};

	const HandleRemoveFile = (fileType) => {
		const tempDocuments = { ...documents };

		delete tempDocuments[fileType];

		setDocuments(tempDocuments);
	};

	useEffect(() => {
		document.title = "IGPCM | Register";
		Country();
	}, []);

	//fires to get base64 for  passport
	useEffect(() => {
		if (imageFile) {
			const Reader = new FileReader();
			Reader.onload = () => {
				setPassport(Reader?.result);
			};
			Reader.readAsDataURL(imageFile);
		} else {
			setPassport(null);
		}
	}, [imageFile]);

	//fires to get base64 for  highest Qualification
	useEffect(() => {
		if (higestQulificationFile) {
			setDocuments((prev) => ({
				...prev,
				higestQualification: { name: higestQulificationFile?.name },
			}));
			const Reader = new FileReader();
			Reader.onload = () => {
				setDocuments((prev) => ({
					...prev,
					higestQualification: {
						...prev?.higestQualification,
						file: Reader?.result,
					},
				}));
			};
			Reader.readAsDataURL(higestQulificationFile);
		} else {
			setPassport(null);
		}
	}, [higestQulificationFile]);

	//fires to get base64 for  highest Qualification
	useEffect(() => {
		if (jambFile) {
			setDocuments((prev) => ({
				...prev,
				jamb: { name: jambFile?.name },
			}));
			const Reader = new FileReader();
			Reader.onload = () => {
				setDocuments((prev) => ({
					...prev,
					jamb: {
						...prev?.jamb,
						file: Reader?.result,
					},
				}));
			};
			Reader.readAsDataURL(jambFile);
		}
	}, [jambFile]);

	useEffect(() => {
		selectedCountry !== "" && State();
	}, [selectedCountry]);

	// console.log(JSON.stringify(documents, null, 2));

	return (
		<>
			<div className="Loader">
				<BarLoader
					loading={Loading}
					speedMultiplier={2}
					color={"#01996D"}
					size={"100%"}
					cssOverride={{ width: "100%" }}
				/>
			</div>

			<div className="base__page">
				<Container fixed maxWidth="md" mx="auto">
					<div className="About__container">
						<h3 className="page__title">Registration Portal</h3>

						<div className="about__body">
							<Paper
								// mx="auto"

								style={{
									width: "100%",
									minWidth: "350px",
									// padding: "8px",
									// border: "1px solid green",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<form action="" className="regForm" onSubmit={handleSubmit}>
									<div className="form__list">
										<h3>Personal Details</h3>
										<div className="form__inner__section">
											<div className="passport_container">
												<Avatar
													onClick={UploadPassport}
													alt="passport Image"
													src={passport ?? avatar}
													// src="/static/images/avatar/1.jpg"
													className={classes.passport}
												/>

												<Typography variant="h6" component="h2" color="primary">
													Passport Upload
												</Typography>

												<input
													type="file"
													accept="image/*"
													style={{ display: "none" }}
													ref={imgRef}
													onChange={(e) => {
														const file = e?.target?.files[0];
														if (
															file &&
															file?.type?.substring(0, 5) === "image"
														) {
															setImageFile(file);
														} else {
															setImageFile(null);
														}
													}}
												/>
											</div>
											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="title">Title</InputLabel>

												<Select
													native
													value={basicDetails.title}
													onChange={(e) =>
														setBasicDetails((prev) => ({
															...prev,
															title: e.target.value,
														}))
													}
													label="Title"
													autoWidth={false}
												>
													{titleArray.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<TextField
												id="outlined-surname-input"
												label="Surname"
												type="text"
												value={basicDetails.surname}
												className="form__InputBox"
												style={fontControlStyles}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														surname: e.target.value,
													}))
												}
												variant="outlined"
												placeholder="Jane"
											/>

											<TextField
												id="outlined-firstname-input"
												label="Firstname"
												type="text"
												value={basicDetails.firstName}
												className="form__InputBox"
												style={fontControlStyles}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														firstName: e.target.value,
													}))
												}
												variant="outlined"
												placeholder="Jane"
											/>

											<TextField
												id="outlined-middleName-input"
												label="Middle Name"
												type="text"
												className="form__InputBox"
												style={fontControlStyles}
												value={basicDetails.middleName}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														middleName: e.target.value,
													}))
												}
												variant="outlined"
												placeholder="Doe"
											/>

											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="gender">Gender</InputLabel>
												<Select
													native
													value={basicDetails?.gender}
													onChange={(e) =>
														setBasicDetails((prev) => ({
															...prev,
															gender: e.target.value,
														}))
													}
													label="gender"
													autoWidth={false}
												>
													{genderArray.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<TextField
												id="date"
												label="Date of birth"
												type="date"
												variant="outlined"
												format="dd/MM/yyyy"
												className="form__InputBox"
												style={fontControlStyles}
												defaultValue={`${new Date()}`}
												InputLabelProps={{
													shrink: true,
												}}
												value={basicDetails?.dob}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														dob: e?.target?.value,
													}))
												}
											/>

											<TextField
												id="outlined-email"
												label="Email"
												type="email"
												className="form__InputBox"
												style={fontControlStyles}
												value={basicDetails.email}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														email: e.target.value,
													}))
												}
												variant="outlined"
												placeholder="User@you.com"
											/>

											<TextField
												id="outlined-phone"
												label="Mobile No:"
												type="phone"
												className="form__InputBox"
												style={fontControlStyles}
												value={basicDetails.phoneNo}
												onChange={(e) =>
													setBasicDetails((prev) => ({
														...prev,
														phoneNo: e.target.value,
													}))
												}
												variant="outlined"
												placeholder="+234-080000IGPCM"
											/>

											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="qualification">
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
													label="Education"
													autoWidth={false}
												>
													{qualificationArray.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="Country-List">Country</InputLabel>

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
													label="Country"
													autoWidth={false}
												>
													<option aria-label="None" value="" />
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
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="state-list">
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
													label="state"
													autoWidth={false}
													disabled={selectedCountry === ""}
												>
													<option aria-label="None" value="" />

													{AllState.map((state) => (
														<option value={state.name} key={state?.id}>
															{state?.name}
														</option>
													))}
												</Select>
											</FormControl>
											<Divider variant="middle" />
										</div>
										<h3>Current Employment Details</h3>

										<div className="form__inner__section">
											<Divider variant="middle" />
											<TextField
												id="org-name"
												label="Organisation"
												className="form__InputBox"
												style={fontControlStyles}
												placeholder="Xyz corprations"
												variant="outlined"
												value={employmentDetails.organization}
												onChange={(e) => {
													setemploymentDetails((prev) => ({
														...prev,
														organization: e.target.value,
													}));
												}}
											/>

											<TextField
												id="date"
												label="Date Joined"
												type="date"
												variant="outlined"
												format="dd/MM/yyyy"
												defaultValue={`${new Date()}`}
												className="form__InputBox"
												style={fontControlStyles}
												InputLabelProps={{
													shrink: true,
												}}
												value={employmentDetails.startDate}
												onChange={(e) => {
													setemploymentDetails((prev) => ({
														...prev,
														startDate: e.target.value,
													}));
												}}
											/>

											<TextField
												id="position-held"
												label="Postion"
												type="text"
												className="form__InputBox"
												style={fontControlStyles}
												placeholder="Accountant"
												variant="outlined"
												value={employmentDetails.position}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														position: e.target.value,
													}))
												}
											/>
											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="qualification">
													Years of Career Experience
												</InputLabel>

												<Select
													native
													value={employmentDetails.yearsExperience}
													onChange={(e) =>
														setemploymentDetails((prev) => ({
															...prev,
															yearsExperience: e.target.value,
														}))
													}
													label="Years of experince"
													autoWidth={false}
												>
													{yearsExperienceArray.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>
											<TextField
												id="location"
												label="Location"
												className="form__InputBox"
												style={fontControlStyles}
												multiline
												rows={3}
												placeholder="Plot 2, Obafemi Awolowo way Lagos"
												variant="outlined"
												value={employmentDetails.location}
												onChange={(e) =>
													setemploymentDetails((prev) => ({
														...prev,
														location: e.target.value,
													}))
												}
											/>

											<Divider variant="middle" />
										</div>
										<h3>Membership</h3>

										<div className="form__inner__section">
											<Divider variant="middle" />
											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
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
													label="Membership"
													autoWidth={false}
													color="primary"
												>
													{membershipArray.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<FormControl
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
													Membership Routes
												</InputLabel>

												<Select
													native
													value={membership.memberRoutes}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															memberRoutes: e.target.value,
														}))
													}
													label="Membership"
													autoWidth={false}
													color="primary"
												>
													{memberShipRouteArray?.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<FormControl
												color="primary"
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
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
													label="Membership"
													autoWidth={false}
													color="primary"
												>
													{applicationFeeArray?.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>
											{/* <FormControl
												color="primary"
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
													PGD Courses
												</InputLabel>

												<Select
													native
													value={membership.pgdCourses}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															pgdCourses: e.target.value,
														}))
													}
													label="Membership"
													autoWidth={false}
													color="primary"
												>
													<option aria-label="None" value="" />

													<option value="PGD in Peace and Conflict Management">
														PGD in Peace and Conflict Management
													</option>
													<option value="PGD in Peace, Security Studies and Criminology">
														PGD in Peace, Security Studies and Criminology
													</option>
													<option value="PGD in Peace, Security and Strategic Leadership">
														PGD in Peace, Security and Strategic Leadership
													</option>
													<option value="PGD in Global Peace-Keeping and Diplomacy">
														PGD in Global Peace-Keeping and Diplomacy
													</option>
													<option value="PGD in Peace Education">
														PGD in Peace Education
													</option>
													<option value="PGD in Peace and Conflict Journalism">
														PGD in Peace and Conflict Journalism
													</option>
													<option value="PGD in Peace-building and Environmental Sustainability">
														PGD in Peace-building and Environmental
														Sustainability
													</option>
													<option value="PGD in Workplace Conflict Management">
														PGD in Workplace Conflict Management
													</option>
													<option value="PGD in Sports Conflict Management and Mediation ">
														PGD in Sports Conflict Management and Mediation
													</option>
												</Select>
											</FormControl> */}
											{/* <FormControl
												color="primary"
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
													Academic programs
												</InputLabel>

												<Select
													native
													value={membership.academicProgram}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															academicProgram: e.target.value,
														}))
													}
													label="Academic Program"
													autoWidth={false}
													color="primary"
												>
													{AcademicProgramsArray?.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl> */}
											<FormControl
												color="primary"
												variant="outlined"
												className="form__InputBox"
												style={fontControlStyles}
											>
												<InputLabel htmlFor="outlined-age-native-simple">
													Payment Methods
												</InputLabel>

												<Select
													native
													value={membership.paymentMethods}
													onChange={(e) =>
														setmembership((prev) => ({
															...prev,
															paymentMethods: e.target.value,
														}))
													}
													label="Membership"
													autoWidth={false}
													color="primary"
												>
													{paymentArray?.map((value, i) => (
														<option key={i} value={value}>
															{value}
														</option>
													))}
												</Select>
											</FormControl>

											<div className={classes.root}>
												{acccordionDaata?.map((item) => {
													return (
														<Accordion key={item.id}>
															<AccordionSummary
																expandIcon={<ExpandMoreIcon />}
																aria-label="Expand"
																aria-controls="additional-actions3-content"
																id="additional-actions3-header"
															>
																{
																	<Typography variant="h6">
																		{item?.name}
																	</Typography>
																}
																{/* <FormControlLabel
																	aria-label="Acknowledge"
																	onClick={(event) => event.stopPropagation()}
																	onFocus={(event) => event.stopPropagation()}
																	onChange={HandleModalCheckBox}
																	ref={
																		item?.name === "ACADEMIC PROGRAMS"
																			? seleRef
																			: null
																	}
																	control={
																		<Checkbox
																			color="primary"
																			name={item?.name}
																		/>
																	}
																	label={item?.name}
																/> */}
															</AccordionSummary>
															<AccordionDetails>
																<Typography color="textSecondary">
																	{item?.description}
																</Typography>
															</AccordionDetails>
															{item.List.length > 0 && (
																<AccordionDetails>
																	<FormControl
																		required
																		// error={error}
																		component="fieldset"
																		onChange={(e) =>
																			handleProgramOptions(e, item?.name)
																		}
																		// onChange={HandleNextedCheckBox}
																		className={classes.formControl}
																		onClick={(event) => event.stopPropagation()}
																		onFocus={(event) => event.stopPropagation()}
																	>
																		<FormLabel component="legend">
																			Admission Options
																		</FormLabel>
																		<FormGroup>
																			{item.List.map((list, i) => {
																				return (
																					<FormControlLabel
																						key={i}
																						control={
																							<Checkbox
																								color="primary"
																								// checked={list.isChecked}
																								// onChange={()=>HandleNextedCheckBox(list?.name)}
																								name={list?.name}
																							/>
																						}
																						label={list?.name}
																					/>
																				);
																			})}
																		</FormGroup>
																		{/* <FormHelperText>
		You can display an error
	</FormHelperText> */}
																	</FormControl>
																</AccordionDetails>
															)}
														</Accordion>
													);
												})}
											</div>
										</div>

										{/* <h3>Documents Upload</h3> */}
										<div className="form__inner__section">
											<p
												style={{
													textAlign: "center",
													color: "#01996D",
													fontSize: "16px",
													textTransform: "uppercase",
												}}
											>
												{" "}
												<sup style={{ color: "#01996D", fontSize: "20px" }}>
													*
												</sup>
												Upload your most recent document.
											</p>
											<Divider variant="middle" />

											<div
												style={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
												}}
											>
												<div
													style={{
														width: "100%",
														margin: "10px",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														marginTop: "20px",
													}}
												>
													<FormControl
														variant="outlined"
														style={{
															width: "60%",
														}}
													>
														<InputLabel htmlFor="outlined-age-native-simple">
															Select Document Type
														</InputLabel>

														<Select
															native
															value={documentType}
															onChange={(e) => setDocumentType(e.target.value)}
															label="document type"
															autoWidth={false}
															color="primary"
														>
															<option aria-label="None" value="" />
															{qualificationArray.map((value, i) => (
																<option key={i} value={value}>
																	{value}
																</option>
															))}
														</Select>
													</FormControl>
												</div>
												<div
													style={{
														width: "65%",
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
														justifyContent: "center",
														paddingBottom: "15px",
													}}
												>
													{documentType === "SSCE" && (
														<>
															<Documents
																ref={AnyDocRef}
																documentName="Waec/Neco Result"
																handleClick={handleHighestUpload}
																selectedFileName={
																	documents?.higestQualification?.name
																}
																handleChange={setHigestQulificationFile}
																handleRemove={() => {
																	HandleRemoveFile("higestQualification");
																}}
															/>
															<Documents
																ref={jambDocRef}
																documentName="Jamb Result"
																selectedFileName={documents?.jamb?.name}
																handleChange={setJambFile}
																handleClick={handleJambUpload}
																handleRemove={() => {
																	HandleRemoveFile("jamb");
																}}
															/>
														</>
													)}
													{documentType !== "" && documentType !== "SSCE" && (
														<Documents
															ref={AnyDocRef}
															// documentName="Diploma/NCE Results"
															documentName={documentType}
															handleClick={handleHighestUpload}
															selectedFileName={
																documents?.higestQualification?.name
															}
															handleChange={setHigestQulificationFile}
															handleRemove={() => {
																HandleRemoveFile("higestQualification");
															}}
														/>
													)}
												</div>
											</div>
										</div>
										<Divider variant="middle" />

										<h3>Payment Details</h3>

										<div className="form__inner__section">
											<Divider variant="middle" />
											<p
												style={{
													textAlign: "center",
													color: "#01996D",
													fontSize: "16px",
												}}
											>
												{" "}
												<sup style={{ color: "#01996D", fontSize: "20px" }}>
													*
												</sup>
												Pay application fee to obtain Serial Number to complete
												your application .
											</p>
											<Divider variant="middle" />
											<Card className={classes.root}>
												<CardContent>
													<Typography
														className={classes.title}
														color="textSecondary"
														gutterBottom
														variant="h5"
													>
														Bank Details
													</Typography>
													<Typography variant="h6" component="h4">
														Account Name : Institute of Global Peace and
														Conflict Management
													</Typography>
													<Typography variant="h6" component="h4">
														Bank : Guaranty Trust Bank
													</Typography>
													<Typography variant="h6" component="h4">
														Account Number : 0645754697
													</Typography>
												</CardContent>
												<CardActions
													style={{
														marginBottom: 10,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													<FormControl
														fullWidth
														className={classes.serialContainer}
														variant="filled"
													>
														<InputLabel htmlFor="filled-adornment-amount">
															Serial Number
														</InputLabel>
														<FilledInput
															id="serial-number"
															// style={{height:'40px'}}
															// size='small'
															value={serialNumber}
															onChange={(e) => setserialNumber(e.target.value)}
															// startAdornment={<InputAdornment position="start">$</InputAdornment>}
															placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"
															labelwidth={60}
														/>
														<div style={{ textAlign: "center", padding: 0 }}>
															<p
																style={{
																	color: "#01996D",
																	fontSize: "18px",
																	padding: 0,
																}}
															>
																Please contact admin for Serial Number:
															</p>
															<span style={{ fontSize: "20px", padding: 0 }}>
																08074090417, 07038286393, 07033458730
															</span>
														</div>
													</FormControl>
												</CardActions>
											</Card>
										</div>
									</div>

									<div className="form__Btn">
										<Button
											variant="contained"
											disabled={
												basicDetails.firstName === "" ||
												basicDetails.surname === "" ||
												serialNumber === ""
											}
											// onClick={handleClickOpen}
											type="submit"
											endIcon={<ArrowForwardIosIcon />}
											color="primary"
										>
											Register
										</Button>
									</div>
								</form>
							</Paper>

							<Dialog
								open={openModal}
								TransitionComponent={Transition}
								keepMounted
								onClose={handleClose}
							>
								<DialogTitle id="alert-dialog-slide-title">
									successful
								</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-slide-description">
										Dear {basicDetails.firstName} you will be contacted when
										your application has been duly reviewed.
										<br />
										see you soon..
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									{/* <Button onClick={handleClose} color="primary">
                Disagree
            </Button> */}
									<Button onClick={handleClose} color="primary">
										Close
									</Button>
								</DialogActions>
							</Dialog>

							<hr className="Hr__style" />
						</div>
					</div>
				</Container>
				<Footer />
			</div>

			<Backdrop className={classes.backdrop} open={FormLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}

export default Register;
