SELECT p.*, i.image_url
FROM product
    LEFT JOIN image i ON p.image_id = i.image_id;
WHERE product_id = $1;