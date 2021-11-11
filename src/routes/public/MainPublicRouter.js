// @ts-nocheck
import React from 'react'
import { Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/AboutPage";
import LoginPage from "../../pages/Login/LoginPage";
import SignupPage from '../../pages/Signup/SignupPage';

import HomePage from "../../pages/HomePage/HomePage";
import ContributorsPage from "../../pages/ContributorsPage/ContributorsPage";
import { getAllCoursesStructure } from "../../services/remote/course/courseRemote";
import { getAssigments } from "../../services/remote/assigments/assigmentsRemote";
import Contribute from "../../components/contribute/Contribute";


function MainRouter() {
  return (
    <>
      <Route exact path="/biblioteca-de-provas-e-materiais-site/">
        <HomePage
          getAllCoursesStructure={getAllCoursesStructure}
          getAssigments={getAssigments}
        ></HomePage>
      </Route>

      <Route exact path="/biblioteca-de-provas-e-materiais-site/contribute">
        <Contribute getAllCoursesStructure={getAllCoursesStructure}></Contribute>
      </Route>

      <Route exact path="/biblioteca-de-provas-e-materiais-site/about" component={AboutPage} />
      <Route exact path="/biblioteca-de-provas-e-materiais-site/login" component={LoginPage} />
      <Route exact path="/biblioteca-de-provas-e-materiais-site/signup" component={SignupPage} />
      <Route exact path="/biblioteca-de-provas-e-materiais-site/contributers" component={ContributorsPage} />
    </>
  )
}

export default MainRouter
