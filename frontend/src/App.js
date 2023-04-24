import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Splash from "./components/Splash";
import NewsFeed from "./components/NewsFeed";


export default function App() {
  return (
    <>

        <Switch>

        <Route path={"/feed"}>
            <NewsFeed />
          </Route>

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
