import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Splash from "./components/Splash";


export default function App() {
  return (
    <>
      <Switch>

        <Route path="/">
          <Splash />
        </Route>


        <Route path="/signup">
          <SignupFormPage />
        </Route>


      </Switch>
    </>

  );
}
