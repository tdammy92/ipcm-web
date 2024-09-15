import React from "react";
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
import PrintCertificate from "../Pages/PrintCertificate";

import Gallery from "../Pages/Gallery";
import Policy from "../Pages/Policy";
import TermsC from "../Pages/TermsC";
import Footer from "../components/partials/Footer/Footer";

import NotFound from "../Pages/NotFound";

import ProtectedRoute from "../Pages/auth/ProtectedRoute";

import ExamInfo from "../Pages/exam/ExamInfo";
import MoneyLaundry from "../Pages/MoneyLaundry";
import ExamResult from "../Pages/exam/ExamResult";
import OnlineExam from "../Pages/exam/OnlineExam";
import StartExam from "../Pages/exam/StartExam";
import SelectExam from "../Pages/exam/SelectExam";
import Certificate from "../Pages/exam/Certificate";
import MainSection from "../Pages/admin";
import SignIn from "../Pages/auth/SignIn";
import SignUp from "../Pages/auth/SIgnUp";
import CertificateForm from "../Pages/CertificateForm";

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
          <Route exact path="/certificate">
            <Certificate />
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
            <MoneyLaundry />
          </Route>
          <Route exact path="/start-exam">
            <StartExam />
          </Route>
          <Route exact path="/select-exam">
            <SelectExam />
          </Route>
          <Route exact path="/online-exam">
            <OnlineExam />
          </Route>
          <Route exact path="/exam-result">
            <ExamResult />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/auth-certificate">
            <SignIn />
          </Route>
          <Route exact path="/certificate-form">
            <CertificateForm/>
          </Route>
          <Route exact path="/print-certificate">
            <PrintCertificate/>
          </Route>

          <ProtectedRoute
            // exact
            path="/admin"
            Component={MainSection}
          />
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Root;
