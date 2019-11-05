UPDATE product
SET image_id = $2
WHERE product_id = $1
RETURNING *;