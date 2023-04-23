import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";


export default function App() {
  return (
    <>
      <h1>Hello from Neighborhood Node!</h1>
      <Navigation />
      <Switch>
        {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>

  );
}
