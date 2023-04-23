import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Splash from "./components/Splash";



export default function App() {
  return (
    <>
      <Switch>

        <Route path="/">
          <Splash />
        </Route>


        <Route path="/login">
          <LoginFormPage />
        </Route>


      </Switch>
    </>

  );
}
