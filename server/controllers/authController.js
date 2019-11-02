const bcrypt = require("bcrypt");

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, email, password, isadmin } = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForEmail(email);

        if (foundUser[0]) {
            res.status(409).json({
                message: "Username is taken! Please use another."
            });
        } else {
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = await db.auth.registerUser(
                first_name,
                last_name,
                email,
                hash,
                isadmin
            );

            req.session.user = {
                user_id: newUser[0].user_id,
                first_name: newUser[0].first_name,
                last_name: newUser[0].last_name,
                isadmin: newUser[0].isadmin
            };
            res.status(200).json(req.session.user);
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForEmail(email);

        if (!foundUser[0]) {
            res.status(403).json({
                message:
                    "Username or password is incorrect! Please try again :)"
            });
        } else {
            const isAuthenticated = bcrypt.compareSync(
                password,
                foundUser[0].hash
            );
            console.log(foundUser);

            if (!isAuthenticated) {
                res.status(403).json({
                    message:
                        "Username or password is incorrect! Please try again :)"
                });
            } else {
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    first_name: foundUser[0].first_name,
                    last_name: foundUser[0].last_name,
                    isadmin: foundUser[0].isadmin
                };

                res.status(200).json(req.session.user);
            }
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
};
