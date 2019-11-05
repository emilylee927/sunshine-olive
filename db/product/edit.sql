UPDATE product
SET name = $2,
    description = $3,
    price = $4,
    category = $5
WHERE product_id = $1
RETURNING *;