import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import Dashboard from "./dashboard";

const Routes = () => {
  return (
    <Router>
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    </Router>
  );
};

export default Routes;
