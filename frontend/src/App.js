import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Splash from "./components/Splash";
import NewsFeed from "./components/NewsFeed";
import Profile from "./components/Profile";


export default function App() {

  const sessionUser = useSelector(state => state.session.user);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Boolean(sessionUser);
    return (
      <Route {...rest} render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      } />
    );
  };

  return (
    <>

      <Switch>

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/news_feed" component={NewsFeed} />

        <Route path={"/login"}>
          <LoginFormPage />
        </Route>

        <Route path={"/"}>
          <Splash />
        </Route>

      </Switch>

    </>

  );
}
