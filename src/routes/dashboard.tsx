import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Layout from "../components/layout";
import Loading from "../components/loading";

const Dashboard = lazy(() => import("../pages/dashboard"));

const App = () => {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${path}`}>
            <Dashboard />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
