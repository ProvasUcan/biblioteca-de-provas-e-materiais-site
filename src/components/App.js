import NavBar from "./navbar/NavBar";
import SearchContainer from "./search/SearchContainer";
import AssigmentContainer from "./assigments/AssigmentContainer";
import Contribute from "./contribute/Contribute";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { apiBaseUrl } from "../config/apiConfig";
import { download } from "../helpers/downloadHelper";
import AboutPage from "../pages/AboutPage/AboutPage";
import LoginPage from "../pages/Login/LoginPage";
import UserGuard from "../services/security/guards/userGuard";
import { UserPage } from "../pages/UserPage/UserPage";
import HomePage from "../pages/HomePage/HomePage";
import { getAllCoursesStructure } from "../services/remote/course/courseRemote";
import { getAssigments } from "../services/remote/assigments/assigmentsRemote";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>

      <div className="main-app-container">
        {
          <>
            <NavBar></NavBar>

            <Switch>
              <Route exact path="/biblioteca-de-provas-e-materiais-site/">
                <HomePage 
                getAllCoursesStructure={getAllCoursesStructure}
                getAssigments={getAssigments}
                ></HomePage>
              </Route>

              <Route exact path="/biblioteca-de-provas-e-materiais-site/contribute">
                <Contribute getAllCoursesStructure={getAllCoursesStructure}></Contribute>
              </Route>

              <Route exact path="/biblioteca-de-provas-e-materiais-site/about" component={AboutPage}/>
              <Route exact path="/biblioteca-de-provas-e-materiais-site/login" component={LoginPage}/>
              <UserGuard path="/biblioteca-de-provas-e-materiais-site/user" component={UserPage} auth={isAuthenticated}>
              </UserGuard>
            </Switch>
          </>
        }
      </div>



    </Router>

  );
}

export default App;