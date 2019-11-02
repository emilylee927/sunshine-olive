require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { register, login, logout } = require("./controllers/authController.js");

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Hey ~ Database is connected !");
});

//auth//
app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);

app.listen(6000, () => console.log("SunshineOlive Server is legit!"));
