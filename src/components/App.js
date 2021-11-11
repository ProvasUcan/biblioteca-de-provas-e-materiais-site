import NavBar from "./navbar/NavBar";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React from "react";



import MainPublicRouter from "../routes/public/MainPublicRouter";
import MainPrivateRouter from "../routes/private/MainPrivateRouter";
import MainAdminRouter from "../routes/admin/MainAdminRouter";
import { isAdminUser } from "../services/auth/authService";

const App = () => {
  return (
    <Router>

      <div className="main-app-container">
        {
          <>
            <NavBar></NavBar>

            <Switch>
              <MainPrivateRouter></MainPrivateRouter>
            </Switch>
            <Switch>
              <MainPublicRouter></MainPublicRouter>
            </Switch>
            <Switch>
              <MainAdminRouter
                adminAuth={isAdminUser}
              ></MainAdminRouter>
            </Switch>


          </>
        }
      </div>



    </Router>

  );
}

export default App;