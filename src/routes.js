import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Products from "./components/Products/Products";
import Admin from "./components/Admin/Admin";
import { Switch, Route } from "react-router-dom";

export default (
    <Switch>
        <Route component={Products} exact path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={Admin} path="/admin" />
    </Switch>
);
