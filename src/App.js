import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/partials/NavBar/NavBar";
// import Footer from './components/partials/Footer/Footer'
import Home from "./components/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Member from "./components/Pages/Member";
import Nysc from "./components/Pages/Nysc";
import Examination from "./components/Pages/Examination";
import Certification from "./components/Pages/Certification";
import Register from "./components/Pages/Register";
import Project from "./components/Pages/Project";
import Career from "./components/Pages/Career";
import Consult from "./components/Pages/Consult";
import License from "./components/Pages/License";
import Admin from "./components/Pages/admin/Admin";
import SignUp from "./components/Pages/auth/SIgnUp";
import SignIn from "./components/Pages/auth/SignIn";
import SerialNumber from "./components/Pages/admin/SerialNumber";
import Students from "./components/Pages/admin/Students";
import Student from "./components/Pages/admin/Student";
import NotFound from "./components/Pages/NotFound";

import ProtectedRoute from "./components/Pages/auth/ProtectedRoute";
import Loader from "./components/partials/Loader";

const defualtTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#01996D",
		},
		secondary: {
			main: "#fff",
		},
	},
});

function App() {
	const user = useSelector((state) => state.users);
	const isLoggedin = user.isLoggedin;

	AOS.init();

	return (
		<ThemeProvider theme={defualtTheme}>
			{/* <ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/> */}
			<Loader />
			<div className='index'>
				<Router>
					<NavBar />

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/contact'>
							<Contact />
						</Route>
						<Route exact path='/member'>
							<Member />
						</Route>
						<Route exact path='/nysc'>
							<Nysc />
						</Route>
						<Route exact path='/examination'>
							<Examination />
						</Route>
						<Route exact path='/certification'>
							<Certification />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/projects'>
							<Project />
						</Route>
						<Route exact path='/career'>
							<Career />
						</Route>
						<Route exact path='/consultancy'>
							<Consult />
						</Route>
						<Route exact path='/license'>
							<License />
						</Route>
						{/* <Route exact path='/admin'>

                        <Admin/>

                    </Route> */}
						<Route exact path='/signup'>
							<SignUp />
						</Route>
						<Route exact path='/signin'>
							<SignIn />
						</Route>

						<ProtectedRoute
							exact
							path='/admin'
							IsLoggedin={isLoggedin}
							Component={Admin}
						/>

						<ProtectedRoute
							exact
							path='/students'
							IsLoggedin={isLoggedin}
							Component={Students}
						/>

						<ProtectedRoute
							exact
							path='/students/:id'
							IsLoggedin={isLoggedin}
							Component={Student}
						/>

						<ProtectedRoute
							exact
							path='/serial-number'
							IsLoggedin={isLoggedin}
							Component={SerialNumber}
						/>

						<Route exact path='*'>
							<NotFound />
						</Route>
					</Switch>
					{/* <Footer/> */}
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
