require("dotenv").config();
const {
    CONNECTION_STRING,
    SESSION_SECRET,
    SECRET_KEY,
    CLOUDINARY_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;

const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const stripe = require("stripe")(SECRET_KEY);
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const util = require("util");

const { register, login, logout } = require("./controllers/authController");
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");

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

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

app.set("cloudinary", cloudinary);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage });

app.set("util", util);

//auth//
app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);

//product//
app.get("/api/product", productController.getAll);
app.post("/api/product", productController.add);
app.get("/api/product/:product_id", productController.getOne);
app.put("/api/product/:product_id", productController.edit);
app.delete("/api/product/:product_id", productController.delete);
app.post(
    "/api/product/image/:product_id",
    upload.single("image"),
    productController.upload
);

//cart//
app.get("/api/cart/:user_id", cartController.get);
app.post("/api/cart/:user_id", cartController.add);
app.delete("/api/cart/:user_id/:cart_item_id", cartController.delete);

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
