import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Home from "./home/home.component";
import About from "./about/about.component";

const MainScreen = () => {
  const sessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Redirect to={"/"} />
      </Switch>
    );
  };
  return <Router>{sessionRoutes()}</Router>;
};

export default MainScreen;
