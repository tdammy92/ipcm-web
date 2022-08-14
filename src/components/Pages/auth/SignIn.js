import React from "react";
import {Redirect, useHistory} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import axios from 'axios'
import Paper from "@material-ui/core/Paper";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { BaseUrl } from "../../../Services/api/BaseUrl";
import "./style.css";

const signInValidation = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("email is required"),

	password: yup.string().required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "50%",
		},
	},

	paper: {
		padding: 10,
		margin: 20,
	},
}));

function SignIn() {
	const classes = useStyles();
	const history = useHistory()

	async function HandleLogin(values) {
		axios.post(`${BaseUrl}auth/login`, values)
    .then((res)=>{

		const admin = {token:res?.data?.token,admin:res?.data?.data?._doc};

		localStorage.setItem('admin',JSON.stringify(admin))


		if (res.status===200) {
			 history.push('/admin')

		}
		
		//  history.push('/admin');
	})
    .catch((err)=>console.log(err));
	}

	return (
		<div className=''>
			<Container
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Paper elevation={3} className='paper__container'>
					<div className='login__container'>
						<h3 className='form__header'>Login</h3>
						<Formik
							validationSchema={signInValidation}
							initialValues={{ email: "", password: "" }}
							onSubmit={(values) => HandleLogin(values)}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form onSubmit={handleSubmit}>
									<div className='input__wrapper'>
										<TextField
											id='outlined-email-input'
											label='email'
											type='email'
											variant='outlined'
											style={{ width: "100%", margin: "10px" }}
											name='email'
											onChange={handleChange}
										/>

										{errors.email && touched.email && (
											<span style={{ color: "red" }}>{errors.email}</span>
										)}
										<TextField
											id='outlined-password-input'
											label='Password'
											type='password'
											autoComplete='current-password'
											variant='outlined'
											name='password'
											onChange={handleChange}
											style={{
												width: "100%",
												marginTop: "20px",
												marginBottom: "10px",
											}}
										/>
										{errors.password && touched.password && (
											<span style={{ color: "red" }}>{errors.password}</span>
										)}
									</div>
									<div className='form__Btn'>
										<Button
											variant='contained'
											type='submit'
											color='primary'
											className={classes.button}
											endIcon={<SendIcon />}
											disabled={isSubmitting}
										>
											Sign In
										</Button>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</Paper>
			</Container>
		</div>
	);
}

export default SignIn;
