require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { register, login, logout } = require("./controllers/authController.js");

const { CONNECTION_STRING, SESSION_SECRET, SECRET_KEY } = process.env;
const stripe = require("stripe")(SECRET_KEY);
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

//checkout
// app.post("/checkout", async (req, res) => {
//     console.log("Request:", req.body);
//     let error;
//     let status;
//     try {
//         const { product, token } = req.body;

//         const customer = await stripe.customers.create({
//             email: token.email,
//             source: token.id
//         });
//         const idempotency_key = uuid();
//         const charge = await stripe.charges.create(
//             {
//                 amount: product.price * 100,
//                 currency: "usd",
//                 customer: customer.id,
//                 receipt_email: token.email,
//                 description: `Purchased the ${product.name}`,
//                 shipping: {
//                     name: token.card.name,
//                     address: {
//                         line1: token.card.address_line1,
//                         line2: token.card.address_line2,
//                         city: token.card.address_city,
//                         country: token.card.address_country,
//                         postal_code: token.card.address_zip
//                     }
//                 }
//             },
//             {
//                 idempotency_key
//             }
//         );
//         console, log("charge:", { charge });
//         status = "success";
//     } catch (error) {
//         console.error("Error:", error);
//         status = "failure";
//     }
//     res.json({ error, status });
// });

app.listen(6000, () => console.log("SunshineOlive Server is legit!"));
