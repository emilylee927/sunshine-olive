module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get("db");

        let products;
        try {
            products = await db.product.getAll();
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error retrieving products"
            });
        }

        res.status(200).json(products);
    },

    getOne: async (req, res) => {
        const { product_id } = req.params;
        const db = req.app.get("db");

        let product;
        try {
            product = await db.product.getOne(product_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: `Error retrieving product with product_id of ${product_id}`
            });
        }

        res.status(200).json(product[0]);
    },

    add: async (req, res) => {
        const { name, description, price, category } = req.body;

        const db = req.app.get("db");

        let products;
        try {
            products = await db.product.add(name, description, price, category);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error adding product into database"
            });
        }

        res.status(200).json(products);
    },

    upload: async (req, res) => {
        if (!req.file) {
            return res.status(500).json({
                message: "Error, no image uploaded"
            });
        }
        const { product_id } = req.params;
        const db = req.app.get("db");
        const cloudinary = req.app.get("cloudinary");
        const util = req.app.get("util");

        const file = req.file;
        const path = file.path;
        const name = file.filename;
        const type = file.mimetype;
        const size = file.size;

        const uploaderPromise = util.promisify(cloudinary.uploader.upload);
        let uploadResponse;
        try {
            uploadResponse = await uploaderPromise(path);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error uploading image to Cloudinary"
            });
        }

        const { secure_url } = uploadResponse;

        let image;
        try {
            image = await db.product.upload(name, type, size, secure_url);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error updating image table"
            });
        }

        let product;
        try {
            product = await db.product.editImage(product_id, image[0].image_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error updating product table"
            });
        }

        res.status(200).json(product[0]);
    },

    edit: async (req, res) => {
        const { name, description, price, category } = req.body;
        const { product_id } = req.params;
        const db = req.app.get("db");

        let product;
        try {
            product = await db.product.edit(
                product_id,
                name,
                description,
                price,
                category
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: `Error editing product with product_id of ${product_id}`
            });
        }

        res.status(200).json(product[0]);
    },

    delete: async (req, res) => {
        const { product_id } = req.params;
        const db = req.app.get("db");

        let products;
        try {
            products = await db.product.delete(product_id);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: `Error deleting product with product_of of ${product_id}`
            });
        }

        res.status(200).json(products);
    }
};
