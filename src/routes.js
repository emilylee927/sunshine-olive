import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Shop from "./components/Shop/Shop";
import PlantCare from "./components/PlantCare/PlantCare";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import AddProductPage from "./components/Admin/AddProductPage";
import CheckOut from "./components/Checkout/Checkout";
import UploadProductImage from "./components/Admin/UploadProductImage";

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Shop} path="/shop" />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={Admin} exact path="/admin" />
        <Route component={AddProductPage} path="/admin/addProduct" />
        <Route
            component={UploadProductImage}
            path="/admin/uploadProductImage/:product_id"
        />
        <Route component={PlantCare} path="/plantcare" />
        <Route component={CheckOut} path="/checkout" />
    </Switch>
);
