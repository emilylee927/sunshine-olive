require("dotenv").config();
const { STRIPE_API_SECRET_KEY } = process.env;

const stripe = require("stripe")(STRIPE_API_SECRET_KEY);

module.exports = {
    charge: async (req, res) => {
        const { tokenId, totalCharge, chargeDesc } = req.body;
        const totalChargePenny = totalCharge * 100;
        try {
            let { status } = await stripe.charges.create({
                amount: totalChargePenny,
                currency: "usd",
                description: chargeDesc,
                source: tokenId
            });

            res.status(200).json({ status });
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    }
};
