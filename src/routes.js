import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import { Switch, Route } from "react-router-dom";

export default (
    <Switch>
        <Route component={LoginPage} exact path="/" />
    </Switch>
);
