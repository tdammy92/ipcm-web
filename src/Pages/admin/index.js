import React, { useCallback, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SideNav from "./sideNav";
import Students from "./Students";
import Student from "./Student";
import SerialNumber from "./SerialNumber";
import GallerySettings from "./GallerySettings";
import DashBoard from "./DashBoard";
import UploadExam from "./UploadExam";
import StudentResults from "./StudentResults";
import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import UseStyles from "./Style";
import Exams from "./Exams";
import Exam from "./Exam";
import StudentCertificate from "./StudentCertificate";

const MainSection = () => {
  let { path } = useRouteMatch();
  const classes = UseStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}

          >
            <MenuIcon  className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideNav
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Container className={classes.pageContainer}>

      <Switch>
        <Route path={`${path}/`} exact component={DashBoard} />
        <Route path={`${path}/courses`} exact component={DashBoard} />
        <Route path={`${path}/students`} exact component={Students} />
        <Route path={`${path}/serial-number`} exact component={SerialNumber} />
        <Route path={`${path}/exams`} exact component={Exams} />
        <Route path={`${path}/exam-upload`} exact component={UploadExam} />
        <Route path={`${path}/student-certificates`} exact component={StudentCertificate} />
        <Route
          path={`${path}/student-result`}
          exact
          component={StudentResults}
        />
        <Route
          path={`${path}/gallery-settings`}
          exact
          component={GallerySettings}
        />
        <Route path={`${path}/students/:id`} component={Student} />
        <Route path={`${path}/exams/:id`} component={Exam} />
      </Switch>

      </Container>
    </>
  );
};

export default MainSection;
