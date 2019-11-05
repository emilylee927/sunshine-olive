INSERT INTO product
    (name, description, price, category)
VALUES
    ($1, $2, $3, $4)
RETURNING *;