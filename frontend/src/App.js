import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Splash from "./components/Splash";
import NewsFeed from "./components/NewsFeed";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";


export default function App() {

  const sessionUser = useSelector(state => state.session.user);

  // Forces users to the login page if they are not siged in
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Boolean(sessionUser);
    return (
      <Route {...rest} render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      } />
    );
  };

  // Prevents users from seeing the NewsFeed or Splash page when logged in
  const AuthRoute = ({ component: Component, ...rest }) => {
    const sessionUser = useSelector(state => state.session.user);
    const isAuthenticated = Boolean(sessionUser);

    return (
      <Route {...rest} render={(props) =>
        isAuthenticated ? <Redirect to="/news_feed" /> : <Component {...props} />
      } />
    );
  };

  return (
    <>

      <Switch>

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/news_feed" component={NewsFeed} />

        <AuthRoute path="/login" component={LoginFormPage} />
        <AuthRoute path="/" component={Splash} />

        <Route path={"/login"}>
          <LoginFormPage />
        </Route>

        <Route exact path={"/"}>
          <Splash />
        </Route>

        <Route path="*">
          <NotFound /> {/* This catches all undefined routes */}
        </Route>

      </Switch>

    </>

  );
}
