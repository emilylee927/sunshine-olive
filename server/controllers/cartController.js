module.exports = {
    get: async (req, res) => {
        const db = req.app.get("db");
        const { user_id } = req.params;

        let cart;
        try {
            cart = await db.cart_item.get(user_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching cart items from database"
            });
        }

        res.status(200).json(cart);
    },

    add: async (req, res) => {
        const db = req.app.get("db");
        const { user_id } = req.params;
        const { product_id } = req.body;

        let cart;
        try {
            cart = await db.cart_item.add(product_id, user_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error adding cart item into database"
            });
        }

        res.status(200).json(cart);
    },

    delete: async (req, res) => {
        const db = req.app.get("db");
        const { user_id, cart_item_id } = req.params;

        let cart;
        try {
            cart = await db.cart_item.delete(cart_item_id, user_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error deleting cart item from database"
            });
        }

        res.status(200).json(cart);
    }
};
