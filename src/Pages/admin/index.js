import React from "react";
import {  Route, Switch ,useRouteMatch} from 'react-router-dom';
import SideNav from "./sideNav";
import Students from "./Students";
import ExamBoard from "./ExamBoard";
import Admin from "./Admin";
import Student from "./Student";
import SerialNumber from "./SerialNumber";

const MainSection = () => {
    let { path, url } = useRouteMatch();


  return (
    <>
      <SideNav/>
      <Switch>
        <Route path={`${path}/`} exact component={Admin} />
        <Route path={`${path}/students`} exact component={Students} />
        <Route path={`${path}/serial-number`} exact component={SerialNumber} />
        <Route path={`${path}/exam-board`} exact component={ExamBoard} />
        <Route path={`${path}/students/:id`} component={Student} />
      </Switch>
    </>
  );
};

export default MainSection;
