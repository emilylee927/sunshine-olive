SELECT p.*, i.image_url
FROM product p
    LEFT JOIN image i ON p.image_id = i.image_id
WHERE p.product_id = $1;