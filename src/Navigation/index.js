import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/partials/NavBar/NavBar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Member from "../Pages/Member";
import Nysc from "../Pages/Nysc";

import Certification from "../Pages/Certification";
import Register from "../Pages/Register";
import Project from "../Pages/Project";
import Career from "../Pages/Career";
import Consult from "../Pages/Consult";
import License from "../Pages/License";

import SignUp from "../Pages/auth/SIgnUp";
import SignIn from "../Pages/auth/SignIn";
import SerialNumber from "../Pages/admin/SerialNumber";
import Students from "../Pages/admin/Students";
import Student from "../Pages/admin/Student";
import Gallery from "../Pages/Gallery";
import Policy from "../Pages/Policy";
import TermsC from "../Pages/TermsC";
import GallerySettings from "../Pages/admin/GallerySettings";
import Footer from "../components/partials/Footer/Footer";

import NotFound from "../Pages/NotFound";

import ProtectedRoute from "../Pages/auth/ProtectedRoute";

import ExamInfo from "../Pages/exam/ExamInfo";
import ExamBoard from "../Pages/admin/ExamBoard";
import UploadExam from "../Pages/admin/UploadExam";
import StudentResults from "../Pages/admin/StudentResults";
import MoneyLaundry from "../Pages/MoneyLaundry";
import MainSection from '../Pages/admin';

import {
  useLocation
} from "react-router-dom";


function Root() {






  return (
    <div className="index">
    <Router>
     <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/member">
          <Member />
        </Route>
        <Route exact path="/nysc">
          <Nysc />
        </Route>
        <Route exact path="/exam-info">
          <ExamInfo />
        </Route>
        <Route exact path="/certification">
          <Certification />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/consultancy">
          <Consult />
        </Route>
        <Route exact path="/license">
          <License />
        </Route>
        <Route exact path="/policy">
          <Policy />
        </Route>
        <Route exact path="/t&c">
          <TermsC />
        </Route>
        <Route exact path="/money-laundry">
      <MoneyLaundry/>
        </Route>
        {/* <Route
          exact
          path="/form"
        >
          <PrintForm />
        </Route> */}
       
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>

        <ProtectedRoute
          // exact
          path="/admin"
          Component={MainSection}
        />

        {/* <ProtectedRoute
          exact
          path="/students"
          Component={Students}
        />
        <ProtectedRoute
          exact
          path="/exam-board"
          Component={ExamBoard}
        />
        <ProtectedRoute
          exact
          path="/exam-upload"
          Component={UploadExam}
        />
        <ProtectedRoute
          exact
          path="/student-result"
          Component={StudentResults}
        />
        <ProtectedRoute
          exact
          path="/gallery-settings"
          Component={GallerySettings}
        />

        <ProtectedRoute
          exact
          path="/students/:id"
          Component={Student}
        />

        <ProtectedRoute
          exact
          path="/serial-number"
          Component={SerialNumber}
        /> */}

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
  )
}

export default Root